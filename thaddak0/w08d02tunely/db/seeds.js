var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://localhost/artists');

var Artist = require('../models/Artist');
var Album = require('../models/Album');

Artist.remove({}, function(err) {
  if (err) {
    console.log("ERROR:", err);
  }
});


var albums = [
  {
    name: "Chapter 249: 12-16-72",
    yearReleased: "1996",
    songCount: 12
  },
  {
    name: "Trill",
    yearReleased: "2005",
    songCount: 17
  },
  {
    name: "Pimpalation",
    yearReleased: "2006",
    songCount: 16
  }
]



var artists = [
 {
      name: "Dj Screw",

      albums: [],

      bio: "Robert Earl Davis, Jr. (July 20, 1971 – November 16, 2000), better known by his stage name DJ Screw, was an American hip hop DJ who was based in Houston, Texas. He was known as a central figure in the Houston hip hop community and was the creator of the now-famous chopped and screwed DJ technique. This creation led to his nickname of 'The Originator'.",

      photo_url: "https://pbs.twimg.com/media/CRiHcTCUkAALC4i.jpg"
 },
 {

      name: "Bun B" ,

      albums: [],

      bio: "Bernard Freeman, professionally known by his stage name Bun B, is an American rapper and was one half of the southern rap duo UGK. He is also a guest lecturer at Rice University, located in Houston, Texas.",

      photo_url: " http://img2-ak.lst.fm/i/u/arO/59a8aeb49c324d07b93a13ca3b4d1d2c"

  },

  {
      name: "Pimp C",

      albums: [],

      bio: "Chad Lamont Butler, better known by his stage name Pimp C, was an American hip hop recording artist and producer. He was best known for his work with Bun B as a founding member of the Underground Kingz.",

      photo_url: " http://photon.101medialablimit.netdna-cdn.com/hypebeast.com/image/2015/11/pimp-c-lil-wayne-3-way-freak-001.jpg?w=1024"
  },
  {
      name: "Kanye West",

      bio: "Kanye Omari West is an American hip hop recording artist, songwriter, record producer, fashion designer, and entrepreneur.",

      photo_url: "http://a.abcnews.go.com/images/Entertainment/rtr_kanye_west_jc_150407_16x9_992.jpg"
  }

];

artists[0].albums.push(albums[0])
artists[1].albums.push(albums[1])
artists[2].albums.push(albums[2])

    Artist.create(artists, function(err, doc) {
      if (err){ console.log("ERROR:", err); }
      else {
        console.log("Created: " , doc);
        mongoose.connection.close();
      }
    });
