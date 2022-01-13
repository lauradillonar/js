export default function hamburguerMenu(panelBtn, panel, menuLink) {
    const d = document;

    d.addEventListener("click", e => {
        if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(panelBtn).classList.toggle("is-active");
            d.querySelector(".dark-theme-btn").classList.toggle("hidden-btn");
        }

        if (e.target.matches(menuLink) || e.target.matches(`${menuLink} *`)) {
            //console.log(e.target);
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(panelBtn).classList.remove("is-active");
            d.querySelector(".dark-theme-btn").classList.add("hidden-btn");
        }
    });
}