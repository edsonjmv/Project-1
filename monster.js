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
