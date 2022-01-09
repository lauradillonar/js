import { digitalClock, alarm } from "./activ7.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("./assets/alarma.mp3", "#activar-alarma", "#detener-alarma");
});
