var Quote = require('../models/quote');


// INDEX
function getAll(request, response) {
  Quote.find(function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});

    // response.json({quotes: quotes});
    response.render('./index', {quotes:quotes});
  });
}

//new
function.newQuote(request, response){
  response.render('./quotes/new');
}

// CREATE
function createQuote(request, response) {
  console.log('in POST');
  // console.log('body:',request.body);

  //strong params
  var quote = new Quote({author: req.body.quote.author, text: req.body.quote.text});
  console.log(quote);

  quote.save(function(error) {
    if(error) response.json({message: 'Could not create quote b/c:' + error});
    console.log(quote);
    // response.json(quote);
    response.render('./quotes')
  });
}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    //render './quotes/id' ??
    response.json({quote: quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.author) quote.author = request.body.author;
    if(request.body.quote) quote.quote = request.body.quote;

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

module.exports = {
  getAll: getAll,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
}
