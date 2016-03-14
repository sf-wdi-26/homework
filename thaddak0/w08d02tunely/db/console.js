var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reminders');
var REPL = require("repl");

var repl = REPL.start("> ");

// model requirements
repl.context.Artist = require("../models/Artist");
repl.context.Album = require("../models/Album");

// listen for an `exit` event
repl.on("exit", function () {
  console.log("Ciao!");
  // disconnect the database connection
  mongoose.disconnect(function() {
    // exit the repl
    process.exit();
  });
})
