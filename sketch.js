var song1;
var song2;
var song3;
var song4;
var song5;
var song6;
var song7;
var song8;
var song9;
var song10; 
var song11;
var song12;
var song; 
var song13;
var song14; 
var song16;
var song17;
var bg;


function preload() {
song1 = loadSound("buzz.mp3");
song2 = loadSound("metal.mp3"); 
song3 = loadSound("water.mp3");
song4 = loadSound("construction.mp3"); 
song5 = loadSound("traffic.mp3"); 
song6 = loadSound("rev.mp3"); 
song7 = loadSound("walking.mp3"); 
song8 = loadSound("motorbike.mp3"); 
song9 = loadSound("chips.mp3"); 
song10 = loadSound("horn.mp3"); 
song11 = loadSound("hammer.mp3");
song12 = loadSound("birds.mp3"); 
song = loadSound("bird.mp3"); 
song13 = loadSound("talking.mp3"); 
song14 = loadSound("wind.mp3"); 
song15 = loadSound("rubbish.mp3");
song16 = loadSound("aircon.mp3"); 
song17 = loadSound("pole.mp3"); 
bg = loadImage('collage.png');
}

function setup() {
  createCanvas(900, 600);
  frameRate(10);
}

function draw() {
  background(bg);

//1
  
  if (mouseX < 100 && mouseX > 89 && mouseY < 599 && mouseY > 251)
    {
      text("♫", mouseX, mouseY)
      if (!song1.isPlaying()){
        song1.play();
      }
    }
  
  {
      if (mouseIsPressed && song1.isPlaying()){ 
      song1.stop();
      }
}
  
  //2

  if (mouseX < 316 && mouseX > 35 && mouseY < 269 && mouseY > 0)
    {
      text("♫", mouseX, mouseY)
      if (!song2.isPlaying()){
      song2.play();
      }
    }
      
  {
      if (mouseIsPressed && song2.isPlaying()){ 
      song2.stop();
      }
}
 //3
 
  if (mouseX < 50 && mouseX > 20 && mouseY < 588 && mouseY > 520)
    {
      text("♫", mouseX, mouseY)
      if (!song3.isPlaying()){
      song3.play();
      }
    }
      
  {
    
     if (mouseIsPressed && song3.isPlaying()){ 
      song3.stop();
      }
}
    
    //4
  
  if (mouseX < 185 && mouseX > 152 && mouseY < 597 && mouseY > 505)
    {
      text("♫", mouseX, mouseY)
      if (!song4.isPlaying()){
        song4.play();
      }
    }
  
  {
      if (mouseIsPressed && song4.isPlaying()){ 
      song4.stop();
      }
}
  
  //5

  if (mouseX < 227 && mouseX > 190 && mouseY < 365 && mouseY > 319)
    {
      text("♫", mouseX, mouseY)
      if (!song5.isPlaying()){
      song5.play();
      }
    }
      
  {
      if (mouseIsPressed && song5.isPlaying()){ 
      song5.stop();
      }
}
  
 //6

  if (mouseX < 350 && mouseX > 253 && mouseY < 506 && mouseY > 452)
    {
      text("♫", mouseX, mouseY)
      if (!song6.isPlaying()){
      song6.play();
      }
    }
      
  {
     if (mouseIsPressed && song6.isPlaying()){ 
      song6.stop();
      }
}   
    
  //7

    if (mouseX < 295 && mouseX > 264 && mouseY < 583 && mouseY > 548)
    {
      text("♫", mouseX, mouseY)
      if (!song7.isPlaying()){
      song7.play();
      }
    }
      
  {
      if (mouseIsPressed && song7.isPlaying()){ 
      song7.stop();
      }
    
  }
  
  //8

if (mouseX < 452 && mouseX > 382 && mouseY < 185 && mouseY > 144)
    {
      text("♫", mouseX, mouseY)
      if (!song8.isPlaying()){
        song8.play();
      }
    }
  
  {
      if (mouseIsPressed && song8.isPlaying()){ 
      song8.stop();
      }
}
  
  //9
  
  if (mouseX < 497 && mouseX > 419 && mouseY < 113 && mouseY > 10)
    {
      text("♫", mouseX, mouseY)
      if (!song9.isPlaying()){
      song9.play();
      }
    }
      
  {
      if (mouseIsPressed && song9.isPlaying()){ 
      song9.stop();
      }
}
  
 //10
  
  if (mouseX < 681 && mouseX > 597 && mouseY < 79 && mouseY > 31)
    {
      text("♫", mouseX, mouseY)
      if (!song10.isPlaying()){
      song10.play();
      }
    }
      
  {
    
     if (mouseIsPressed && song10.isPlaying()){ 
      song10.stop();
      }
}
    
    
    //11
  
  if (mouseX < 575 && mouseX > 526 && mouseY < 155 && mouseY > 106)
    {
      text("♫", mouseX, mouseY)
      if (!song11.isPlaying()){
        song11.play();
      }
    }
  
  {
      if (mouseIsPressed && song11.isPlaying()){ 
      song11.stop();
      }
}
  
  //12
  
  if (mouseX < 514 && mouseX > 351 && mouseY < 408 && mouseY > 239)
    {
      text("♫", mouseX, mouseY)
      if (!song12.isPlaying()){
      song12.play();
      }
    }
      
  {
      if (mouseIsPressed && song12.isPlaying()){ 
      song12.stop();
      }
}
 //12.2
  if (mouseX < 490 && mouseX > 412 && mouseY < 599 && mouseY > 426)
    {
      text("♫", mouseX, mouseY)
      if (!song.isPlaying()){
      song.play();
      }
    }
      
  {
     if (mouseIsPressed && song.isPlaying()){ 
      song.stop();
      }
}  
    
    
  //13
  
    if (mouseX < 615 && mouseX > 557 && mouseY < 599 && mouseY > 541)
    {
      text("♫", mouseX, mouseY)
      if (!song13.isPlaying()){
      song13.play();
      }
    }
      
  {
      if (mouseIsPressed && song13.isPlaying()){ 
      song13.stop();
      }
    
  }
  
   //14
  
  if (mouseX < 838 && mouseX > 646 && mouseY < 199 && mouseY > 129)
    {
      text("♫", mouseX, mouseY)
      if (!song14.isPlaying()){
      song14.play();
      }
    }
      
  {
    
     if (mouseIsPressed && song14.isPlaying()){ 
      song14.stop();
      }
}
    
    
    //15
  
  if (mouseX < 864 && mouseX > 743 && mouseY < 397 && mouseY > 293)
    {
      text("♫", mouseX, mouseY)
      if (!song15.isPlaying()){
        song15.play();
      }
    }
  
  {
      if (mouseIsPressed && song15.isPlaying()){ 
      song15.stop();
      }
}
  
  //16
  
  if (mouseX < 861 && mouseX > 798 && mouseY < 538 && mouseY > 461)
    {
      text("♫", mouseX, mouseY)
      if (!song16.isPlaying()){
      song16.play();
      }
    }
      
  {
      if (mouseIsPressed && song16.isPlaying()){ 
      song16.stop();
      }
}
  
  
 //17
  if (mouseX < 770 && mouseX > 589 && mouseY < 504 && mouseY > 400)
    {
      text("♫", mouseX, mouseY)
      if (!song17.isPlaying()){
      song17.play();
      }
    }
      
  {
     if (mouseIsPressed && song17.isPlaying()){ 
      song17.stop();
      }
}  
    
    
}