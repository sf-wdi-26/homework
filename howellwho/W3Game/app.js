var x = 25;
var y = 250;
var dx = 1.5;
var dy = -4;
var ctx;
var width;
var height;
var paddlex;
var paddleh = 15;
var paddlew = 75;
var rightDown = false;
var leftDown = false;
var canvasMinX = 0;
var canvasMaxX = 0;
var intervalId = 0;
var bricks;
var rows = 5;
var cols = 5;
var brickWidth;
var brickHeight = 15;
var padding = 1;
//to add later
var score = 0;
var airhorn;
var pizza = "pizza_small.png"
//sets game board elements
function init() {
  ctx = $('#canvas')[0].getContext("2d");
  width = $("#canvas").width();
  height = $("#canvas").height();
  paddlex = width / 2;
  brickWidth = (width/cols) - 1;
  canvasMinX = $("#canvas").offset().left;
  canvasMaxX = canvasMinX + width;
  intervalId = setInterval(draw, 12);
}
//creates ball

function circle(x,y,r) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI*2, true);
  ctx.closePath();
  ctx.fill();
}

//creates paddle
function rect(x,y,w,h) {
  ctx.beginPath();
  ctx.rect(x,y,w,h);
  ctx.closePath();
  ctx.fill();
}

function clear() {
  ctx.clearRect(0, 0, width, height);
  rect(0,0,width,height);
}


//allows functionality to move padddle
function onKeyDown(evt) {
  if (evt.keyCode == 39) rightDown = true;
  else if (evt.keyCode == 37) leftDown = true;
}

function onKeyUp(evt) {
  if (evt.keyCode == 39) rightDown = false;
  else if (evt.keyCode == 37) leftDown = false;
}

$(document).keydown(onKeyDown);
$(document).keyup(onKeyUp);

//new bricks array
function initbricks() {
    bricks = new Array(rows);
    for (i=0; i < rows; i++) {
        bricks[i] = new Array(cols);
        for (j=0; j < cols; j++) {
            bricks[i][j] = 1;
        }
    }
}
//adds rows and columns for bricks
function drawbricks() {
  for (i=0; i < rows; i++) {
    ctx.fillStyle = rowcolors[i];
    for (j=0; j < cols; j++) {
      if (bricks[i][j] == 1) {
        rect((j * (brickWidth + padding)) + padding,
             (i * (brickHeight + padding)) + padding,
             brickWidth, brickHeight);
      }
    }
  }
};

//if no bricks left, winner
// function brickDetection() {
//   if (brick==0) {
//     $("h1").html("Winner !!!!!!!!!!!");;
//   }
// }
//variables for pieces on board
var ballr = 10;
      var rowcolors = ["red", "orange", "yellow", "green", "blue"];
      var paddlecolor = "brown";
      var ballcolor = "purple"
      var backcolor = "black";
      
      function draw() {
        // debugger;
        ctx.fillStyle = backcolor;
        clear();
        ctx.fillStyle = ballcolor;
        circle(x, y, ballr);
        if (rightDown) paddlex += 5;
        else if (leftDown) paddlex -= 5;
        ctx.fillStyle = paddlecolor;
        rect(paddlex, height-paddleh, paddlew, paddleh);
        drawbricks();
        rowheight = brickHeight + padding;
        colwidth = brickWidth + padding;
        row = Math.floor(y/rowheight);
        col = Math.floor(x/colwidth);
        // drawLives();
        // drawScore();
        // collisionDetections();
        //reverse the ball and mark the brick as broken
        if (y < rows * rowheight && row >= 0 && col >= 0 && bricks[row][col] == 1) {
          dy = -dy;
          bricks[row][col] = 0;
          score+=100
          $("#score").html("Score: "+score);
        }
        if (score == 2500) {
          $("h1").html("Winner!!!!!!!!!!!!!!!!");
          $("#cheer")[0].play();
        }
        if (x + dx + ballr > width || x + dx - ballr < 0)
          dx = -dx;
        if (y + dy - ballr < 0)
          dy = -dy;
        else if (y + dy + ballr > height - paddleh) {
          if (x > paddlex && x < paddlex + paddlew) {
            //move the ball differently based on where it hit the paddle
            dx = 8 * ((x-(paddlex+paddlew/2))/paddlew);
            dy = -dy;
          }
        else if (y + dy + ballr > height) {
            // Game Over functionality
            $("h1").html("Game Over");
            $("#lose")[0].play();
              document.location;
              clearInterval(intervalId)
    }
        }
        x += dx;
        y += dy;
      }


      init();
      initbricks();
      

 $("#reset-game").on("click", function() {
    window.location.reload();
 });  
    
 $(function() {
    $("#dolphin")[0].play();
});
   

