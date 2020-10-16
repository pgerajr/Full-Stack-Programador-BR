// BlackJack Game - Simple While, For, If and Switch usage

var computer = 0;
var player = 0;

var winner = "";
var loser = "";

var game_comp = 0;
var game_player = 0;

var pts_winner = 0;
var pts_loser = 0;

var game_on = true;
var turn_play = "Player 1";
var i = 1;

while (game_on == true) {
  switch (turn_play) {
    case "Computer":
      computer = computer + Math.random() * 11;
      game_comp = computer;
      turn_play = "Player 1";
      break;

    case "Player 1":
      player = player + Math.random() * 11;
      game_player = player;
      turn_play = "Computer";
      break;
  }

  if (game_comp >= 21 || game_player >= 21) {
    game_on = false;
  }
}

if (game_comp <= 21) {
  winner = "Player 1";
  pts_winner = game_comp;

  loser = "Computer";
  pts_loser = game_player;
} else if (game_player <= 21) {
  winner = "Computer";
  pts_winner = game_player;

  loser = "Player 1";
  pts_loser = game_comp;
}

console.log(
  winner + " venceu a partida com " + Math.round(pts_winner) + " pontos."
);

console.log(
  loser + " perdeu a partida com " + Math.round(pts_loser) + " pontos."
);
