import scrollTopButton from "./scroll-button.js";
import darkTheme from "./dark-theme.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    scrollTopButton(".scroll-top-btn");
    darkTheme(".dark-theme-btn", "dark-mode");
});