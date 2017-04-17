function Board() {
  this.monsterArmy = [];
  this.fruitBasket = [];
  this.score= 0;
}

Board.prototype.addMonster = function(monster) {
  this.monsterArmy.push(monster);
};

Board.prototype.addFruit = function(fruit) {
  this.fruitBasket.push(fruit);
};
