var movingRect,fixedRect
function setup(){
  movingRect=createSprite(400,200,50,40);
  fixedRect=createSprite(200,100,30,30);
  movingRect.shapeColor="white";
  fixedRect.shapeColor="white";
}
  function draw(){
    background("black");
    movingRect.x=World.mouseX;
    movingRect.y=World.mouseY;
    console.log(movingRect.x-fixedRect.x);
    if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2&&fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2&&
      movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2&&fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
      movingRect.shapeColor="orange";
      fixedRect.shapeColor="orange";
      background("pink");
    }
    else{
      movingRect.shapeColor="white";
      fixedRect.shapeColor="white";
      background("black");
    }
    drawSprites();
  }
