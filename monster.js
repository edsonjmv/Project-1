function Monster(monsterID, x, y) {
  this.monsterID = monsterID;
  this.x = x;
  this.y = y;
  this.firstDirection = "";
}

Monster.prototype.randomDirection = function() {
  var startDirection = Math.round(Math.random());
  if (startDirection === 0) {
    this.firstDirection = "right";
  } else {
    this.firstDirection = "left";
  }
  return this.firstDirection;
};

Monster.prototype.move = function(moveX, moveY){
  var nextX = (this.x += moveX);
  var nextY = (this.y += moveY);
  var nextStepX = nextX + "px";
  var nextStepY = nextY + "px";
  $('#'+this.monsterID).css("left", nextStepX);
  $('#'+this.monsterID).css("top", nextStepY);
};

function moveByDegrees(distance, angle) {
  var rad = angle * Math.pi / 180;
  this.x += Math.cos(rad) * distance;
  this.y += Math.sin(rad) * distance;
}




// Monster.prototype.mover = function(monster,value){
//   monster.css({left:value});
// };
//
// Monster.prototype.applySpeed = function(monster, speed, intervalRender){
//   var that = this;
//   var position = 0;
//   setInterval(function(){
//     var step = speed*intervalRender/1000;
//     position = position + step;
//     console.log(position);
//     that.mover(monster,position);
//   },intervalRender);
// };

// var square_1 = $(".one");
// var square_2 = $(".two");
// var squareSpeed = 500;

// applySpeed(square_1, squareSpeed, 500);
// applySpeed(square_2, squareSpeed, 30);






// function move(element,value){
//   element.css({left:value});
// }
//
// function applySpeed(element, speed, intervalRender){
//   var position = 0;
//   setInterval(function(){
//     var step = speed*intervalRender/1000;
//     position = position + step;
//     console.log(position);
//     move(element,position);
//   },intervalRender)
// }
//
// var square_1 = $(".one");
// var square_2 = $(".two");
// var squareSpeed = 500;
//
// applySpeed(square_1, squareSpeed, 500)
// applySpeed(square_2, squareSpeed, 30)
