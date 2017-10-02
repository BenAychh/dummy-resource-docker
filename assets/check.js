#!/usr/bin/env node

const lawgs = require('lawgs');
const { handle, log } = require('./common');

handle((opts, cb) => {
  log(opts)
  cb(null, [ { ref: '123' } ]);
})
