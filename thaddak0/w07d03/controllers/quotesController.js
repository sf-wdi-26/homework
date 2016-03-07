var Quote = require('../models/Quote');


// INDEX
function getAll(request, response) {
  Quote.find(function(error, quotes) {
    if(error){
      console.log(error);
    }
    response.render('layout', {quotes: quotes});
  });
  }

// CREATE
function createQuote(request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var quote = new Quote(request.body);

  quote.save(function(error) {
    if(error) {
      console.log('Could not ceate quote b/c:' + error);
    }
    response.redirect('/quotes');
  });
}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) {
      console.log('Could not find quote b/c:' + error);
    }
    response.render('show', {quote: quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error){
      console.log('Could not find quote b/c:' + error);
    };
    if(request.body.text){
      quote.text = request.body.text;
    }
    if(request.body.author){
      quote.author = request.body.author;
    }
    quote.save(function(error) {
      if(error){
        console.log('Could not update quote b/c:' + error);
      }
      response.redirect('/quotes');
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
