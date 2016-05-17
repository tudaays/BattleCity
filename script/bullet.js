/**
 * Created by Q on 5/17/2016.
 */
class Bullet{
    constructor(x, y, direction){
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.sprite = new Image();
        this.spriteUp = new Image();
        this.spriteDown = new Image();
        this.spriteLeft = new Image();
        this.spriteRight = new Image();
        this.spriteUp.src = "images/bullet_up.png";
        this.spriteDown.src = "images/bullet_down.png";
        this.spriteLeft.src = "images/bullet_left.png";
        this.spriteRight.src = "images/bullet_right.png";
        this.sprite = this.spriteUp;
    }
    
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }
    
    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
    
    move(direction){
        switch(direction){
            case 1://up
                this.speedX = 0;
                this.speedY = -4;
                this.sprite = this.spriteUp;
                this.direction = direction;
                break;
            case 2://down
                this.speedX = 0;
                this.speedY = 4;
                this.sprite = this.spriteDown;
                this.direction = direction;
                break;
            case 3://left
                this.speedX = -4;
                this.speedY = 0;
                this.sprite = this.spriteLeft;
                this.direction = direction;
                break;
            case 4://right
                this.speedX = 4;
                this.speedY = 0;
                this.sprite = this.spriteRight;
                this.direction = direction;
                break;
        }
    }
}