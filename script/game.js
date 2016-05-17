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
    setInterval(gameLoop,17);
}
var player;
var bullet;

var gameLoop = function(){
    gameUpdate();
    gameDrawer(context);
}
function gameStart(){
    player = new Tank(100,100);
    bullet = new Bullet(0,0,player.direction);
}

function gameUpdate(){
    player.update();
    bullet.update();
}

function gameDrawer(context){
    context.fillStyle = "pink";
    context.fillRect(0,0,window.innerWidth, window.innerHeight);
    player.draw(context);
    bullet.draw(context);
}

window.onkeydown = function(e){
    switch (e.keyCode){
        case 65://a
            player.move(3);
            break;
        case 68: //d
            player.move(4);
            break;
        case 83: //s
            player.move(2);
            break;
        case 87://w
            player.move(1);
            break;
        case 32://spacebar
            bullet.x = player.x;
            bullet.y = player.y;
            bullet.move(player.direction);
            break;
    }
}



window.onkeyup = function(e){
    switch (e.keyCode){
        case 65://a
            if(player.speedX < 0){
                player.speedX = 0;
            }
            break;
        case 68: //d
            if(player.speedX > 0){
                player.speedX = 0;
            }
            break;
        case 83: //s
            if(player.speedY > 0){
                player.speedY = 0;
            }
            break;
        case 87://w
            if(player.speedY < 0){
                player.speedY = 0;
            }
            break;
    }
}

