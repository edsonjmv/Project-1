$(document).ready(function(){

  var score = 0;
  var monsterQuantity = 0;
  var game = new Board();
  var squareSpeed = 500;


  $('#start-game').on('click', function(){
    $('#start-game').css("visibility", "hidden");

  game.addingMonsters = setInterval(function(){
    var randomID = Math.floor(Math.random() * 1000000);
    var monsterID = randomID;
    var initialX = Math.floor(Math.random() * 800);
    var initialY = Math.floor(Math.random() * 500);
    var monster = new Monster(monsterID, initialX, initialY);
    monster.randomDirection();
    game.addMonster(monster);
    // monster.applySpeed(monster, squareSpeed, 500);
    // console.log(monster);
    $("#board").append("<div id="+monsterID+" class='monster' style=top:"+initialY+"px;left:"+initialX+"px;></div>");

    console.log(game.monsterArmy);

    if (game.monsterArmy.length == 5) {
      $(".game-over").append("<h1>GAME OVER!</h1>");
      $(".game-over").append("<h4>Your score: "+score+"</h4>");
      clearInterval(game.addingMonsters);
      clearInterval(game.addingFruit);
      clearInterval(movingMonster);
    }

    if (game.monsterArmy.length >= 5) {
      $(".game-over").css("visibility", "visible");
      $(".monster").css("visibility", "hidden");
      $(".fruit").css("visibility", "hidden");
      $(".blood").css("visibility", "hidden");
      console.log("game over");
    }

    // var monst = $('#'+this.monsterID);
    // var squareSpeed = 500;
    //
    // monster.applySpeed(monst, squareSpeed, 30);

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
  }, 1000);

  $(document).on("click", ".monster", function(event) {
    score += 1;
    var identificator = event.currentTarget.id;
    console.log(event);
    $("#hit-sound")[0].play();
    $("#board").append("<div class='blood'</div>");
    $(".blood").css( {position:"absolute", top:event.pageY, left: event.pageX});
    $("#points").html("<h1>"+score+"</h1>");
    game.monsterArmy.forEach(function(element, index, array){
      if(element.monsterID === parseInt(identificator)) {
        array.splice(index,1);
      }
    });
    // game.monsterArmy = $.grep(game.monsterArmy, function(id) {
    //   return id != event.target.id;
    // });
    this.remove();
    $("#quantM").html("<h1>"+game.monsterArmy.length+"</h1>");
    console.log(game.monsterArmy.length);
  });

  game.addingFruit = setInterval(function(){
  var randomID = Math.floor(Math.random() * 1000000);
  var fruitID = randomID;
    var initialX = Math.floor(Math.random() * 800);
    var initialY = Math.floor(Math.random() * 500);
    // var countdown = setTimeout(function(){
      var fruit = new Fruit(fruitID, initialX, initialY);
      // fruit.randomDirection();
      game.addFruit(fruit);
      // console.log(fruit);
      $("#board").append("<div id="+fruitID+"  class='fruit' style=top:"+initialY+"px;left:"+initialX+"px;></div>");
      $(".fruit").addClass("animated infinite rubberBand");

      console.log(game.fruitBasket);

      if (game.monsterArmy.length >= 5) {
        $(".fruit").css("visibility", "hidden");
      }
}, 10000);

$(document).on("click", ".fruit", function() {
  score -= 1;
  this.remove();
  $("#points").html("<h1>"+score+"</h1>");
  game.fruitBasket = $.grep(game.fruitBasket, function( id ) {
    return ( id == $('#'+this.fruitID) );
  });
}); // closing click on fruit

var eatenFruits = setInterval(function(){
  if (game.fruitBasket.length > 0){
    game.fruitEaten();
  }
}, 50);


}); // closing start game

});  //closing document ready
