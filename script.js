$(document).ready(function(){
  var score = 0;
  var game = new Board();
  var monsterQuantity;

  var addMonster = setInterval(function(){
    var randomID = Math.floor(Math.random() * 1000000);
    var monsterID = randomID;
    var initialX = Math.floor(Math.random() * 800);
    var initialY = Math.floor(Math.random() * 500);
    var monster = new Monster(monsterID, initialX, initialY);
    monster.randomDirection();
    game.addMonster(monster);
    console.log(monster);
    $("#board").append("<div id="+monsterID+" class='monster' style=top:"+initialY+"px;left:"+initialX+"px;></div>");

      var dir= monster.randomDirection();
      var moveX = 0;
      var moveY = 5;
      if (dir === "left") moveX = -10;
      else moveX = 10;

      var movingMonster = setInterval(function () {
        monster.move(moveX, moveY);
        if (monster.y <= 0) {
          moveY = 10;
        } else if (monster.y >= 540) {
          moveY =- 10;
        }
        if (monster.x <= 0) {
          moveX = 10;
        } else if (monster.x >= 940) {
          moveX =- 10;
        }
      }, 100);
  }, 5000);

  $(document).on("click", ".monster", function() {
    score += 1;
    console.log(score);
    this.remove();
    $("#points").html("<h1>"+score+"</h1>");
  });

  // monsterQuantity = game.monsterArmy.length;
  // console.log(game);

  var addFruit = setInterval(function(){
  var randomID = Math.floor(Math.random() * 1000000);
  var fruitID = randomID;
    var initialX = Math.floor(Math.random() * 800);
    var initialY = Math.floor(Math.random() * 500);
    var fruit = new Fruit(fruitID, initialX, initialY);
    fruit.randomDirection();
    console.log(fruit);
    $("#board").append("<div id="+fruitID+"  class='fruit' style=top:"+initialY+"px;left:"+initialX+"px;></div>");

      var dirF= fruit.randomDirection();
      var moveX = 0;
      var moveY = 5;
      if (dirF === "left") moveX = -10;
      else moveX = 10;

      var movingFruit = setInterval(function () {
        fruit.move(moveX, moveY);
        if (fruit.y <= 0) {
          moveY = 10;
        } else if (fruit.y >= 540) {
          moveY =- 10;
        }
        if (fruit.x <= 0) {
          moveX = 10;
        } else if (fruit.x >= 940) {
          moveX =- 10;
        }
      }, 100);
}, 10000);

$(document).on("click", ".fruit", function() {
  score -= 1;
  console.log(score);
  this.remove();
  $("#points").html("<h1>"+score+"</h1>");
});

// $("#quantM").html("<h1>"+monsterArmy.length+"</h1>");

});
