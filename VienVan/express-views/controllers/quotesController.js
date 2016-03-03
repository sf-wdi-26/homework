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
function updateQuote(req, res) {
  var id = req.params.id;
  Quote.findById({_id: id}, function(err, quote) {
    if(err) res.json({message: 'Could not update quote: ' + err});

    if (req.body.text) {
      quote.text = req.body.text;
    }
    if (req.body.author) {
      quote.author = req.body.author;
    }

    quote.save(function(err) {
      if(err) res.json({messsage: 'Could not save updated quote: ' + err});
      res.redirect('quotes');
    });
  });
}


// DELETE
function removeQuote(request, response) {
  var id = request.params.id;
  Quote.remove({_id: id}, function(error) {
  });
  response.redirect('quotes')
}

module.exports = {
  getAll: getAll,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
}
