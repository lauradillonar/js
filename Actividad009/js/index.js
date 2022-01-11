import hamburguerMenu from "./menu-hamburguesa.js";
import initList from "./activ1.js";
import saveTextBox from "./activ2.js";
import calculateSquares from "./activ3.js";
import oddAndEven from "./activ4.js";
import maximumMinimum from "./activ5.js";
import datatablesexample from "./activ6.js";
import { digitalClock, alarm } from "./activ7.js";
import { moveBall, shortcuts } from "./activ8.js";
import countdown from "./activ9.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburguerMenu(".panel-btn", ".panel", ".menu a");
    saveTextBox();
    calculateSquares();
    oddAndEven();
    maximumMinimum();
    datatablesexample();
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarma.mp3", "#activar-alarma", "#detener-alarma");
    countdown("countdown", "May 31, 2022 00:00:00", "Fin");
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

window.onload = function() {
    initList();
}