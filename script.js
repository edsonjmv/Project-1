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
      var dir= monster.randomDirection();
      var moveX = 0;
      var moveY = 5;
      if (dir === "left") moveX = -10;
      else moveX = 10;

      var movingMonster = setInterval(function () {
        monster.move(moveX, moveY);
        if (monster.y<=0) {
          moveY=10;
        } else if (monster.y>=500) {
          moveY=-10;
        }
        if (monster.x<=0) {
          moveX=10;
        } else if (monster.x>=900) {
          moveX=-10;
        }
      }, 100);
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
