var Criminal = require('../models/Criminal');

//GET
function getAll(request, response){
  Criminal.find(function(error, criminals){
    if(error){
     response.json({message: 'Aint no criminals here'});
    } else {
      response.json({criminals: criminals});
    }
  });
}

//POST
function createCriminal(request, response){
  console.log("IN POST");
  console.log('body: ', request.body);

  var criminal = new Criminal(request.body);

  criminal.save(function(error){
    if(error) response.json({message: 'Could not create criminal because: ' + error});

    response.json({criminal: criminal});
  });
}

//GET one criminal
function getCriminal(request, response){
  var id = request.params.id;

  Criminal.findById({_id: id}, function(error, criminal){
    if(error){
      response.json({message: "Can't find who y'all are lookin' for", error});
    } else {
      response.json({criminal: criminal});
    }
  });
}

//DELETE one criminal
function removeCriminal(request, response){
  var id = request.params.id;

  Criminal.remove({_id: id}, function(error, criminal){
    if(error){
      response.json({message: "I could not kill that criminal! Goddamn!", error});
    } else {
      response.json({message: "We shot him, that sunnavagun!"});
    }
  })
}


//UPDATE one criminal
function updateCriminal(request, response){
  var id = request.params.id;

  Criminal.findById({_id: id}, function(error, criminal){
    if(error){
      response.json({message: "Can't find who y'all are lookin' to update", error});
    } else {
      var name = request.body.name;
      var location = request.body.location;
      var status = request.body.status;

      if(name){
        criminal.name = name;
      }
      if(location){
        criminal.location = location;
      }
      if(status){
        criminal.status = status;
      }

      criminal.save(function(error){
        if(error){
          response.json({message: "Could not save the update yall", error});
        } else {
          response.json({message: 'Criminal is updated', criminal: criminal});
        }
      });
    }
  });
}

module.exports = {
  getAll: getAll,
  createCriminal: createCriminal,
  getCriminal: getCriminal,
  removeCriminal: removeCriminal,
  updateCriminal: updateCriminal
}
