let width;

function setup(){
    width = 400;
    createCanvas(500, 500);
}

function draw() {
    background(13, 17, 21)

    translate(window.width/2, window.height/2)

    strokeWeight(5)
    stroke('white')
    fill(13,17,21)
    ellipse(0,0,width)
}