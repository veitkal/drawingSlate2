let img;
let img1;
let img2;
let imgs = [];
let state;
let unscii;

function preload() {
      img = loadImage('assets/test.png');
      img1 = loadImage('assets/test1.png');
      img2 = loadImage('assets/test2.png');
    //unscii = loadFont('assets/unscii-16.otf');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
    stroke(255);
    //textFont(unscii);
    //textSize(36);
    //fill(0);
    state = 0;

    imgs[0] = img;
    imgs[1] = img1;
    imgs[2] = img2;
}

function draw() {
    background(255);
    
    text("This is the archive of a resurrected DrawingSlate II", 20, 100);
    text("Use the the arrow keys for navigation or click with mouse", 20, 150);

    translate(width/2-415, height/2-500);
    /*
    if (state == 0) {
    image(imgs[state], 0,30);
    } else if (state == 1) {
    image(imgs[state], 200,30);
    } */
    
    cycleState();
    image(imgs[state], 0, 30);


} 

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        state -=1;
    } else if (keyCode === RIGHT_ARROW)  {
            state +=1;
    }
}
  
function mouseClicked() {
    state+=1;
}

function cycleState() {
    if (state < 0) {
        state = 2;
    } else if (state > 2) {
        state = 0;
    } else {
        state = state;
    }
}
