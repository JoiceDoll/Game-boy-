

window.onload = function () {
    var initial = document.getElementById("initial");
    var ctx = initial.getContext("2d"); 
    document.addEventListener("keydown", keyPush);
    setInterval(game, 50)

    const vel = 1;

    

    var vx = vy = 0;
    var px = py = 10;
    var tp = 10;
    var qp = 18;
    var ax = ay = 15;
    var rastro = [];
    tamanho = 5;

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
        for (var i = 0; i < rastro.length; i++) {
            ctx.fillRect(rastro[i].x * tp, rastro[i].y * tp, tp, tp);

            /*GAME OVER*/
            if (rastro[i].x == px && rastro[i].y == py) {
                vx = vy = 0;
                tamanho = 5;
        ctx.fillRect(0, 0, initial.width, initial.height);
            }
        }

        rastro.push({ x: px, y: py })
        while (rastro.length > tamanho) {
            rastro.shift();
        }

        if (ax == px && ay == py) {
            tamanho++;
            ax = Math.floor(Math.random() * qp);
            ay = Math.floor(Math.random() * qp);
        }

    }

    /* Event Keys LEFT,RIGHT,DOWN and UP*/
    
    function keyPush(event) {
        switch (event.keyCode) {
            case 37: //left
                vx = -vel;
                vy = 0;
                break;
            case 38: //up
                vx = 0;
                vy = -vel;
                break;
            case 39: //right
                vx = vel;
                vy = 0;
                break;
            case 40: //down
                vx = 0;
                vy = vel;
                break;
            default:
        }
    }
}

const left = document.querySelector("#one")
const right = document.querySelector("#two")
left.addEventListener("click" , (e) => {
    vx = -vel;
    vy = 0;
})