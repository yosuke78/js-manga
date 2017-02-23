'use strict'

var mongoose = require('mongoose')

var connect = function() {
    var options = { server: { socketOptions: { keepAlive: 1 } } }
    mongoose.connect('mongodb://localhost/manga-arcs', options)
    console.log('database connected')
}

mongoose.connection.on('error', console.log)
mongoose.connection.on('disconnected', console.log)

module.exports = {
    connect: function(callback) {
        mongoose.connection.on('connected', function(ref) {
            callback(ref)
            console.log('db connected')
        })

        connect()
    },

    disconnect: function(callback) {
        mongoose.disconnect(callback)
    }
}