let stars = [];
let ambience;


function setup() {
    let cnv = createCanvas(windowWidth, windowHeight);
    cnv.parent("canvas-parent")    ;
    
    imageMode(CENTER);
    rectMode(CENTER);
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }
    noCursor();
}

function draw() {
    background(0,0,0,99);
    for (let i = 0; i < stars.length; i++) {
        stars[i].update();
        stars[i].display();
    }       
}

class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.xspeed = random(0.5,3);
        this.yspeed = this.xspeed-0.5;
        this.size = random(1, 3);
    }

    update() {
        this.x += this.xspeed
        this.y += this.yspeed
        if (this.x >= width ){
            this.x = 0;
        }else if (this.y >= height ){
            this.y = 0;
        }
    }

    display() {
        fill(255);
        noStroke();
        circle(this.x,this.y,this.size)
    }
}
