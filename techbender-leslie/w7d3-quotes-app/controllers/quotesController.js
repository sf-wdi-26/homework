// ties into routes.js 
var Quote = require('../models/quote');

// shortcut for console.log ->
// var p = function() {
//   console.log.apply(console, argurments)
// }

// INDEX   same as:   var getAll = function (req, res) { ...
function getAll(request, response) {
  Quote.find(function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});

    //response.json({quotes: quotes});
    response.render("./quotes", {quotes: quotes});
  });
} 

function newQuote(req,res) {
  res.render('./quotes/new');
}

// CREATE
function createQuote(req, res) {
  //console.log('in POST');
  //console.log('body:',request.body);
  var quote = new Quote(request.body);

  quote.save(function(err) {
    if(err) res.json({messsage: 'Could not ceate quote b/c:' + error});
    //console.log(quote);
    //response.json(quote);
    res.redirect('/quotes');
  });
}

// SHOW
function getQuote(req, res) {
  var id = req.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) {
      res.json({message: 'Could not find quote b/c:' + error});
    } else {
    res.json({quote: quote});
    }
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.text) quote.text = request.body.text
    if(request.body.author) quote.author = request.body.author;

    quote.save(function(error) {
      if(error) response.json({messsage: 'Could not update quote b/c:' + error});

      response.json({message: 'Quote successfully updated'});
    });
  });
}

// DELETE
function removeQuote(request, response) {
  var id = request.params.id;

  Quote.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete quote b/c:' + error});

    response.json({message: 'Quote successfully deleted'});
  });
}

//object of an alias that calls a function, key value pairs
module.exports = {
  getAll: getAll,
  newQuote: newQuote,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
};
