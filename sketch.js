function setup() {
  createCanvas(1600,400);
  car = createSprite(15, 200, 50, 50);
  speed = Math.round(random(50,90));
  weight = Math.round(random(400,1500));
  wall = createSprite(1300, 200, 60, 200);
  wall.shapeColor = "lightblue";
  car.velocityX = speed;
  car.shapeColor = "purple";
}

function draw() {
  background("black");  
  if(wall.x-car.x<(car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5*speed*speed*weight/22500;
    if(deformation>180) {
      car.shapeColor = "red";
    }
    if(deformation<180&&deformation>100) {
      car.shapeColor = "yellow";
    }
    if(deformation < 100) {
      car.shapeColor = "green";
    }
  }
  drawSprites();
}