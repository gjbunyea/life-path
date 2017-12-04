var player, center;

function setup(){
  createCanvas(400, 400);

  // player mechanics
  player = createSprite(20,20,20,20);
  player.shapeColor = color(100,100,100)
	player.rotateToDirection = true;
  player.maxSpeed = 2;
  player.friction = 0.99;

  // base stats
  intell = 30
  happ = 40
  wealth = 20
  time = 100

  // sprite init and compontent values
  life_components = ["love", "work","fitness","art","heartbreak","badwork","drinking"]

  love = Group();
  work = Group();
  fitness = Group();
  art = Group()
  heartbreak = Group()
  badwork = Group()
  drinking = Group()

  love_arr = {"intell":0, "happ":5, "wealth":-5, "time":-10}
  work_arr = {"intell":5, "happ":-2, "wealth":10, "time":-7}
  fitness_arr = {"intell":0, "happ":1, "wealth":0, "time":-1}
  art_arr = {"intell":2, "happ":2, "wealth":-2, "time":-3}
  heartbreak_arr = {"intell":-3, "happ":-5, "wealth":0, "time":-5}
  badwork_arr = {"intell":-2, "happ":-4, "wealth":7, "time":-10}
  drinking_arr = {"intell":-3, "happ":2, "wealth":-4, "time":-5}
 
  love_img = loadImage("assets/love.png")
  work_img = loadImage("assets/work.png")
  fitness_img = loadImage("assets/fitness.png")
  art_img = loadImage("assets/art.png")
  heartbreak_img = loadImage("assets/heartbreak.png")
  badwork_img = loadImage("assets/badwork.png")
  drinking_img = loadImage("assets/drinking.png")

  // center door
//  door_img = loadImage("assets/door.png")
//  next_stage = Group()
//	center = createSprite(width/2, height/2, 20, 20)
//	center.addImage(door_img)
//  center.addToGroup(next_stage)
  
  spriteArray = [];
}

function draw(){
  background(255,255,255);

  text("Intelligence: "+intell+
      "\nWealth: "+wealth+
      "\nHappiness: "+happ+
      "\nTime: "+time, 
      300,300);

//  player.attractionPoint(.01,width/2,height/2)

  if(time <= 0){
    console.log("yep")
    window.location("stage2.html")
  }


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
      else if(fitness.contains(curr)){
        arr = fitness_arr
      }
      else if(art.contains(curr)){
        arr = art_arr
      }
      else if(heartbreak.contains(curr)){
        arr = heartbreak_arr
      }
      else if(badwork.contains(curr)){
        arr = badwork_arr
      }
      else if(drinking.contains(curr)){
        arr = drinking_arr
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

  while(allSprites.length < 15){
    drawRandomSprite();
  }
}

function drawRandomSprite(){
  var spr = createSprite(random(width),random(height),20,20); 
  
  switch(random(life_components)){
    case "love":
      spr.addImage(love_img)
      spr.addToGroup(love)
      break;
    case "work":
      spr.addImage(work_img)
      spr.addToGroup(work)
      break;
    case "fitness":
      spr.addImage(fitness_img)
      spr.addToGroup(fitness)
      break;
    case "art":
      spr.addImage(art_img)
      spr.addToGroup(art)
      break;
    case "heartbreak":
      spr.addImage(heartbreak_img)
      spr.addToGroup(heartbreak)
      break;
    case "badwork":
      spr.addImage(badwork_img)
      spr.addToGroup(badwork)
      break;
    case "drinking":
      spr.addImage(drinking_img)
      spr.addToGroup(drinking)
      break;
  }
  spr.life = round(random(60,100))
  
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
