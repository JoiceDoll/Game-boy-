window.onload = function () {
  var initial = document.getElementById("initial");
  var ctx = initial.getContext("2d");
  document.addEventListener("keydown", keyPush);
  setInterval(game, 50);

  const vel = 1;

  var vx = (vy = 0);
  var px = (py = 10);
  var tp = 10;
  var qp = 18;
  var ax = (ay = 15);
  var tail = [];
  size = 5;

  function game() {
    px += vx;
    py += vy;

    if (px < 0) {
      px = qp - 1;
    }

    if (px > qp - 1) {
      px = 0;
    }
    if (py < 0) {
      py = qp - 1;
    }

    if (py > qp - 1) {
      py = 0;
    }

    ctx.fillStyle = "#566918";
    ctx.fillRect(0, 0, initial.width, initial.height);

    ctx.fillStyle = "red";
    ctx.fillRect(ax * tp, ay * tp, tp, tp);

    ctx.fillStyle = "#252513";
    for (var i = 0; i < tail.length; i++) {
      ctx.fillRect(tail[i].x * tp, tail[i].y * tp, tp, tp);

      /*GAME OVER*/
      if (tail[i].x == px && tail[i].y == py) {
        vx = vy = 0;
        size = 5;
        ctx.fillRect(0, 0, initial.width, initial.height);
      }
    }

    tail.push({ x: px, y: py });
    while (tail.length > size) {
      tail.shift();
    }

    if (ax == px && ay == py) {
      size++;
      ax = Math.floor(Math.random() * qp);
      ay = Math.floor(Math.random() * qp);
    }
  }

  function keyPush(event) {
    switch (event.keyCode) {
      case 37:
        vx = -vel;
        vy = 0;
        break;
      case 38:
        vx = 0;
        vy = -vel;
        break;
      case 39:
        vx = vel;
        vy = 0;
        break;
      case 40:
        vx = 0;
        vy = vel;
        break;
      default:
    }
  }
};
