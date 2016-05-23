/**
 * Created by Q on 5/23/2016.
 */
class Water {
    constructor(i, j) {
        this.x = j * 16;
        this.y = i * 16;
        this.sprite = new Animation(this.x,this.y,"water_",2,17);
    }
    update(){
        this.sprite.update();
    }
    draw(context) {
        this.sprite.draw(context);
    }
}
