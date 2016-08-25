function Square (value){
  this.value = value;
  this.letter = "";
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
      alert("I wanna know");
      }
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
