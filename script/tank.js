/**
 * Created by Q on 5/16/2016.
 */
class Tank{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.speedX = 0;
        this.speedY = 0;
        this.sprite = new Image();
        this.sprite.src = "images/tank_player1_down_c0_t2_s1.png";
    }

    update(){
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw(context){
        context.drawImage(this.sprite, this.x, this.y);
    }
}