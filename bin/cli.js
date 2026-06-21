#!/usr/bin/env node
'use strict';

const { init } = require('../src/init');

const args = process.argv.slice(2);
const command = args[0];
const flags = args.slice(1);
const dryRun = flags.includes('--dry-run');

const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

switch (command) {
  case 'init':
    init({ dryRun });
    break;

  case '--version':
  case '-v': {
    const pkg = require('../package.json');
    console.log(pkg.version);
    break;
  }

  case '--help':
  case '-h':
  case undefined:
    console.log(`
${BOLD}paper-pilot${RESET} — Install Claude Code paper-writing skills into your project

Usage:
  npx paper-pilot init           Install skills into current directory
  npx paper-pilot init --dry-run Preview what would be installed
  npx paper-pilot --version      Show version
  npx paper-pilot --help         Show this help

After init, open Claude Code and run /paper:explore to get started.
`);
    break;

  default:
    console.error(`Unknown command: ${command}`);
    console.error('Run "npx paper-pilot --help" for usage.');
    process.exit(1);
}
