'use strict'
var connection = require('./connection')
var manga = require('./manga')

var ct = manga.Manga({
    _id : 1,
    name: 'Captain Tsubasa',
    author : 'Yoichi Takahashi',
    debut : 1981,
    volumes : 37,
    chapters : 114
})

var db = new manga.Manga({
    _id : 2,
    name: 'Dragon Ball',
    author : 'Akira Toriyama',
    debut: 1984,
    volumes: 42,
    chapters: 519
})

connection.connect(function(){

    manga.getAllMangas(function(err, mangas){
        connection.disconnect()
    })

    manga.addManga(ct, () => {})
    manga.addManga(db, () => {})
    
    manga.addManga(manga.Manga({
        _id: 3,
        name: 'Saint Seiya',
        author: 'Masami Kurumada',
        debut: 1986,
        volumes: 28,
        chapters: 104
    }), () => {})
    

    //manga.updateManga({name: 'Captain Tsubasa'}, {volumes: 60}, () => {})
    //manga.getManga({name: 'Captain Tsubasa'}, () => {})
    //manga.getManga({_id: 3}, () => {})

    //manga.removeManga({name : 'Captain Tsubasa'}, () => {})
    //manga.removeAllManga(() => {})
})