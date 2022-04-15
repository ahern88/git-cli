#!/usr/bin/env node

const program = require('commander');

program
  .version('v0.0.1')
  .option('init', 'init a git project')
  .option('clone', 'clone a remote git project')
  .option('add', 'add file to index')
  .option('commit', 'make a commit object')
  .option('pull', 'pull new code from remote')
  .option('push', 'push commit to remote')
  .option('merge', 'merge code')
  .option('branch', 'branch tool')
  .option('remote', 'set remote info')
  .option('config', 'config info')
  .parse(process.argv);

var options = program.opts();

console.log(options);
