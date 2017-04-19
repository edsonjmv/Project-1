function Board(monster, fruit) {
  this.monster = monster;
  this.fruit = fruit;
  this.monsterArmy = [];
  this.fruitBasket = [];
  this.score= 0;
}

Board.prototype.fruitEaten = function() {
   var that = this;
   this.monsterArmy.forEach(function(e){
     var monsterY = $("#"+e.monsterID).css("top").slice(0,-2);
     var monsterX = $("#"+e.monsterID).css("left").slice(0,-2);
     that.fruitBasket.forEach(function(f){
       var fruitY = $("#"+f.fruitID).css("top").slice(0,-2);
       var fruitX = $("#"+f.fruitID).css("left").slice(0,-2);

       var xM = monsterX + 50;
       var yM = monsterY + 50;
       var xF = fruitX + 50;
       var yF = fruitY + 50;

       if (Math.sqrt((xF-xM)^2+(yF-yM)^2) <= 0) {
         console.log('collide');
       }

     });
   });

};

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

Board.prototype.addingFruits = function(){};

Board.prototype.gameOver = function(){};
