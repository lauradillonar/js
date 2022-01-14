import responsiveMedia from "./activ10.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {

    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://youtu.be/6IwUl-4pAzc" target="blank" rel="noopener">Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`);
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/FkJUiHoF6E7Uuzip7" target="blank" rel="noopener">Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26279.219183316138!2d-58.44976502407451!3d-34.58133610699426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb59e37604cd7%3A0xe1f378f0dcf68992!2sPaseo%20El%20Rosedal!5e0!3m2!1ses!2sar!4v1642113548402!5m2!1ses!2sar" width="560" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    );
});