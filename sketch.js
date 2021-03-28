var level1=1;
var level2=2;
var End=3;
var Select=0;
var gameState=Select;
var lock;
function preload (){
bgimg=loadImage("Images/backyard.jpg")
level1Img=loadImage("Images/level1.jpg")
lockimg=loadImage("Images/lock.png")

}
function setup() {
  createCanvas(windowWidth,windowHeight);
 button1 = createButton('Level 1');
 button1.position(width/2-60,height-130)
 button1.size(100,100)
 button1.mousePressed(changeBg)
 spy=createSprite(400,height-200,50,50)
 spy.visible=false
}

function draw() {
  
 background(255,255,255); 
 if( gameState===Select){ 
  image(bgimg,0,0,windowWidth,windowHeight) 
}
 else if( gameState===level1){
      background(level1Img)
      button1.hide()
       lock=createSprite(775,374,20,30)
      lock.addImage(lockimg)
      lock.scale=0.2;
      spy.visible=true;
     
      if(keyDown("Right")){
        spy.x+=10
      }      
      if(keyDown("Left")){
        spy.x-=10
      }    
        if(keyDown("Up")){
        spy.y+=10
      }      
      if(keyDown("Down")){
        spy.y-=10
      }      
      if(spy.isTouching(lock)){
       textSize(20)
       fill ("yellow")
       text("TO UNLOCK THE DOOR ,CRACK THE CODE,Press the lock",200,200)
      }
      
      if(mousePressedOver(lock)){
        console.log("hi")
        form = new Form ()
        
      }
    }
    
  
  drawSprites();
  
}


function changeBg(){
 gameState=level1
}


