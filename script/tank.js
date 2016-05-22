/**
 * Created by Q on 5/16/2016.
 */
class Tank{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.bullet = 0;
        this.listBullet = new Array();
        this.sprite = new Image();
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.spriteUp.src = "images/tank_player1_up_c0_t2_s1.png";
        this.spriteDown.src = "images/tank_player1_down_c0_t2_s1.png";
        this.spriteLeft.src = "images/tank_player1_left_c0_t2_s1.png";
        this.spriteRight.src = "images/tank_player1_right_c0_t2_s1.png";
        this.sprite = this.spriteUp;
    }

    update(){
        //var isMove = true;
        if (this.checkTankBrickCollision()==false){
            this.x += this.speedX;
            this.y += this.speedY;
        }

        for (var i = 0; i < this.listBullet.length; i++){
            this.listBullet[i].update();
        }
    }

    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
        for (var i = 0; i < this.listBullet.length; i++){
            this.listBullet[i].draw(context);
        }
    }

    checkTankBrickCollision(){
        var rect1 = {x:this.x+this.speedX, y:this.y+this.speedY,
            width: 32, height: 32};
        for(var i=0; i <arrBrick.length; i++){
            var rect2 = {x:arrBrick[i].x,y:arrBrick[i].y, width:16,height:16};
            if(this.checkCollision(rect1,rect2)==true){
                return true;
                break;
            }
        }
        for(var i=0; i <arrSteel.length; i++){
            var rect2 = {x:arrSteel[i].x,y:arrSteel[i].y, width:16,height:16};
            if(this.checkCollision(rect1,rect2)==true){
                return true;
                break;
            }
        }
        return false;
    }

    checkBulletBrickCollision(){
        for(var i = 0; i< this.listBullet.length; i++){
            var rect1 = {x: this.listBullet[i].x, y: this.listBullet[i].y, width : 5, height: 5} 
            for(var j = 0; j< arrBrick.length; j++){
                var rect2 = {x: arrBrick[j].x, y: arrBrick[j].y, width : 16, height: 16} 
                if (this.checkCollision(rect1,rect2)) {
                    this.listBullet.pop();
                    arrBrick.splice(j,1);
                    break;
                }
            }
        }
        for(var i = 0; i< this.listBullet.length; i++){
            var rect1 = {x: this.listBullet[i].x, y: this.listBullet[i].y, width : 2, height: 2} 
            for(var j = 0; j< arrSteel.length; j++){
                var rect2 = {x: arrSteel[j].x, y: arrSteel[j].y, width : 16, height: 16} 
                if (this.checkCollision(rect1,rect2)) {                    
                    this.listBullet.splice(i,1);
                    break;
                }
            }
        }
    }

    move(direction){
        switch (direction){
            case 1://up
                this.speedY = -3;
                this.speedX = 0;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://down
                this.speedY = 3;
                this.speedX = 0;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://left
                this.speedX = -3;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://right
                this.speedX = 3;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }

    checkCollision(rect1, rect2){
        if (rect1.x < rect2.x + rect2.width &&
            rect1.x + rect1.width > rect2.x &&
            rect1.y < rect2.y + rect2.height &&
            rect1.height + rect1.y > rect2.y) {
            return true;
        }
        return false;
    }
    
    shot(){
        this.bullet += 1;
        var bullet = new Bullet(this.x + 13, this.y +13, this.direction);
        this.listBullet.push(bullet);
    }
}