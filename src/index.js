
import Game from "./Game";

const canvas = document.createElement("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext("2d");
const root = document.getElementById("root");


// window.addEventListener('resize', function(){
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
// });

root.appendChild(canvas);

const game = new Game(canvas, ctx);
game.start();
