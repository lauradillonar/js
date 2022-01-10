const d = document;
let x = 0;
let y = 0;

export function moveBall(e, ball, stage) {
    const $ball = d.querySelector(ball);
    const $stage = d.querySelector(stage);
    const limitsBall = $ball.getBoundingClientRect();
    const limitsStage = $stage.getBoundingClientRect();

    switch (e.keyCode) {
        case 37:
            //move("left");
            if (limitsBall.left > (limitsStage.left + 5)) {
                e.preventDefault();
                x--;
            }
            break;
        case 38:
            //move("up");
            if (limitsBall.top > (limitsStage.top + 5)) {
                e.preventDefault();
                y--;
            }
            break;
        case 39:
            //move("right");
            if (limitsBall.right < (limitsStage.right - 5)) {
                e.preventDefault();
                x++;
            }
            break;
        case 40:
            //move("down");
            if (limitsBall.bottom < (limitsStage.bottom - 5)) {
                e.preventDefault();
                y++;
            }
            break;
        default:
            break;
    }
    $ball.style.transform = `translate(${x*5}px, ${y*5}px)`;
}

export function shortcuts(e) {
    /*console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);
    console.log(e.ctrlKey);
    console.log(e.altKey);
    console.log(e.shiftKey);
    console.log(e);*/

    if (e.key === "a" && e.altKey) {
        alert("Haz lanzado una alerta con el teclado");
    }

    if (e.key === "c" && e.altKey) {
        confirm("Haz lanzado una confirmación con el teclado");
    }

    if (e.key === "p" && e.altKey) {
        prompt("Haz lanzado un aviso con el teclado");
    }

}