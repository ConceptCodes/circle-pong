let paddle, ring, ball;

//----------- Ball -------------------------//
class Ball {
    constructor() {

    }
}
//----------- Paddle -------------------------//
class Paddle {
    constructor() {
        this.x = 0
        this.y = 0
        this.scalar = 200
        this.angle = 0
    }

    render() {
        fill('green')
        rect(this.x, this.scalar-10, 55, 20, 20);
    }

    moveRight() {
        this.x = this.x + this.scalar * cos(this.angle);
        this.y = this.y + this.scalar * sin(this.angle);
        this.angle++
    }

    moveLeft() {
        this.x = this.x - this.scalar * cos(this.angle);
        this.y = this.y - this.scalar * sin(this.angle);
        this.angle++
    }
}
//----------- Outer Ring -------------------------//
class Ring {
    constructor() {
        this.width = 400
    }
    render() {
        strokeWeight(5)
        stroke('white')
        fill(13,17,21)
        ellipse(0,0,this.width)
    }
}
//----------- Main P5 -------------------------//
function setup(){
    createCanvas(500, 500)
    angleMode(DEGREES)
    paddle = new Paddle()
    ring = new Ring()
}

function draw() {
    background(13, 17, 21)
    translate(window.width/2, window.height/2)
    ring.render()
    paddle.render()
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) { paddle.moveLeft() } 
    else if (keyCode === RIGHT_ARROW) { paddle.moveRight() }
  }