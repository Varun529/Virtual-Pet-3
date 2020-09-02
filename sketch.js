//Create variables here
var dog,dogImg,happyDog,foodS,foodStock,feedButton;
var database;
var gameState=1;

function preload()
{
  //load images here
  dogImg=loadImage("dogImg.png");
  happyDog=loadImage("dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database = firebase.database();
  dog=createSprite(250,250,20,20);
  dog.addImage("lbl1",dogImg);
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  feedButton=createSprite(350,200,50,50);
  
}


function draw() { 
  background(0); 
  if(mousePressed(feedButton)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  if(foodStock<5){
    gameState=2;
  }







  drawSprites();
  //add styles here
  fill("yellow");
  text("Food Remaining"+foodStock,350,100);
}

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  
  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({
    Food:x
  })
}