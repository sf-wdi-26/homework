/************
 * DATABASE *
 ************/
var Album = require('../models/album');
var Song = require('../models/song');

function returnError (err) {
  return console.log(err);
}

function renderHome (req, res) {
  res.render('./partials/home');
}

function renderAlbums (req, res) {
  Album.find({}, function(err, albums){
    if (err) returnError(err);
    res.render('./partials/index', {albums:albums});
  });
}

function renderAlbum (req, res) {
  // var id = req.params.id;
  // console.log(id)
  Album.findById(req.params.id, function(err, album){
    // console.log('id ** ', req.params.id);
    if (err) returnError(err);
    console.log('album ', album);
    res.render('./partials/show', {album: album});
  });
}

function newAlbum (req, res) {
  res.render('./partials/new');
}

function createAlbum (req, res) {
  var name = req.body.name;
  var artistName = req.body.artistName;
  var releaseDate = req.body.releaseDate;
  var photoUrl = req.body.photoUrl;
  Album.create({
    name: name,
    artistName: artistName,
    releaseDate: releaseDate,
    photoUrl: photoUrl
  }, function(err, album){
    if (err) return returnError(err);
    res.redirect('/albums/'+album._id + '/songs/new');
    // res.redirect('/albums');
  });
}

function editAlbum (req, res) {
  // var id = req.params.id;
  Album.findById(req.params.id, function(err, album){
    if (err) returnError(err);
    console.log('album ', album);
    res.render('./partials/edit', {album: album});
  });
} 

function updateAlbum (req, res) {
  var id = req.params.id;

  Album.find({_id: id}, function(err, album){
    if (err) returnError(err);
    if (req.body.name) album.name = req.body.name;
    if (req.body.artistName) album.artistName = req.body.artistName;
    if (req.body.releaseDate) album.releaseDate = req.body.releaseDate;
    if (req.body.photoUrl) album.photoUrl = req.body.photoUrl;
    var obj = {
      name: album.name,
      artistName: album.artistName,
      releaseDate: album.releaseDate,
      photoUrl: album.photoUrl
    }
    Album.update({_id: id}, obj, function(err, album) {
      if (err) returnError(err);
      res.redirect('/albums/'+ id);
    });
  });
}

function deleteAlbum (req, res) {
  var id = req.params.id;
  // console.log(id)
  Album.findOne({_id: id}, function(err, album){
    if (err) returnError(err);
    console.log(album)
    album.remove(function(){
    res.redirect('/albums');
    });
  });
}

function apiRoot (req, res) {
    res.json({
      message: "Welcome to tunely!",
      documentation_url: "https://github.com/tgaff/tunely/api.md",
      base_url: "http://tunely.herokuapp.com",
      endpoints: [
        {method: "GET", path: "/api", description: "Describes available endpoints"},
        {method: "GET", path: "/api/albums", description: "Shows index of all albums"},
        {method: "GET", path: "/api/albums/:id", description: "Shows specified album"}
      ]
    });
}

function apiAlbums (req, res){
  Album.find({}, function(err, albums){
    if (err) returnError(err);
    res.json(albums);
  });
}

function deathMetal (req, res){
  res.render('./partials/deathmetal_content',{layout: "deathmetal_layout"});
}

function search (req, res) {
  var query = req.query.keyword;
  var searchResults = [];
  if (query) {
    Album.find({$text: {$search: query}}, function (err, albumResults) {
      if (err) {
        returnError(err);
      } else if (albumResults.length > 0) {
          searchResults.push.apply(searchResults, albumResults);
      }
    });

    //FYI regex is an inefficient way to deal with case-sensitivity in the query
    //we could build a new field in songs called title_lower and search through that field instead, but I didn't want to mess around with the schema too much
    //for the purposes of this short project, let's just stick with this for now. it works.
    Album.find({"songList.title":  {$regex: new RegExp('^' + query.toLowerCase(), 'i')}}, function (err, songResults) {
      if (err) {
        returnError(err);
        res.render("./partials/search", {albums: searchResults, previous_search_value: query});
      } else if (songResults.length > 0) {
          searchResults.push.apply(searchResults, songResults);
      }
    });
    res.render("./partials/search", {albums: searchResults, previous_search_value: query});
  } else {
    res.render("./partials/search", {albums: searchResults, previous_search_value: query});
  }
  //KEEP THIS COMMENTED OUT CODE FOR NOW UNTIL WE ARE SURE THE NEW FORM WORKS WITH SONGS
     //couldn't test to my satisfaction until the new form for songs is done.
     //need to make sure songs/albums that share a keyword are both rendered to the page.

  // var query = req.query.keyword;
  // Album.find({$text: {$search: query}}, function (err, data) {
  //   if (err) {
  //     returnError(err);
  //     res.render("./partials/search", {albums: data});
  //   } else if (data.length === 0) {
  //     console.log('Sorry, there are no albums by that artist.');
  //     res.render("./partials/search", {albums: data, previous_search_value: query});
  //   } else {
  //     res.render("./partials/search", {albums: data, previous_search_value: query});
  //   }
  // });
}

// shows specific album -- NOT REALLY PRACTICAL UNLESS YOU KNOW THE GENERATED _ID
// function apiAlbum (req, res){
//   var id = req.params.id;
//   Album.findById(id, function(err, album){
//     if (err) return console.log(err);
//     res.json(album);
//   });
// }



module.exports = {
  returnError: returnError,
  renderHome: renderHome,
  renderAlbums: renderAlbums,
  renderAlbum: renderAlbum,
  newAlbum: newAlbum,
  createAlbum: createAlbum,
  editAlbum: editAlbum,
  updateAlbum: updateAlbum,
  deleteAlbum: deleteAlbum,
  apiRoot: apiRoot,
  apiAlbums: apiAlbums,
  deathMetal: deathMetal,
  search: search
};
