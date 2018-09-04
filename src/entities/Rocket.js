export default class Rocket {
  constructor(canvas, ctx, x, y, w, h, n) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.width = 60;
    this.height = 11;

    this.x = x + w / 2 - this.width / 2;
    this.y = y + h / 2 - this.height / 2;

    this.velocity = 6;
    this.damage = 100;
    this.number = n;

    this.init();
  }

  init() {
    this.img = new Image();
    this.img.src = "./images/rocket.png";

    this.img.onload = () => {
      this.draw();
    };
  }

  draw(destroy, enemys) {
    let x = this.x;
    let y = this.y;

    this.ctx.drawImage(this.img, x, y, this.width, this.height);
    this.x += this.velocity;

    if (this.x + this.width > this.canvas.width) {
      destroy();
    }

    if (enemys) {
      for (let i = 0; i < enemys.legth; i++) {
        if (x >= enemys[i].x && x <= enemys[i].x + enemys[i].width) {
          if (y >= enemys[i].y && y <= enemys[i].y + enemys[i].height) {
            let explode = new Audio("audio/explosion.wav");
            explode.play();
            destroy();
            return;
          }
        }
      }
    }
  }
}
