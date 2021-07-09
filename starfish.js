class Starfish{
    constructor(){
        this.image = loadImage("starfish-removebg-preview.png");
    }
    
    display(){
        image(this.image, 200, pos, 100, 150);
    }
    }