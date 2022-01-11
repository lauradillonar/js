import { moveBall, shortcuts } from "./activ8.js";


const d = document;

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});