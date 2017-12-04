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
  work = Group();
  love_arr = {"intell":0, "happ":5, "wealth":-5, "time":-10}
  work_arr = {"intell":5, "happ":-2, "wealth":10, "time":-7}
 
  spriteArray = [];

}

function draw(){
  background(255,255,255);

  text("Intelligence: "+intell+
      "\nWealth: "+wealth+
      "\nHappiness: "+happ+
      "\nTime: "+time, 
      300,300);

  player.attractionPoint(.01,width/2,height/2)

  for (var i=0; i<allSprites.length; i++){
    if(player.overlap(allSprites[i])){
      curr = allSprites[i]
      arr = ''
      if(love.contains(curr)){
        arr = love_arr
      } 
      else if(work.contains(curr)){
        arr = work_arr
      }
      intell += arr.intell
      happ += arr.happ
      wealth += arr.wealth
      time += arr.time

      curr.remove();
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

  life_components = ["love", "work"]
  n = random(life_components)
  console.log(n)
  switch(n){
    case "love":
      console.log('love');
      spr.shapeColor = color(252,133,237)
      spr.addToGroup(love)
      break;
    case "work":
      console.log('work');
      spr.shapeColor = color(148,231,116)
      spr.addToGroup(work)
      break;
  }
  spr.life = 60; 
  
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
