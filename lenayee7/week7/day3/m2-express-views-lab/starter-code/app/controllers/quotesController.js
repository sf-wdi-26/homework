var Quote = require('../models/Quote');

// INDEX
function getAll(request, response) {
  Quote.find({},function(error, quotes) {
    if(error) response.json({message: 'Could not find any quote'});
    // response.send('sending')
    // response.json({quotes: quotes});
    // response.locals.stuffIwant = quotes;
    response.render("layout", {quotes: quotes});
  });
}
// NEW
function newQuote(req,res) {
    console.log("newQuote");
    res.render("../quotes/new");
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
  // var author = request.body.author;
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});
    response.render("./quotes/show", {quote:quote})
    // response.json({quote: quote});
  });
}

// UPDATE
function updateQuote(request, response) {
  var id = request.params.id;

  Quote.findById({_id: id}, function(error, quote) {
    if(error) response.json({message: 'Could not find quote b/c:' + error});

    if(request.body.quote) quote.quote = request.body.quote;
    if(request.body.author) quote.author = request.body.author;

    quote.save(function(error) {
      if(error) response.json({messsage: 'Could not update quote b/c:' + error});

      response.json({message: 'Quote successfully updated'});
    });
  });
}

// DELETE
function removeQuote(request, response) {
  console.log('removeQuote ****')
  var id = request.params.id;

  Quote.remove({_id: id}, function(error) {
    if(error) response.json({message: 'Could not delete quote b/c:' + error});
    console.log(id);
    response.redirect("/quotes")
  });
}

module.exports = {
  getAll: getAll,
  createQuote: createQuote,
  getQuote: getQuote,
  updateQuote: updateQuote,
  removeQuote: removeQuote
}
