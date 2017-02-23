'use strict'

// Create router
var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var manga = require('./manga')
var connection = require('./connection')

// Register routes on router
router.get('/mangas', function(req, res, next) {
  console.log('getting mangas')
  manga.getAllMangas((err,mangas) => {
    res.json(mangas)
  })
})

router.get('/mangas/:id', function(req,res,next) {
  console.log('getting manga')
  var query = {_id: req.params.id}
  manga.getManga(query, function(err, data) {
    res.json(data)
  })
})

router.post('/mangas', function(req, res, next) {
  console.log('adding manga')
  req.on('data', function(data) {
    var mangaJson = JSON.parse(data)
    var newManga = manga.Manga(mangaJson)
    console.log(newManga)
    manga.addManga(newManga, function(err, newData) {
      res.json(newData)
    })
  })
})

router.put('/mangas/:id', function(req, res, next) {
  console.log('editing manga')
  req.on('data', function(data) {
    var update = JSON.parse(data)
    var query = {_id: req.params.id}
    manga.updateManga(query, update, function(err, newData) {
      res.json(newData)
    })
  })
})

router.delete('/mangas/:id', function(req, res, next) {
  console.log('removing manga')
  var query = {_id: req.params.id}
  manga.removeManga(query, function(err, data) {
    res.json(data)
  })
})

router.delete('/mangas', function(req, res, next) {
  console.log('removing mangas')
  manga.removeAllManga(function(err) {
    res.send('All mangas removed')
  })
})


// Make router available
module.exports = router;