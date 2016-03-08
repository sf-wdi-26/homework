var Quote = require('../models/Quote');


// INDEX
function getAll(req, res) {
  Quote.find({}, function(err, quotes) {
    if (err) {
      res.json({message: 'Could not find any quote'});
    }
    res.render('layout', {quotes: quotes});
  });
}

// NEW
function newQuote(req, res) {
  res.render('new');
}

// CREATE
function createQuote(req, res) {
  var quoteText= req.body.text;
  var quoteAuthor = req.body.author;
  var newQuote = {text: quoteText, author: quoteAuthor};
  Quote.create(newQuote,function(err, quote) {
    if (err) {
      res.json({message: 'Could not create quote'});
    }
    res.redirect('/quotes');
  });
}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    response.render('layout', {quote: quote});
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

      response.redirect('layout', {quotes: quotes});
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
  newQuote: newQuote,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
};
