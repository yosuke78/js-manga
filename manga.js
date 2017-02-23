'use strict'

var mongoose = require('mongoose')
var Schema = mongoose.Schema

var mangaSchema = new Schema({
    _id: Number,
    name: {
        type: String,
        unique: true,
        required: true
    },
    author: String,
    debut: Number,
    volumes: Number,
    chapters: Number
})

var Manga = mongoose.model('Manga', mangaSchema)

var exports = module.exports = {};

exports.getAllMangas = function(callback) {
    Manga.find(function(err, mangas){
        if (err) {
            return console.log(err)
        }
        mangas.forEach(function(manga){
            console.log(manga)
        })
        
        callback(err,mangas)
        
    })
}

exports.addManga = function(manga, callback) {
    manga.save(function (err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('Saved ', data.name)
        }

        callback(err, data)
    })
}

exports.getManga = function(query, callback){
    Manga.findOne(query, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log(data)
        }

        callback(err, data)
    })
}

exports.updateManga = function(query, update, callback) {
    Manga.findOneAndUpdate(query, update, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Updated : ", data.name)
        }

        callback(err, data)
    })
}

exports.removeManga = function(query, callback){
    Manga.findOneAndRemove(query, function(err, data) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("Removed : ", data.name)
        }

        callback(err, data)
    })
}

exports.removeAllManga = function(callback) {
    Manga.remove({}, function(err) {
        if (err) {
            console.log(err)
        }
        else {
            console.log("All data removed.")
        }

        callback(err)
    })
}

exports.Manga = Manga