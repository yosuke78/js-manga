'use strict'
var connection = require('./connection')

connection.connect(() => {
    var http = require('http')
    var express = require('./express')

    var applicationBuilder = require('./express')
    var application = applicationBuilder({useDomain: true})

    var server = http.Server(application)
    server.listen(8080)
    console.log('listening')
})


/*
http.createServer(function(req, res) {
    var requestData = ''

    req.on('data', function(chunk) {
        requestData += chunk.toString()
    })

    req.on('end', function() {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(requestData)
    })
}).listen(1337, '127.0.0.1')

console.log('Server running at http://127.0.0.1:1337/')
*/