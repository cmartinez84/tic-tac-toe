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
for (var i = 0; i<=8; i++){
  var newSquare = new Square (i);
  board.tiles.push(newSquare);
}

$(function(){
  for(var i = 0; i <board.tiles.length; i++){
    $("#playingBoard").append('<input class="squares" type="text" name="name" id="'+ board.tiles[i].letter +'">');
  }
  $(".squares").focusout(function(){
    var input = $(this).val();
    var index = $(this).attr('id');
    board.play(index, input);
    $(this).prop('disabled', true);
  });



  $("#playerNameInput").submit(function(event){
    event.preventDefault();
    var player1 = new Player(($("#player1input").val()), "X");
    var player2 = new Player(($("#player2input").val()), "O");
    console.log(player1);
    playerTurn(player1, player2);
  });
  var playerTurn = function(playerArg1, playerArg2){
    $(".squares").focus(function(){
      $(this).val(playerArg1.letter);
      playerTurn(playerArg2, playerArg1);
    });
  }


  $

});
