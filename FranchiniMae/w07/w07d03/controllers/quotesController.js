var Quote = require('../models/Quote');


// INDEX
function getAll(request, response) {
  Quote.find(function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});

    response.render('layout', {quotes : quotes});
  });
}

//NEW
function newQuote (request, response) {
  response.render('new');
}

// CREATE
function createQuote(request, response) {
  var quotetext = request.body.text;
  var quoteauthor = request.body.author;
  var newquote = { text: quotetext, author: quoteauthor};
  Quote.create(newquote, function (error, quote) {
    if (error) {
      response.json({message: 'Could not create quote' + error});
    }
    response.redirect('/quotes');
  });
}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    response.render('layout', {quote : quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.name) quote.name = request.body.name;
    if(request.body.color) quote.color = request.body.color;

    quote.save(function(error) {
      if(error) response.json({messsage: 'Could not update quote b/c:' + error});

      response.redirect('layout', {quote : quote});
    });
  });
}

// DELETE
function removeQuote(request, response) {
  var id = request.params.id;

  Quote.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete quote b/c:' + error});

    response.redirect('layout', {quote : quote});
  });
}

module.exports = {
  getAll: getAll,
  newQuote: newQuote,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
};
