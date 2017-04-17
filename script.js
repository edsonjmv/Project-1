$(document).ready(function(){
  console.log("Linked!");

  var addMonster = setInterval(function(){
    var initialX = Math.floor(Math.random() * 850);
    var initialY = Math.floor(Math.random() * 600);
    var monster = new Monster(initialX, initialY);
    monster.randomDirection();
    console.log(monster);
    $("#board").append("<div class='monster' style=top:"+initialY+"px;left:"+initialX+"px;></div>");
  }, 5000);

  var addFruit = setInterval(function(){
    var initialX = Math.floor(Math.random() * 850);
    var initialY = Math.floor(Math.random() * 600);
    var fruit = new Fruit(initialX, initialY);
    fruit.randomDirection();
    console.log(fruit);
  }, 10000);

});
