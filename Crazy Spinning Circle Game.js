var intro = 1
var x = 200;
var xSpeed = 8;
var xChange = xSpeed;
var x2 = 250;
var x2Speed = 15;
var x2Change = x2Speed;
var x1 = 200
var startX = 200;
var song;
var Gameover;

function preload() {
  song = loadSound("Drum.mp3");
  Gameover = loadSound("Gameover.mp3")
}

function setup() {
  createCanvas(600, 400);

}

function soundplay() {
  if(!song.isPlaying()){
  song.play();
  song.loop();
  }
 
}

function soundStop() {
  if (song.isPlaying()) {
    song.stop();
  }
}

function draw() {

  if (intro == 1) { 
    start()
  } else if (intro == 2) {
    game();

  }
}

function keyPressed() {
  if (keyCode === 32) {
    soundplay();
    intro = 2
  } else if (keyCode === 13) {
    soundStop();
    intro = 1
  }

  if (keyCode === UP_ARROW) {
    startX = startX - 30
  }
  if (keyCode === DOWN_ARROW) {
    startX = startX + 30
  }
  if (keyCode === LEFT_ARROW) {
    x1= x1 - 30
  }
  if (keyCode === RIGHT_ARROW) {
    x1 = x1 + 30
  }
}

function start() {
  background(0)
  square(200, 200, 200)
  fill(200, 255, 200)
  text("Press space to start",width/2,height/3)
  textSize(40)
  textAlign(CENTER)
}

function game() {
  background(20);
  songPlay = true;
  for (var i = 150; i <= 200; i = i + 10) {
    circle(x2, 100, 200 - i);
    fill(100, random(0, 200), random(200))
  }

  x2 += x2Change

  for (i = 150; i <= 200; i = i + 10) {
    circle(x, 300, 200 - i);
    fill(200, random(100, 200), random(100, 255))
  }

  x = x + xChange

  if (x >= width) {
    xChange = -xSpeed;
  }
  if (x2 >= width) {
    x2Change = -x2Speed;
  }
  if (x <= 0) {
    xChange = xSpeed;

  }
  if (x2 <= 0) {
    x2Change = x2Speed;
  }

  for (i = 170; i <= 200; i = i + 10) {
    circle(x1, startX, 200 - i);
    fill(200, 200, random(100, 200))
  }
  
  circle (300,30,20);
  
  if (dist(x2, 100, 250, startX) <= 40) { //The radius not eactly right caculated 
	 text("Game Over",width/2,height/2 )
   textSize(40)
   textAlign(CENTER)
    soundStop(); //Sometimes the song doesn't really stop
    gameover();
    Gameover.play();
   
  }
}

function gameover() {
  noLoop()
}

function gamestart() {
  loop()
}
