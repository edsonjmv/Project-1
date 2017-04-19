function Fruit(fruitID, x, y) {
  this.fruitID = fruitID;
  this.x = x;
  this.y = y;
  // this.firstDirection = "";
}

Fruit.prototype.randomDirection = function() {
  var startDirection = Math.round(Math.random());
  if (startDirection === 0) {
    this.firstDirection = "right";
  } else {
    this.firstDirection = "left";
  }
  return this.firstDirection;
};

Fruit.prototype.move = function(moveX, moveY){
  var nextX = (this.x += moveX);
  var nextY = (this.y += moveY);
  var nextStepX = nextX + "px";
  var nextStepY = nextY + "px";
  $('#'+this.fruitID).css("left", nextStepX);
  $('#'+this.fruitID).css("top", nextStepY);
};

// Fruit.prototype.fruitBite = function(){
//   var attackerX = document.getElementsByClassName("monster").style.left;
//   var attackerY = document.getElementsByClassName("monster").style.top;
//   if (this.x == attackerX){alert("collision");}
//   else if (this.y == attackerY) {alert("collision");}
//
// };
