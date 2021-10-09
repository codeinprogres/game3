var player, playerImg, ExpoGroup, Expo, Expo1Img, Epxo2Img, Expo3Img, Expo4Img, Expo5Img;
var obstacle, obstacleImg, obstacle2Img, obstacle3Img, obstaclesGroup;
var ground, groudImg;
var score;
var PLAY, END, START, SETTINGS, RULES, PAUSE, CREDITS, EXIT;
PLAY = 1;
CREDITS = 6;
END = 0;
START = 2;
SETTINGS = 3;
RULES = 4;
PAUSE = 5;
EXIT = 7;
var gameState = START;
var StartImg;
var button1, button2, button3;
var button1Img, button2Img, buttong3Img;
var back1;
var backArrowImg, backArrow;
var lose;
var level;
var menu, options, resume, menuImg, optionsImg, resumeImg;
var text1, text2, text1Img, text2Img;
var logoImg, logo;
var on, onImg, offImg;
var sound;
var button4;
var button4Img;
var cred1, cred2, cred3, cred4;
var cred1Img, cred2Img, cred3Img, cred4Img;
var yes, no, yesImg, noImg;
var sure, sureImg;
var onImg, offImg;
var on;
var help, helpImg;
var one, two, three, four, five;
var oneImg, twoImg, threeImg, fourImg, fiveImg;
var GreenScreen;

function preload(){
   playerImg = loadImage("runner.png");
   Expo1Img = loadImage("banana.png");
   Expo2Img = loadImage("watermelon.png");
   Expo3Img = loadImage("strawberry.png");
   Expo4Img = loadImage("grapes.png");
   Expo5Img = loadImage("orange.png");
   groundImg = loadImage("background.png");
   obstacleImg = loadImage("obstacle1.png");
   obstacle2Img = loadImage("arrow.png");
   obstacle3Img = loadImage("sword.png");
   StartImg = loadImage("start.png");
   button1Img = loadImage("start button.png");
   button2Img = loadImage("button2.png");
   back1 = loadImage("back1.png");
   backArrowImg = loadImage("backArrow.png");
   button3Img = loadImage("rules.png");
   button4Img = loadImage("button4.png");
   lose = loadImage("end.png");
   menuImg = loadImage("menu.png");
   optionsImg = loadImage("options.png");
   resumeImg = loadImage("resume.png");
   text1Img = loadImage("word1.png");
   text2Img = loadImage("word2.png");
   logoImg = loadImage("logo.png");
   onImg = loadImage("on.png");
   offImg = loadImage("off.png");
   sound = loadSound("sound.mp3");
   cred1Img = loadImage("t1.png");
   cred2Img = loadImage("t2.png");
   cred3Img = loadImage("t3.png");
   cred4Img = loadImage("t4.png");
   yesImg = loadImage("yes.png");
   noImg = loadImage("no.png");
   sureImg = loadImage("yes or no.png");
   onImg = loadImage("on.png");
   offImg = loadImage("off.png");
   helpImg = loadImage("sound.png");
   oneImg = loadImage("1.png");
   twoImg = loadImage("2.png");
   threeImg = loadImage("3.png");
   fourImg = loadImage("4.png");
   fiveImg = loadImage("5.png");
   GreenScreen = loadImage("greenScreen.png")
}

function setup(){

    createCanvas(1000,800);

    button1 = createSprite(800,200,150,100);
    button1.addImage(button1Img);
    button1.scale = 1.1;

    button2 = createSprite(800, 300, 150, 100);
    button2.addImage(button2Img);
    button2.scale = 1.1;
    //button2.debug = true;

    button3 = createSprite(800, 520, 150, 100);
    button3.addImage(button3Img);
    button3.scale = 0.5;
    //button3.debug = true;
    button3.setCollider("rectangle", 0, -30, 500, 165);

    button4 = createSprite(800, 400, 150, 100);
    button4.addImage(button4Img);
    button4.scale = 1.1;

    one = createSprite(620, 150, 80, 80);
    one.addImage(oneImg);
    one.scale = 0.25;

    two = createSprite(700, 150, 80, 80);
    two.addImage(GreenScreen);
    two.scale = 0.25;
    
    three = createSprite(780, 150, 80, 80);
    three.addImage(threeImg);
    three.scale = 0.25;
    
    four = createSprite(860, 150, 80, 80);
    four.addImage(fourImg);
    four.scale = 0.25;
    
    five = createSprite(940, 150, 80, 80);
    five.addImage(fiveImg);
    five.scale = 0.25;

    
    player = createSprite(400,250,50,50);
    player.addImage(playerImg);
    player.scale = 0.7;
    player.visible = false;
    //player.debug = true;
    player.setCollider("rectangle", 0, 0, 250, 400);

    sure = createSprite(500, 400, 60, 30);
    sure.addImage(sureImg);
    sure.scale = 1.8;

    yes = createSprite(350, 500, 60, 40);
    yes.addImage(yesImg);
    yes.scale = 0.5;

    no = createSprite(650, 500, 60, 40);
    no.addImage(noImg);
    no.scale = 0.5;

    help = createSprite(360, 300, 100, 60);
    help.addImage(helpImg);
    help.scale = 1.2;


    ExpoGroup = new Group();
    obstaclesGroup = new Group();

    score = 0;

    backArrow = createSprite(100, 150, 80, 50);
    backArrow.addImage(backArrowImg);
    backArrow.scale = 0.25;
    backArrow.visible = true;

    on = createSprite(310, 150, 80, 50);
    on.addImage(offImg);
    on.scale = 0.5;

    logo = createSprite(150, 100, 75, 40);
    logo.addImage(logoImg);
    logo.visible = false;

    menu = createSprite(500, 400, 350, 450)
    menu.addImage(menuImg);
    menu.scale = 2;

    cred1 = createSprite(550, 100, 90, 40);
    cred1.addImage(cred1Img);
    cred1.scale = 1.3;


    cred2 = createSprite(550, 250, 90, 40);
    cred2.addImage(cred2Img);
    cred2.scale = 1.3;
    
    cred3 = createSprite(550, 500, 90, 40);
    cred3.addImage(cred3Img);
    cred3.scale = 1.3;
    
    cred4 = createSprite(550, 650, 90, 40);
    cred4.addImage(cred4Img);
    cred4.scale = 1.3;
    
    
    resume = createSprite(500, 500, 350, 450);
    resume.addImage(resumeImg);
    resume.scale = 2;

    text1 = createSprite(500, 200, 300, 100);
    text1.addImage(text1Img);
    text1.visible = false;

    text2 = createSprite(500, 600, 300, 10);
    text2.addImage(text2Img);
    text2.visible = false;


}

function draw(){
   background("red");


   if(gameState === PLAY){

    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    backArrow.visible = false;
    resume.visible = false;
    menu.visible = false;
    logo.visible = false;
    button4.visible = false;
    cred1.visible = false;
    cred2.visible = false;
    cred3.visible = false
    cred4.visible = false;
    sure.visible = false;
    no.visible = false;
    yes.visible = false;
    on.visible = false;
    help.visible = false;
    one.visible = false;
two.visible = false;
three.visible = false;
four.visible = false;
five.visible = false;





    text2.visible = false;
text1.visible = false;


       background(groundImg);
       player.visible = true;
       player.x = World.mouseX;
       player.y = World.mouseY;


       spawnObstacles();
       spawnExpo();

       if(player.isTouching(ExpoGroup)){
           score += 1;
           ExpoGroup.destroyEach();
       }
       
       if(player.isTouching(obstaclesGroup)){
           gameState = END;
       }
       
  
       text("Score : " + score, 20, 60);
   }


if(gameState === END){
   background(lose);
   button4.visible = false;
   score = 0;
   text("click r to restart", 500, 600);
   player.visible = false;
   obstaclesGroup.destroyEach();
   ExpoGroup.destroyEach();
   resume.visible = false;
   menu.visible = false;
   button1.visible = false;
   button2.visible = false;
   button3.visible = false;
   text2.visible = false;
text1.visible = false;
logo.visible = false;
cred1.visible = false;
cred2.visible = false;
cred3.visible = false
cred4.visible = false;
sure.visible = false;
no.visible = false;
yes.visible = false;
on.visible = false;
help.visible = false;
one.visible = false;
two.visible = false;
three.visible = false;
four.visible = false;
five.visible = false;


   if(keyDown("r")){
       gameState = START;
   }
}

if(keyDown("Esc")){
    gameState = PAUSE;
}

if(gameState === PAUSE){
    background(back1);

    resume.visible = true;
    menu.visible = true;
    logo.visible = true;
    cred1.visible = false;
    cred2.visible = false;
    cred3.visible = false
    cred4.visible = false;
    on.visible = false;
    help.visible = false;
    one.visible = false;
    two.visible = false;
    three.visible = false;
    four.visible = false;
    five.visible = false;


   
   player.visible = false;
   obstaclesGroup.destroyEach();
   ExpoGroup.destroyEach();

   if(mousePressedOver(menu)){
       gameState = EXIT;
       menu.visible = false;
       resume.visible = false;
   }

   if(mousePressedOver(resume)){
       gameState = PLAY;
       resume.visible = false;
       menu.visible = false;
   }
}


if(gameState === RULES){
    background(back1);
    help.visible = false;
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    backArrow.visible = true;
    resume.visible = false;
    menu.visible = false;
    text1.visible = true;
    text2.visible = true;
    logo.visible = false;
    button4.visible = false;
    cred1.visible = false;
    cred2.visible = false;
    cred3.visible = false
    cred4.visible = false;
    sure.visible = false;
    no.visible = false;
    yes.visible = false;
    on.visible = false;
    one.visible = false;
    two.visible = false;
    three.visible = false;
    four.visible = false;
    five.visible = false;




    if(mousePressedOver(backArrow)){
        gameState = START;
    }
    
}

if(gameState === SETTINGS){
    background(back1);

    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    backArrow.visible = true;
    menu.visible = false;
    resume.visible = false;
    text2.visible = false;
text1.visible = false;
logo.visible = false;
button4.visible = false;
cred1.visible = false;
cred2.visible = false;
cred3.visible = false
cred4.visible = false;
sure.visible = false;
no.visible = false;
yes.visible = false;
on.visible = true;
one.visible = true;
two.visible = true;
three.visible = true;
four.visible = true;
five.visible = true;

help.visible = true;

}

if(mousePressedOver(one)){
    one.addImage(GreenScreen);
    two.addImage(twoImg);
    three.addImage(threeImg);
    four.addImage(fourImg);
    five.addImage(fiveImg);
    if(gameState === PLAY){
        obstaclesGroup.setVelocityXEach(-5);
        ExpoGroup.setVelocityXEach(-5);
    }
}

if(mousePressedOver(two)){
    two.addImage(GreenScreen);
    one.addImage(oneImg);
    three.addImage(threeImg);
    four.addImage(fourImg);
    five.addImage(fiveImg);
    if(gameState === PLAY){
        obstaclesGroup.setVelocityXEach(-10);
        ExpoGroup.setVelocityXEach(-10);
    }
}

if(mousePressedOver(three)){
    two.addImage(twoImg);
    one.addImage(oneImg);
    three.addImage(GreenScreen);
    four.addImage(fourImg);
    five.addImage(fiveImg);
    if(gameState === PLAY){
        obstaclesGroup.setVelocityXEach(-15);
        ExpoGroup.setVelocityXEach(-15);
    }
}

if(mousePressedOver(four)){
    two.addImage(twoImg);
    one.addImage(oneImg);
    three.addImage(threeImg);
    four.addImage(GreenScreen);
    five.addImage(fiveImg);
    if(gameState === PLAY){
        obstaclesGroup.setVelocityXEach(-20);
        ExpoGroup.setVelocityXEach(-20);
    }
}

if(mousePressedOver(five)){
    two.addImage(twoImg);
    one.addImage(oneImg);
    three.addImage(threeImg);
    four.addImage(fourImg);
    five.addImage(GreenScreen);
    if(gameState === PLAY){
        obstaclesGroup.setVelocityXEach(-25);
        ExpoGroup.setVelocityXEach(-25);
    }
}


if(keyDown("a")){
    on.addImage(onImg);
    sound.play();
}

if(keyDown("b")){
    on.addImage(offImg);
    sound.stop();
}


if(mousePressedOver(backArrow)){
    gameState = START;
}

if(mousePressedOver(button4)){
    gameState = CREDITS;
}

if(gameState === CREDITS){
    background(back1);
    backArrow.visible = true;
    button1.visible = false;
    button2.visible = false;
    button3.visible = false;
    resume.visible = false;
    menu.visible = false;
    text2.visible = false;
    text1.visible = false;
    logo.visible = false;
    button4.visible = false;
    cred1.visible = true;
    cred2.visible = true;
    cred3.visible = true
    cred4.visible = true;
    sure.visible = false;
    no.visible = false;
    yes.visible = false;
    on.visible = false;
    help.visible = false;
    one.visible = false;
    two.visible = false;
    three.visible = false;
    four.visible = false;
    five.visible = false;

}

if(gameState === EXIT){
    background(back1);
    logo.visible = true;
    on.visible = false;
    sure.visible = true;
    no.visible = true;
    yes.visible = true;
    help.visible = false;
    one.visible = false;
    two.visible = false;
    three.visible = false;
    four.visible = false;
    five.visible = false;
}

if(mousePressedOver(yes)){
    gameState = START;
    score = 0;
}

if(mousePressedOver(no)){
    gameState = PLAY;
}

if(gameState === START){
    background(StartImg);
    on.visible = false;

    help.visible = false;

    backArrow.visible = false;
    button1.visible = true;
    button2.visible = true;
    button3.visible = true;
    resume.visible = false;
    menu.visible = false;
    text2.visible = false;
text1.visible = false;
logo.visible = false;
button4.visible = true;
cred1.visible = false;
cred2.visible = false;
cred3.visible = false
cred4.visible = false;
sure.visible = false;
no.visible = false;
yes.visible = false;
one.visible = false;
two.visible = false;
three.visible = false;
four.visible = false;
five.visible = false;

    

    if(mousePressedOver(button1)){
        gameState = PLAY;
     }

    if(mousePressedOver(button2)){
        gameState = SETTINGS;
    }

    if(mousePressedOver(button3)){
        gameState = RULES;
    }
}

   drawSprites();
}

function spawnExpo(){
   if(frameCount%60 === 0){
       Expo = createSprite(1100, random(200,700), 45, 45);
       var rand1 = Math.round(random(1,5));
       switch(rand1){
            case 1: Expo.addImage(Expo1Img);
                 break;
            case 2: Expo.addImage(Expo2Img);
                 break;
            case 3: Expo.addImage(Expo3Img);
                 break;
            case 4: Expo.addImage(Expo4Img);
                 break;
            case 5: Expo.addImage(Expo5Img);
                 break;
            default: break;
       }

       Expo.scale = 0.5;
       Expo.velocityX = -10;
       Expo.lifetime = -1;
       ExpoGroup.add(Expo);
   }
}

function spawnObstacles(){
    if(frameCount%120 === 0){
        obstacle = createSprite(1100, random(200,700), 45, 45);
        var rand = Math.round(random(1,3));
        switch(rand){
            case 1: obstacle.addImage(obstacleImg);
                  break;
            case 2: obstacle.addImage(obstacle2Img);
                  break;
            case 3: obstacle.addImage(obstacle3Img);
                  break;
            default: break;
        }
  
        obstacle.scale = 0.25;
        obstacle.velocityX = -10;
        obstacle.lifetime = -1;
        console.log(obstacle.velocityX);
        obstaclesGroup.add(obstacle);
     }
}

























































































































































































































































































































































































































































































































































































































































