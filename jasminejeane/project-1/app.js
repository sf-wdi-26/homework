//working code


//convert picture into a puzzle
// copy each peace as a individual picture 

//copy orginal layout of picture
//copy layout that looks like the puzzle
//for each puzzle piece create an id


//make copy that's pre cut invisible or grid it out so that those spaces will recognize when the right picture 
//is on it
    //if id a == id a1 that picture cam be submitted kind of like if the input has a certain amount of characters
    // this the input is ok
      //else __ something

//studing drag and drop
// reasearch snap.js

//shuffle feature

//hide and show main pic when picture is finished



//if id1 is within 10px of id2 &&
//if id6 is within 10px of id1  items match 



// make a div the size of the image 
//make invisible grid for for size or just say if image ix at xy coodinates 



function init() {

  var pieceMatch;
  var score = 0; 
  var newScore  = $("#score").val();


  $(".drag").draggable({
        grid: [5, 5],
        // revert: true, --- moves the item out of the droppable b4 drops
        drag: function(){
          pieceMatch = $(this).attr('match');
        }    
    });






  $( ".box" ).droppable({
      drop: function( event, ui ) {
                // $(this).removeClass( "box" );
        ui.draggable.detach().css({top: -10, left: -32}).appendTo($(this));
        if($(this).attr("match") == pieceMatch){
          $(this).addClass( "pair" );
          console.log("I'm a match");
          score += 5;
          newScore = score;
         console.log(score);

        }
        else{
    
          score -= 1;
          console.log(score);
            }

        //boxes have class linked win
      if ($(".box").not(".pair").length === 0 ) {
          console.log("Puzzle Complete");
          prompt("You completed the puzzle!");
          // make a big dancng gif come on the screen
               
      }
      }



  // $("#fullpic").on('click').show()
  });


  
    // all list items are selected


}
  //do stuff on page load...
  //set event listeners maybe



