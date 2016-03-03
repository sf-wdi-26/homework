var Quote = require('../models/Quote');


// INDEX
function getAll(request, response) {
  Quote.find({}, function(error, quotes) {
    // console.log("index working");
    response.render('quotes/index', {quotes: quotes});
  });
}

// CREATE
function createQuote(request, response) {

  var quote = request.body;
  Quote.create(quote, function(error, doc) {
    error ? response.redirect('quotes/new') : response.redirect('quotes')
  })

}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    error ? response.json(error) : response.render('quotes/show', {quote: quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    // if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.name) quote.name = request.body.name;
    if(request.body.color) quote.color = request.body.color;

    quote.save(function(error) {
      // if(error) response.json({messsage: 'Could not update quote b/c:' + error});

      response.json({message: 'Quote successfully updated'});
    });
  });
}

// DELETE
function removeQuote(request, response) {
  var id = request.params.id;

  Quote.remove({_id: id}, function(error) {
    // if(error) response.json({message: 'Could not delete quote b/c:' + error});

    response.json({message: 'Quote successfully deleted'});
  });
}

module.exports = {
  getAll: getAll,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
}
