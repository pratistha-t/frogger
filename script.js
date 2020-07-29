/*
global createCanvas, colorMode, strokeWeight, background, rect, stroke, fill,
HSB, mouseX, mouseY, mouseIsPressed, pmouseX, pmouseY, line, brushHue, key, random,
width, height, ellipse, redraw, noLoop, keyCode, noStroke, text, textAlign, CENTER,
textSize, color, triangle, pivotHue, collideCircleCircle, createButton,
collidePointRect, keyIsPressed, LEFT, BASELINE, rectMode, storeItem, max, UP_ARROW,
DOWN_ARROW, RIGHT_ARROW, LEFT_ARROW, collideRectCircle, collided
*/

let backgroundColor, frogX, frogY, score, lives, gameIsOver, car1X, car1Y, car1V;

function setup() {
  // Canvas & color settings
  createCanvas(500, 500);
  colorMode(HSB, 360, 100, 100);
  backgroundColor = 95;
  //position of frog
  frogX = width/2;
  frogY = height-50;
  score = 0;
  lives = 3;
  gameIsOver = false;
  //position and velocity of car
  car1X = 0;
  car1Y = 100;
  car1V = 5;
}

function draw() {
  background(backgroundColor);
  // Code for gold goal line
  fill(60, 80, 80);
  rect(0, 0, width, 50);
  // Code to display Frog
  fill(120, 80, 80);
  ellipse(frogX, frogY, 20);
  moveCars();
  drawCars();
  checkCollisions();
  checkWin();
  displayScores();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    frogY -= 10;
  }
  if (keyCode === DOWN_ARROW) {
    frogY += 10;
  }
  if (keyCode === RIGHT_ARROW) {
    frogX += 10;
  }
  if (keyCode === LEFT_ARROW) {
    frogX -= 10;
  }
}

function moveCars() {
  // Move the car
car1X += car1V;
  // Reset if it moves off screen
  if(car1X>width) {
    car1X = -40;
  }

}

function drawCars() {
  // Code for car 1
  fill(0, 80, 80);
  rect(car1X, car1Y, 40, 30);
  // Code for additional cars
}

function checkCollisions() {
  // If the frog collides with the car, reset the frog and subtract a life.
  collided = collideRectCircle(car1X, car1Y, 40, 30, frogX, frogY, 20);
if(collided) {
  frogX = width/2;
  frogY = height-50;
  lives--;
  }  
  
  if(lives==0) {
    gameIsOver = true;
  }
}

function checkWin() {
  // If the frog makes it into the yellow gold zone, increment the score
  // and move the frog back down to the bottom.
  if(frogY<70) {
    score++;
    frogX = width/2;
    frogY = height-50;
  }
}

function displayScores() {
  textSize(12);
  fill(0);
  // Display Lives
  text(`Lives: ${lives}`, 10, 20);
  // Display Score
  text(`Score: ${score}`, 10, 40);
  // Display game over message if the game is over
  if(gameIsOver) {
    textSize(60);
    text('GAME OVER!', width/8, height/2);
  }
}