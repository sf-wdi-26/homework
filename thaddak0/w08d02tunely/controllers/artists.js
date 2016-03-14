var Artist = require('../models/Artist')
var Album = require('../models/Album')
  // var User = require('../models/User')

var artistsController = {
  index: function(req, res) {
      Artist.find({}, function(err, artists) {
        res.render('artists', {artists:artists, user: req.user});
      })
  },
  new: function(req, res) {
      res.render('artists/new');
  },
  create: function(req, res) {
      var artistparams = req.body
      Artist.create(artistparams, function(err, artist){
        err ? res.redirect('/artist/new') : res.render('artists/show', {artist: artist})
      });
  },
  show: function(req, res) {
      var id = req.params.id;
      Artist.findById({_id: id}, function(err, artist) {
      err ? res.redirect('/artists') : res.render('artists/show', {artist: artist, user: req.user})
      })
  },
  edit: function(req, res) {
      var id = req.params.id;
      Artist.findById({_id: id}, function(err, artist) {
        res.render('artists/edit', {artist: artist, user: req.user});
      })
  },
  update: function(req, res) {
    var id = req.params.id;
    Artist.findById({_id: id}, function(err, artist){

      if (req.body.name) {
         artist.name = req.body.name;
      }

      if (req.body.bio) {
          artist.bio = req.body.bio;
      }

      if (req.body.photo_url) {
          artist.photo_url = req.body.photo_url;
      }

      artist.save(function(err) {
        err ? console.log("Could not save because:", err) : res.redirect('/artists')
      })

})

  },
  delete: function(req, res) {

  },
  api: function(req, res) {
    Artist.find({}, function(err, artists) {
      res.json(artists)
    })
  },
  albumApi: function(req, res) {
    Album.find({}, function(err, albums) {
      res.json(albums)
    })
  }
};

module.exports = artistsController;
