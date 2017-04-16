function Monster(x, y) {
  this.x = x;
  this.y = y;
  this.initial_x = x;
  this.initial_y = y;
  this.initialDirection = "";
}

Monster.prototype.randomPosition = function() {
  var initialPositionX = Math.floor(Math.random() * 900);
  this.initial_x = initialPositionX;
  var initialPositionY = Math.floor(Math.random() * 600);
  this.initial_y = initialPositionY;
};
