
var angl = 0.0;
var speed = 0.0003;
var bg = 0;
var strk = 255;



function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(255);
   stroke(255);
}

function draw() {


  var mmx = map(mouseX, 0, width, 10, 300);
  var mmy = map(mouseY, 0, height, 10, 300);


  
   translate(width/2, height/2);
   rotate(angl);


  
var r = random(255);
var r1= random(255);
var r2 = random(255);

    background(bg);
    stroke(strk);
    strokeWeight(3);

    for (var k=0; k<203; k++) {
        push();
      rotate(k*angl/7*TWO_PI/5);
      translate(0, mmx);
        line(0,0, mmx*k, mmy*k*10);
      pop();
      }



    angl += speed;


} 

function mouseClicked() {

     if (bg == 0) {
    bg = 255;
  } else {
    bg = 0;
  }

   if (strk == 255) {
    strk = 0;
  } else {
    strk = 255;
  }
   
   }