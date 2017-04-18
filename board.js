function Board() {
  this.monsterArmy = [];
  this.fruitBasket = [];
  this.score= 0;
}

Board.prototype.addMonster = function(monster) {
  this.monsterArmy.push(monster);
};

Board.prototype.takingMonster = function(monster) {
  this.monsterArmy.splice(monster.monsterID);
};

Board.prototype.addFruit = function(fruit) {
  this.fruitBasket.push(fruit);
};

Board.prototype.addingMonsters = function(){};

// var array = [2, 5, 9];
// var index = array.indexOf(5);
//
// if (index > -1) {
//     array.splice(index, 1);
// }
//
//
// function {
//
// };
