function Square (value){
  this.value = value;
  this.letter = "";
}
var board = {
  tiles: [],
  play: function(index, input){
    this.tiles[index].letter = input;
  }
}

function Player(playerName, letter){
  this.playerName = playerName;
  this.letter = letter;
}



for (var i = 0; i<=8; i++){
  var newSquare = new Square (i);
  board.tiles.push(newSquare);
}
newPerson1 = new Player("joe", "x");
newPerson2 = new Player("shmoe", "o");
console.log(newPerson2, newPerson1)
