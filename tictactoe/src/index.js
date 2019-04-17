const View = require("./ttt-view.js");
const Game = require("../nodesolution/game.js");

$(() => {
  let game = new Game();
  let $figure = $("figure");
  new View(game, $figure);
  console.log("I'm working");
  });
