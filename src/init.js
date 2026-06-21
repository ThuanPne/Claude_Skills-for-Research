const fs = require('fs');
const path = require('path');

const GREEN = '\x1b[32m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

function log(msg) { process.stdout.write(msg + '\n'); }
function success(msg) { log(`${GREEN}✓${RESET} ${msg}`); }
function skip(msg) { log(`${YELLOW}─${RESET} ${msg} (already exists, skipped)`); }
function info(msg) { log(`${CYAN}  ${msg}${RESET}`); }

function copyDirMerge(src, dest, dryRun = false) {
  const entries = fs.readdirSync(src, { withFileTypes: true });
  let copied = 0;
  let skipped = 0;

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      if (!dryRun && !fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      const result = copyDirMerge(srcPath, destPath, dryRun);
      copied += result.copied;
      skipped += result.skipped;
    } else {
      if (fs.existsSync(destPath)) {
        skip(path.relative(process.cwd(), destPath));
        skipped++;
      } else {
        if (!dryRun) {
          fs.mkdirSync(dest, { recursive: true });
          fs.copyFileSync(srcPath, destPath);
        }
        success(path.relative(process.cwd(), destPath));
        copied++;
      }
    }
  }

  return { copied, skipped };
}

function ensureDir(dirPath, dryRun = false) {
  if (fs.existsSync(dirPath)) {
    skip(path.relative(process.cwd(), dirPath) + '/');
  } else {
    if (!dryRun) fs.mkdirSync(dirPath, { recursive: true });
    success(path.relative(process.cwd(), dirPath) + '/');
  }
}

function init({ dryRun = false } = {}) {
  const packageRoot = path.join(__dirname, '..');
  const destRoot = process.cwd();

  log('');
  log(`${BOLD}paper-pilot init${RESET}${dryRun ? ' (dry run)' : ''}`);
  log('─'.repeat(50));

  // 1. Copy .claude/ (skills + commands)
  const claudeSrc = path.join(packageRoot, '.claude');
  const claudeDest = path.join(destRoot, '.claude');

  if (!fs.existsSync(claudeSrc)) {
    log(`\x1b[31mError: .claude/ not found in package. Reinstall paper-pilot.\x1b[0m`);
    process.exit(1);
  }

  log(`\nInstalling skills into ${CYAN}.claude/${RESET}`);
  const { copied, skipped } = copyDirMerge(claudeSrc, claudeDest, dryRun);

  // 2. Create paper/sections/ directory
  log(`\nCreating paper workspace`);
  ensureDir(path.join(destRoot, 'paper'), dryRun);
  ensureDir(path.join(destRoot, 'paper', 'sections'), dryRun);

  // 3. Create paper/notes/.gitkeep if not present
  const notesDir = path.join(destRoot, 'paper', 'notes');
  const notesKeep = path.join(notesDir, '.gitkeep');
  if (!fs.existsSync(notesKeep)) {
    if (!dryRun) {
      fs.mkdirSync(notesDir, { recursive: true });
      fs.writeFileSync(notesKeep, '');
    }
    success('paper/notes/');
  } else {
    skip('paper/notes/');
  }

  // 4. Summary
  log('');
  log('─'.repeat(50));
  log(`${copied} file(s) installed, ${skipped} skipped`);
  log('');
  log(`${BOLD}You're ready! Open Claude Code and run:${RESET}`);
  log('');
  info('/paper:explore   ← find your research topic');
  info('/paper:plan      ← plan your paper structure');
  info('/paper:teach     ← learn how to write each section');
  info('/paper:write     ← draft each section with AI guidance');
  info('/paper:review    ← get feedback on your drafts');
  log('');
}

function update({ dryRun = false } = {}) {
  const packageRoot = path.join(__dirname, '..');
  const destRoot = process.cwd();

  log('');
  log(`${BOLD}paper-pilot update${RESET}${dryRun ? ' (dry run)' : ''}`);
  log('─'.repeat(50));
  log(`${CYAN}Only skill files will be updated. Your paper/ folder is untouched.${RESET}`);
  log('');

  const targets = [
    { src: path.join(packageRoot, '.claude', 'skills'), dest: path.join(destRoot, '.claude', 'skills'), label: 'skills' },
    { src: path.join(packageRoot, '.claude', 'commands'), dest: path.join(destRoot, '.claude', 'commands'), label: 'commands' },
  ];

  let updated = 0;
  let added = 0;

  for (const { src, dest, label } of targets) {
    if (!fs.existsSync(src)) continue;
    log(`Updating .claude/${label}/`);

    const entries = fs.readdirSync(src, { withFileTypes: true });
    for (const entry of entries) {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        // skill subfolder — overwrite SKILL.md inside
        const skillSrc = path.join(srcPath, 'SKILL.md');
        const skillDest = path.join(destPath, 'SKILL.md');
        if (!fs.existsSync(skillSrc)) continue;

        const isNew = !fs.existsSync(skillDest);
        if (!dryRun) {
          fs.mkdirSync(destPath, { recursive: true });
          fs.copyFileSync(skillSrc, skillDest);
        }
        if (isNew) {
          success(`${path.relative(destRoot, skillDest)} (new)`);
          added++;
        } else {
          log(`${CYAN}↑${RESET} ${path.relative(destRoot, skillDest)}`);
          updated++;
        }
      } else {
        // command file — overwrite directly
        const isNew = !fs.existsSync(destPath);
        if (!dryRun) {
          fs.mkdirSync(dest, { recursive: true });
          fs.copyFileSync(srcPath, destPath);
        }
        if (isNew) {
          success(`${path.relative(destRoot, destPath)} (new)`);
          added++;
        } else {
          log(`${CYAN}↑${RESET} ${path.relative(destRoot, destPath)}`);
          updated++;
        }
      }
    }
  }

  log('');
  log('─'.repeat(50));
  log(`${updated} file(s) updated, ${added} new file(s) added`);
  log(`${YELLOW}─${RESET} paper/ folder untouched`);
  log('');
  log(`${BOLD}Update complete! Restart Claude Code to load new skills.${RESET}`);
  log('');
}

module.exports = { init, update };
