var Criminal = require('../models/Criminal');

// GET
function getAll(req, res) {
  Criminal.find(function(error, criminals) {
    if(error) res.json({message: 'Could not find any criminal'});
    res.json({criminals: criminals});
  }).select('-__v');
}

// POST
function createCriminal(req, res) {
  console.log('in POST');
  console.log('body:',req.body);
  var criminal = new Criminal(req.body);
  criminal.save(function(error) {
    if(error) res.json({messsage: 'Could not ceate criminal b/c:' + error});
    res.json({criminal: criminal});
  });
}

// GET
function getCriminal(req, res) {
  var id = req.params.id;
  Criminal.findById({_id: id}, function(error, criminal) {
    if(error) res.json({message: 'Could not find criminal b/c:' + error});
    res.json({criminal: criminal});
  }).select('-__v');
}

function updateCriminal(req, res) {
  var id = req.params.id;
  Criminal.findById({_id: id}, function(error, criminal) {
    if(error) res.json({message: 'Could not find criminal b/c:' + error});
    if(req.body.name) criminal.name = req.body.name;
    if(req.body.location) criminal.location = req.body.location;
    if(req.body.status) criminal.status = req.body.status;

    criminal.save(function(error) {
      if(error) res.json({messsage: 'Could not update criminal b/c:' + error});
      res.json({message: 'Criminal successfully updated', criminal: criminal});
    });
  }).select('-__v');
}

function removeCriminal(req, res) {
  var id = req.params.id;
  Criminal.remove({_id: id}, function(error) {
    if(error) res.json({message: 'Could not delete criminal b/c:' + error});
    res.json({message: 'Criminal successfully deleted'});
  }).select('-__v');
}

module.exports = {
  getAll: getAll,
  createCriminal: createCriminal,
  getCriminal: getCriminal,
  updateCriminal: updateCriminal,
  removeCriminal: removeCriminal
}