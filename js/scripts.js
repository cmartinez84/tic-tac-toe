function Square (value){
  this.value = value;
  this.letter = value;
}
function Player(playerName, letter){
  this.playerName = playerName;
  this.letter = letter;
}
var board = {
  tiles: [],
  play: function(index, input){
    this.tiles[index].letter = input;
    if(((this.tiles[0].letter===this.tiles[1].letter) && (this.tiles[1].letter === this.tiles[2].letter)) ||
    ((this.tiles[3].letter===this.tiles[4].letter) && (this.tiles[4].letter === this.tiles[5].letter)) ||
    ((this.tiles[6].letter===this.tiles[7].letter) && (this.tiles[7].letter === this.tiles[8].letter)) ||
    ((this.tiles[0].letter===this.tiles[3].letter) && (this.tiles[3].letter === this.tiles[6].letter)) ||
    ((this.tiles[1].letter===this.tiles[4].letter) && (this.tiles[4].letter === this.tiles[7].letter)) ||
    ((this.tiles[2].letter===this.tiles[5].letter) && (this.tiles[5].letter === this.tiles[8].letter)) ||
    ((this.tiles[0].letter===this.tiles[4].letter) && (this.tiles[4].letter === this.tiles[8].letter)) ||
    ((this.tiles[2].letter===this.tiles[4].letter) && (this.tiles[4].letter === this.tiles[6].letter)))
      {
      alert("You Won!");
      }
    }
}

$(function(){
  for(var i = 0; i <board.tiles.length; i++){
    $("#playingBoard").append('<input type="text" name="name" id="'+ board.tiles[i].letter +'">');
  }
});



for (var i = 0; i<=8; i++){
  var newSquare = new Square (i);
  board.tiles.push(newSquare);
}
newPerson1 = new Player("joe", "x");
newPerson2 = new Player("shmoe", "o");
console.log(newPerson2, newPerson1)
