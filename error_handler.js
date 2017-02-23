'use strict'

const util = require('util')
var express = require('express')
var bodyParser = require('body-parser')

exports.NotFoundError = function(message) {
  Error.call(this)
  this.statusCode = 404
  this.message = message
  this.name = 'NotFound'
}
util.inherits(exports.NotFoundError, Error)

module.exports = function(err, req, res, next) {
  res.status(err.statusCode || 500)
  var errorObj = {
    message: err.message,
    errors: err.errors
    }
  res.json(errorObj)
}