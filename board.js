function Board() {
  this.monsterArmy = [];
  this.addMonster = function(monster) {
    this.monsterArmy.push(monster);
  };
  this.fruitBasket = [];
  this.addFruit = function(fruit) {
    this.fruitBasket.push(fruit);
  };
}
