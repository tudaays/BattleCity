/**
 * Created by Q on 5/16/2016.
 */
var context;
window.onload = function(){
    var canvas = document.createElement("canvas");
    context = canvas.getContext("2d");
    context.fillStyle = "black";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.body.appendChild(canvas);
    gameStart();
    gameDrawer(context);
    setInterval(gameLoop,17);
    // setInterval(()=>{
    //     gameDrawer(context);
    // }, 17};
}
var tank;
var tankX = 100;
var tankY = 100;
var speedX = 0;
var speedY = 0;

var gameLoop = function(){
    gameUpdate();
    gameDrawer(context);
}
function gameStart(){
    tank = new Image();
    tank.src = "images/tank_player1_down_c0_t2_s1.png";
}

function gameUpdate(){
    tankX += speedX;
    tankY += speedY;
}

function gameDrawer(context){
    context.fillRect(0,0,window.innerWidth, window.innerHeight);
    context.drawImage(tank, tankX,tankY);
}

window.onkeydown = function(e){
    switch (e.keyCode){
        case 65://a
            moveLeft();
            break;
        case 68: //d
            moveRight();
            break;
        case 83: //s
            moveDown();
            break;
        case 87://w
            moveUp();
            break;
    }
}

function stopMove(){
    speedX = 0;
    speedY = 0;
}

window.onkeyup = function(e){
    // speedX = 0;
    // speedY = 0;
    if (speedX = -2) stopMove();
    else if(speedX = 2) stopMove();
    else if(speedY = 2) stopMove();
    else if(speedY = -2) stopMove();
}

function moveUp(){
    speedY = -2;
    tank.src = "images/tank_player1_up_c0_t2_s1.png";
}
function moveDown(){
    speedY = 2;
    tank.src = "images/tank_player1_down_c0_t2_s1.png";
}
function moveLeft(){
    speedX = -2;
    tank.src = "images/tank_player1_left_c0_t2_s1.png";
}
function moveRight(){
    speedX = 2;
    tank.src = "images/tank_player1_right_c0_t2_s1.png";
}
