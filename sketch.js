var player, center;

function setup(){
  createCanvas(400, 400);

  player = createSprite(20,20,20,20);
  player.shapeColor = color(100,100,100)
	player.rotateToDirection = true;
  player.maxSpeed = 2;
  player.friction = 0.99;

  intell = 30
  happ = 40
  wealth = 20
  time = 100
  
	center = createSprite(width/2, height/2, 20, 20)
	center.shapeColor = color(255,0,0)

  love = Group();
  love_arr = {"intell":0, "happ":5, "wealth":-5, "time":-10}
  spriteArray = [];

}

function draw(){
  background(255,255,255);

  text("Intelligence: "+intell+
      "\nWealth: "+wealth+
      "\nHappiness: "+happ+
      "\nTime: "+time, 
      300,300);

  player.attractionPoint(.6,width/2,height/2)

  for (var i=0; i<allSprites.length; i++){
    if(player.overlap(allSprites[i])){
      curr = allSprites[i]
      if(love.contains(curr)){
        intell += love_arr.intell
        happ += love_arr.happ
        wealth += love_arr.wealth
        time += love_arr.time
      } 
      allSprites[i].remove();
    }
  }

  drawSprites();
  updatePlayer();

  if(allSprites.length < 5){
    drawRandomSprites();
  }
}

function drawRandomSprites(){
  var spr = createSprite(random(width),random(height),20,20); 
  spr.shapeColor = color(0,182,255)
  spr.life = 60; 
  
  spr.addToGroup(love)
}

function updatePlayer() {
  if (keyIsDown(RIGHT_ARROW)) {
    player.position.x = player.position.x+5
  }
  else if (keyIsDown(DOWN_ARROW)) {
    player.position.y = player.position.y+5
  }
  else if (keyIsDown(LEFT_ARROW)) {
    player.position.x = player.position.x-5
  }
  else if (keyIsDown(UP_ARROW)) {
    player.position.y = player.position.y-5
  }
  return false;
}
