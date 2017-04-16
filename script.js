$(document).ready(function(){
  console.log("Linked!");

  var addMonster = setInterval(function(){
    var monster = new Monster();
    console.log(monster);
  }, 1000);

});
