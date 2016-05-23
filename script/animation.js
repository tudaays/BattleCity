/**
 * Created by Q on 5/23/2016.
 */
class Animation{
    constructor(x,y,name,number,speed){

        this.x = x;
        this.y = y;
        this.countFrame = number;
        this.sprites = new Array();
        this.index = 0;
        for(var i = 1; i <= number; i++){
            var image = new Image();
            var dir = "images/" + name + i + ".png";
            //console.log(dir);
            image.src = dir;
            this.sprites.push(image);
        }
        this.count = 0;
        this.speed = speed;
    }
    
    update(){
        this.count++;
        if(this.count >= this.speed){
            this.count = 0;
            this.index++;
            this.index = this.index % this.countFrame;
        }
    }
    
    draw(context){
        context.drawImage(this.sprites[this.index], this.x, this.y);
    }

}