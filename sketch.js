//Create variables here
var database;
var dog1,dog2;
var I,I2
var FoodS
var Food=28
function preload()
{
  //load images here
  I=loadImage("dogImg.png")
  I2=loadImage("dogImg1.png")
}

function setup() {
	createCanvas(800,600);
  database=firebase.database();
  var location=database.ref("Food")
  location.on("value",readStock)
  dog1 = createSprite(400,500,20,20);
  dog1.addImage(I)
  dog1.scale=0.2
}


function draw() {  
   background(0,255,0)
   textSize(20)
   fill(0,0,0)
   text("Note:Press UP_ARROW Key To Feed Drago Milk",200,50)
   if(keyWentDown(UP_ARROW)){
    writeStock(FoodS)
    dog1.addImage(I2);
   
}
  drawSprites();
  //add styles here
  text("Foodremaning:"+FoodS,170,250)
}
function readStock(data){
FoodS=data.val();
}
function writeStock(x){

  if(x<=0){
    x:0;
  }else{
    x=x-1
  }
database.ref("/").update({
  Food:x
})
}

