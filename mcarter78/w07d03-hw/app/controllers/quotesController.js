var Quote = require('../models/Quote');


// INDEX **
function getAll(request, response) {
  Quote.find({}, function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});
    response.render('./partials/quotes/index', {quotes: quotes});
  });
}

// CREATE **
function createQuote(request, response) {
  var author = request.body.author;
  var text = request.body.text;
  Quote.create({author: author, text: text}, function(error, data) {
    if(error) response.json({messsage: 'Could not ceate quote b/c:' + error});
    response.redirect('/quotes');
  });
}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;
  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    response.render('./partials/quotes/edit', {quote: quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.author) quote.author = request.body.author;
    if(request.body.text) quote.text = request.body.text;

    quote.save(quote, function(error) {
      if(error) response.json({messsage: 'Could not update quote b/c:' + error});

      response.redirect('/quotes');
    });
  });
}

// DELETE
function removeQuote(request, response) {
  var id = request.params.id;
  Quote.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete quote b/c:' + error});
    response.redirect("/quotes");
  });
}

module.exports = {
  getAll: getAll,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
}
