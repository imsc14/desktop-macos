#!/usr/bin/env node
'use strict';
const meow = require('meow');
const dateTime = require('date-time');
const execa = require('execa');

meow(`
	Usage
	  $ desktop
`);

const filename = `Screenshot ${dateTime().replace(/:/g, '.')}.png`;

execa('screencapture', ['-m', '-x', filename]);
