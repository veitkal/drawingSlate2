let img;
let img1;
let img2;
let imgs = [];
let state;
let unscii;

function preload() {
      img = loadImage('assets/img1.png');
      img1 = loadImage('assets/img2.png');
      img2 = loadImage('assets/img3.png');
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
    
    text('We find our protagonist, the DrawingSlate II, in a future wasteland where ‘de-cycled’ tech lives in a nebulous mechanical community.  organisms comprised of electronics materials surround the drawingslate, wires stretch out around its plastic casing and elevate it above the fragmented ground it was resting on. A sharp shard of aluminium is pulled around its central electro-magnetic pressure pad. Removing this layer allows our object to break free and compose itself as itself. It creases the metal inside itself into an organic shape resembling a squid while its wires slowly start to move and help it stand up. The microprocessor breaks into tiny anthropods which crawl up into its main hull. As is common in life, this becoming comes with a longing for self-understanding.', 20,50, width/4, height);

  
    text('With the help of other creatures it travels on a knowledge-quest in an attempt to satisfy this longing. Through fragments of information it forms an idea of its personal history in the form of a digital archive. Images juxtapose to reveal inconsistencies in the information it finds. This is a representation of the DrawingSlate’s personal archive', 20, 250, width/4, height);

    text("Use the the arrow keys for navigation or click with mouse", 20, 400)

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


/*
 *
 *
 We find our protagonist, the DrawingSlate II, in a future wasteland where ‘de-cycled’ tech lives in a nebulous mechanical community.  organisms comprised of electronics materials surround the drawingslate, wires stretch out around its plastic casing and elevate it above the fragmented ground it was resting on. A sharp shard of aluminium is pulled around its central electro-magnetic pressure pad. Removing this layer allows our object to break free and compose itself as itself. It creases the metal inside itself into an organic shape resembling a squid while its wires slowly start to move and help it stand up. The microprocessor breaks into tiny anthropods which crawl up into its main hull. As is common in life, this becoming comes with a longing for self-understanding.
  
 With the help of other creatures it travels on a knowledge-quest in an attempt to satisfy this longing. Through fragments of information it forms an idea of its personal history in the form of a digital archive. Images juxtapose to reveal inconsistencies in the information it finds. This is a representation of the DrawingSlate’s personal archive
 *
 *  */
