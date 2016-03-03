var Quote = require('../models/Quote');


// INDEX
function getAll(req, res) {
  Quote.find({},function(err, quotes) {
    if(err) res.json({message: 'Could not find any quote'});

    // res.json({quotes: quotes});
    res.render('layout', {quotes: quotes});

  });
}

// NEW
// function newQuote(req,res){
//   // console.log('hello from new quote');
//   res.render('./quotes/new');
// }
// CREATE
function createQuote(request, response) {
  console.log('in POST');
  console.log('body:',request.body);
  var quote = new Quote(request.body);

  quote.save(function(error) {
    if(error) response.json({messsage: 'Could not ceate quote b/c:' + error});

    response.redirect('/quotes');
  });
}

// SHOW
function getQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    response.render('./partials/quotes/edit',{quote: quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) console.log(error);

    if(request.body.text) quote.text = request.body.text;
    if(request.body.author) quote.author = request.body.author;
    console.log(quote);
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

    response.redirect('/quotes');
  });
}

module.exports = {
  getAll: getAll,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
}
