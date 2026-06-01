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
