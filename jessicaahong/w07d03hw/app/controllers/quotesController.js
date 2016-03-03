var Quote = require('../models/Quote');


// INDEX
function getAll(request, response) {
  Quote.find({}, function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});
    console.log(quotes);
    response.render("pages/index", {quotes: quotes});
  });
}

// CREATE
function createQuote(request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var quote = new Quote(request.body);

  quote.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate quote b/c:' + error});
    console.log(quote);
    response.redirect("/quotes");
  });
}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    response.render("pages/edit", {quote: quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    console.log(quote);
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.name) quote.name = request.body.name;
    if(request.body.color) quote.color = request.body.color;

    quote.save(function(error) {
      if(error) response.json({message: 'Could not update quote b/c:' + error});

      response.redirect("/quotes");
    });
  });
}

// DELETE
function removeQuote(request, response) {
  var id = request.params.id;
  console.log(id);
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
};
