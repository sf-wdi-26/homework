
var canvas;
var myAudio
var context;
var bgImage;
var bgRange;
var bgReady;
var bgCloud;
var redShipReady;
var keysDown;


window.onload = function () {


    canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    canvas.width = 2000;
    canvas.height = 200;
    console.log(context);

    //document.body.appendChild(canvas);
    document.getElementById("header").appendChild(canvas);

    bgImage = new Image();
    bgImage.onload = function () {
        bgReady = true;

    };
    bgImage.src = "sprites/canvas_2.png";


    var SpaceShip = function (x, y, speed, src, gameMove) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.src = src;
        //this.src = valueAtIndexOf(i)
        this.gameMove = gameMove;
        this.image = new Image();
        this.image.src = src;
        this.image.onload = function () {
            redShipReady = true;
            console.log("red ready");
        };

    };



    //use speed * modifier


    var bgKillers = new SpaceShip(0, 0, 0, "sprites/real_killerz_white.png", 10);
    var bgKillersTwo = new SpaceShip(2000, 0, 0, "sprites/realKillerz_black.png", 10);
    var bgCloud = new SpaceShip(1400, 40, 0, "sprites/cloud_9.png", 10);
    var bgCloudNine = new SpaceShip(1400, 40, 0, "sprites/cloud_9.png", 10);


    redDeath = 0;
    boxKill = 0;
    //var rangeOne = new SpaceShip(0,532,0,"sprites/spacey_range_8.png",10);
    //var rangeTwo = new SpaceShip(1200,532,0,"sprites/spacey_range_8.png",10);


    var reset = function () {
        this.x = 1270;
        this.y = 25 + (Math.random() * (canvas.height - 75));

    }

    keysDown = {}

    document.addEventListener("keydown", function (e) {
        keysDown[e.keyCode] = true

    }, false);

    document.addEventListener("keyup", function (e) {
        delete keysDown[e.keyCode];

    }, false);


    var update = function (modifier) {

        if (bgCloud.gameMove === 10) {
            bgCloud.x -= 1.8;
            bgCloudNine.x -= 2.4;
            bgKillers.x -= 1.5;
            bgKillersTwo.x -= 1.5;
            //rangeOne.x -=1.2;
            //rangeTwo.x-=1.2;
        }
        if (bgCloud.x < -2000) {
            bgCloud.x = 1400;
        }
        if (bgCloudNine.x < -1875) {
            bgCloudNine.x = 1300;
        }
        if (bgKillers.x < -1600) {
            bgKillers.x = 2000;
        }
        if (bgKillersTwo.x < -1600) {
            bgKillersTwo.x = 2000;
        }
    };


    var drawGame = function () {

        if (bgReady) {
            context.drawImage(bgImage, 0, 0);

        }
        if (redShipReady) {
            //context.drawImage(rangeOne.image,rangeOne.x,rangeOne.y);
            //context.drawImage(rangeTwo.image,rangeTwo.x,rangeTwo.y);
            context.drawImage(bgCloud.image, bgCloud.x, bgCloud.y);
            context.drawImage(bgCloudNine.image, bgCloudNine.x, bgCloudNine.y);
            context.drawImage(bgKillers.image, bgKillers.x, bgKillers.y);
            context.drawImage(bgKillersTwo.image, bgKillersTwo.x, bgKillersTwo.y);


        };
    }
    var tickTock = function () {
        var now = Date.now();
        var delta = now - then;

        update(delta / .09);
        drawGame();
        then = now;
        requestAnimationFrame(tickTock);
    };

    var w = window;
    requestAnimationFrame =
        w.requestAnimationFrame ||
        w.webkitRequestAnimationFrame ||
        w.msRequestAnimationFrame ||
        w.mozRequestAnimationFrame;

    var then = Date.now();
    update();
    tickTock();


};