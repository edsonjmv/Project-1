
$(document).ready(function(){
  var score = 0;
  var game = new Board();

  var addMonster = setInterval(function(){
    var randomID = Math.floor(Math.random() * 1000000);
    var monsterID = randomID;
    var initialX = Math.floor(Math.random() * 800);
    var initialY = Math.floor(Math.random() * 500);
    var monster = new Monster(monsterID, initialX, initialY);
    monster.randomDirection();
    game.addMonster();
    console.log(monster);
    $("#board").append("<div id="+monsterID+" class='monster' style=top:"+initialY+"px;left:"+initialX+"px;></div>");
    $(".monster").on("click", function() {
      score += 1;
      this.remove();

      $("#points").html("<h1>"+score+"</h1>");
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
        } else if (monster.y>=540) {
          moveY=-10;
        }
        if (monster.x<=0) {
          moveX=10;
        } else if (monster.x>=940) {
          moveX=-10;
        }
      }, 100);
  }, 5000);



  var addFruit = setInterval(function(){
  var randomID = Math.floor(Math.random() * 1000000);
  var fruitID = randomID;
    var initialX = Math.floor(Math.random() * 800);
    var initialY = Math.floor(Math.random() * 500);
    var fruit = new Fruit(fruitID, initialX, initialY);
    fruit.randomDirection();
    console.log(fruit);
    $("#board").append("<div id="+fruitID+"  class='fruit' style=top:"+initialY+"px;left:"+initialX+"px;></div>");
    $(".fruit").on("click", function() {
      score -= 1;
      this.remove();

    });
      var dir= fruit.randomDirection();
      var moveX = 0;
      var moveY = 5;
      if (dir === "left") moveX = -10;
      else moveX = 10;

      var movingFruit = setInterval(function () {
        fruit.move(moveX, moveY);
        if (fruit.y<=0) {
          moveY=10;
        } else if (fruit.y>=540) {
          moveY=-10;
        }
        if (fruit.x<=0) {
          moveX=10;
        } else if (fruit.x>=940) {
          moveX=-10;
        }
      }, 100);
}, 10000);

});
