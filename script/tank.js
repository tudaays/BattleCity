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
        this.x += this.speedX;
        this.y += this.speedY;
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

    shot(){
        this.bullet += 1;
        var bullet = new Bullet(this.x + 13, this.y +13, this.direction);
        this.listBullet.push(bullet);
    }
}