import { Player } from "./entities";
import { Enemy } from "./entities";

export default class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.running = false;
    this.score = 0;
    this.lives = 10;

    this.player = new Player(this.canvas, this.ctx);
    this.enemys = [new Enemy(this.canvas, this.ctx)];
  }

  init() {
    this.player.init();
    this.enemys.forEach(enemy => {
      enemy.init();
    });
  }

  start() {
    this.running = true;
    this.init();
    this.draw();
  }

  stop() {
    this.running = false;
  }

  draw() {
    if (!this.running) {
      console.log("stopped");
      return;
    }

    console.log("running");

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    //draw rockects
    for (var n in this.player.weapon.shooting) {
      this.player.weapon.shooting[n].draw(() => {
        this.player.weapon.destroyRocket(n);
      }, this.enemys);
    }

    this.enemys.forEach(enemy => {
      enemy.draw();
    });

    this.player.draw();

    //draw ammo
    this.ctx.font = "60px Arial";
    this.ctx.fillStyle = "#fff";
    this.ctx.fillText("Rockets" + this.player.weapon.ammo, 10, 60);

    this.ctx.fillText(
      "Health" + this.player.health,
      this.canvas.width - 300,
      60
    );

    this.ctx.save();
    this.ctx.restore();

    window.requestAnimationFrame(() => this.draw());
  }

  destroyEnemy(id){
    this.enemys = this.enemys.filter(enemy => enemy.id === id);
  }
}
