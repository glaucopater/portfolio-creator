#!/usr/bin/env node
//launch the command line mode
const execSync = require('child_process').execSync;
execSync(`node cli.js ${process.argv[2]} > dirTree.js`);
execSync(`node cli.js`);
