var car,wall

var speed,weight



function setup() {
  createCanvas(1600,400);
 car= createSprite(50, 200, 50, 50);
 wall=createSprite(1000,200,200,height/2)
 speed=random(55,90)
 weight=random(400,1500)
 car.velocityX=speed;
 car.shapeColor="white"
 wall.shapeColor="grey"
}

function draw() {
  background(0,0,0);
  if(wall.x-car.x<wall.width/2+car.width/2)  {
    car.velocityX=0
    var deformation=0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor="red"
    }

    if(deformation>100 && deformation<180){
      car.shapeColor="yellow"
    }

    if(deformation<100){
      car.shapeColor="green"
    }

  }
  drawSprites();
}