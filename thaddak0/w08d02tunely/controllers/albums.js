var Album = require('../models/Album');
var Artist = require('../models/Artist');

var albumsController = {

    new: function (req, res) {
      var id = req.params.id;
      Artist.findById({_id: id}, function(err, artist) {
        // console.log("show page is working")
        // console.log(artist);
      err ? res.redirect('/artists/:id') : res.render('albums/new', {artist: artist, user: req.user})
    });
    },
    create: function (req, res) {
      var albumbody = req.body;
      var artistid = req.body.artistid;
      Album.create(albumbody, function(err, album){
          Artist.findById({_id: artistid}, function(err, artist){
                console.log(album);
                console.log(artist);
                artist.albums.push(album);
                artist.save();
                res.redirect('/');
                console.log(artist.albums);
              });
            });
          },
    edit: function (req, res) {

    },
    update: function (req, res) {

    },
    delete: function (req, res) {

    }


}

module.exports = albumsController;
