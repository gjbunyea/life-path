var player, loveInterest;

function setup(){
  createCanvas(800, 400);

  player = createSprite(20,20,20,20);
  player.shapeColor = color(100,100,100)
	player.rotateToDirection = true;
  player.maxSpeed = 2;
  player.friction = 0.99;

  score = 0;
  
	loveInterest = createSprite(width/2, height/2, 20, 20)
	loveInterest.shapeColor = color(255,0,0)

  targets = Group();
  spriteArray = [];
}

function draw(){
  background(255,255,255);

  player.attractionPoint(.6,width/2,height/2)

  for (var i=0; i<allSprites.length; i++){
    if(player.overlap(allSprites[i])){
      allSprites[i].remove();
      score += 1
    }
  }

  textAlign(RIGHT, TOP);
  text("SCORE: "+score, width-10, 10);

  drawSprites();
  updatePlayer();
	if(player.overlap(loveInterest)){
		console.log("next scene")
		player.speed = 0;
	}

  if(allSprites.length < 5){
    drawRandomSprites();
  }
}

function drawRandomSprites(){
  var spr = createSprite(random(width),random(height),20,20); 
  spr.shapeColor = color(0,182,255)
  spr.life = 60

  
  spr.addToGroup(targets)

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
