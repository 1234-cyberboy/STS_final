class Fish{
    constructor(){
        this.image = loadImage("fish-removebg-preview.png");
    }
    
    display(){
        image(this.image, mouseX, mouseY, 100, 150);
    }
    }