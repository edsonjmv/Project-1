$(document).ready(function(){
  console.log("Linked!");

  var addMonster = setInterval(function(){
    var randomID = Math.floor(Math.random() * 1000000);
    var monsterID = randomID;
    var initialX = Math.floor(Math.random() * 800);
    var initialY = Math.floor(Math.random() * 500);
    var monster = new Monster(monsterID, initialX, initialY);
    monster.randomDirection();
    console.log(monster);
    $("#board").append("<div id="+monsterID+" class='monster' style=top:"+initialY+"px;left:"+initialX+"px;></div>");
    $(".monster").on("click", function() {
      this.remove();
    });
  }, 3000);

  // var addFruit = setInterval(function(){
  //   var initialX = Math.floor(Math.random() * 800);
  //   var initialY = Math.floor(Math.random() * 500);
  //   var fruit = new Fruit(initialX, initialY);
  //   fruit.randomDirection();
  //   console.log(fruit);
  //   $("#board").append("<div class='fruit' style=top:"+initialY+"px;left:"+initialX+"px;></div>");
  // }, 10000);


});
