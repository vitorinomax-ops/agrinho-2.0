/* ==========================
ACCORDION
========================== */

const accordions =
document.querySelectorAll(".accordion-header");

accordions.forEach(btn => {

    btn.addEventListener("click", () => {

        const content =
        btn.nextElementSibling;

        content.classList.toggle("active");

    });

});

/* ==========================
FONTE
========================== */

let currentFont = 16;

const html =
document.documentElement;

document
.getElementById("increaseFont")
.addEventListener("click", () => {

    currentFont += 2;

    html.style.setProperty(
        "--font-size",
        currentFont + "px"
    );

});

document
.getElementById("decreaseFont")
.addEventListener("click", () => {

    if(currentFont > 12){

        currentFont -= 2;

        html.style.setProperty(
            "--font-size",
            currentFont + "px"
        );

    }

});

/* ==========================
MODO ESCURO
========================== */

document
.getElementById("toggleTheme")
.addEventListener("click", () => {

    document.body.classList.toggle(
        "dark-mode"
    );

});

/* ==========================
LEITURA POR VOZ
========================== */

let speech = null;

document
.getElementById("startReading")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const mainContent =
    document.getElementById("mainContent");

    speech =
    new SpeechSynthesisUtterance(
        mainContent.innerText
    );

    speech.lang = "pt-BR";
    speech.rate = 1;

    window.speechSynthesis.speak(
        speech
    );

});

document
.getElementById("stopReading")
.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});
/* ==================================
ACESSIBILIDADE
================================== */

const html = document.documentElement;

let currentFont =
parseInt(
    localStorage.getItem("fontSize")
) || 16;

html.style.setProperty(
    "--base-font-size",
    currentFont + "px"
);

/* ==========================
AUMENTAR FONTE
========================== */

document
.getElementById("increaseFont")
.addEventListener("click", () => {

    if(currentFont < 26){

        currentFont += 2;

        html.style.setProperty(
            "--base-font-size",
            currentFont + "px"
        );

        localStorage.setItem(
            "fontSize",
            currentFont
        );

    }

});

/* ==========================
DIMINUIR FONTE
========================== */

document
.getElementById("decreaseFont")
.addEventListener("click", () => {

    if(currentFont > 12){

        currentFont -= 2;

        html.style.setProperty(
            "--base-font-size",
            currentFont + "px"
        );

        localStorage.setItem(
            "fontSize",
            currentFont
        );

    }

});

/* ==========================
RESETAR FONTE
========================== */

document
.getElementById("resetFont")
.addEventListener("click", () => {

    currentFont = 16;

    html.style.setProperty(
        "--base-font-size",
        "16px"
    );

    localStorage.setItem(
        "fontSize",
        16
    );

});
const body = document.body;

if(localStorage.getItem("theme") === "dark"){
    body.classList.add("dark-mode");
}

document
.getElementById("toggleTheme")
.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    const theme =
    body.classList.contains("dark-mode")
    ? "dark"
    : "light";

    localStorage.setItem(
        "theme",
        theme
    );

});
