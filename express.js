'use strict'

var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
var ErrorEventHandler = require('./error_handler')
var routes = require('./routes')

module.exports = function(configuration) {

    var application = express()
    /*
    if (configuration && configuration.secured) {
        application.use(authentication())
    }
    */
    application.use(cors())
    application.use(bodyParser.json())
    /*
    if (configuration && configuration.useDomain) {
        application.use(expressDomain)
    }
    */
    application.use('/', routes)
    application.use(ErrorEventHandler)
    application.use(express.static(path.join('/home/vannasay/NodeJS', 'public')));

    return application
}