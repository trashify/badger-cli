#!/usr/bin/env node
'use strict'

const args = require('get-them-args')(process.argv.slice(2))
const badge = require('badge-studio')

if (!args.subject || !args.status) {
  console.error('Subject and status is required')
} else {
  console.log(badge(args))
}
