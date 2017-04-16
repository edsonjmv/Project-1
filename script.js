$(document).ready(function(){
  console.log("Linked!");

  var addMonster = setInterval(function(){
    var initialX = Math.floor(Math.random() * 1000);
    var initialY = Math.floor(Math.random() * 600);
    var monster = new Monster(initialX, initialY);
    monster.randomDirection();
    console.log(monster);
  }, 5000);

});
