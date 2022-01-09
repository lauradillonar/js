import { digitalClock, alarm } from "./activ7.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
});