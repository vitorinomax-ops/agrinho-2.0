/* =====================================
   AGRO FORTE - SCRIPT.JS
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================
       ACCORDION
    ===================================== */

    const accordionButtons =
    document.querySelectorAll(".accordion-header");

    accordionButtons.forEach(button => {

        button.addEventListener("click", () => {

            const content =
            button.nextElementSibling;

            const isActive =
            content.classList.contains("active");

            document
            .querySelectorAll(".accordion-content")
            .forEach(item => {
                item.classList.remove("active");
            });

            if (!isActive) {
                content.classList.add("active");
            }

        });

    });

    /* =====================================
       CONTROLE DE FONTE
    ===================================== */

    const html =
    document.documentElement;

    let currentFont =
    parseInt(
        localStorage.getItem("fontSize")
    ) || 16;

    html.style.setProperty(
        "--font-size",
        currentFont + "px"
    );

    const increaseFont =
    document.getElementById("increaseFont");

    const decreaseFont =
    document.getElementById("decreaseFont");

    const resetFont =
    document.getElementById("resetFont");

    if (increaseFont) {

        increaseFont.addEventListener("click", () => {

            if (currentFont < 28) {

                currentFont += 2;

                html.style.setProperty(
                    "--font-size",
                    currentFont + "px"
                );

                localStorage.setItem(
                    "fontSize",
                    currentFont
                );

            }

        });

    }

    if (decreaseFont) {

        decreaseFont.addEventListener("click", () => {

            if (currentFont > 12) {

                currentFont -= 2;

                html.style.setProperty(
                    "--font-size",
                    currentFont + "px"
                );

                localStorage.setItem(
                    "fontSize",
                    currentFont
                );

            }

        });

    }

    if (resetFont) {

        resetFont.addEventListener("click", () => {

            currentFont = 16;

            html.style.setProperty(
                "--font-size",
                "16px"
            );

            localStorage.setItem(
                "fontSize",
                16
            );

        });

    }

    /* =====================================
       MODO ESCURO
    ===================================== */

    const body =
    document.body;

    const savedTheme =
    localStorage.getItem("theme");

    if (savedTheme === "dark") {
        body.classList.add("dark-mode");
    }

    const toggleTheme =
    document.getElementById("toggleTheme");

    if (toggleTheme) {

        toggleTheme.addEventListener("click", () => {

            body.classList.toggle("dark-mode");

            localStorage.setItem(
                "theme",
                body.classList.contains("dark-mode")
                    ? "dark"
                    : "light"
            );

        });

    }

    /* =====================================
       LEITURA POR VOZ
    ===================================== */

    let speech = null;

    const startReading =
    document.getElementById("startReading");

    const pauseReading =
    document.getElementById("pauseReading");

    const resumeReading =
    document.getElementById("resumeReading");

    const stopReading =
    document.getElementById("stopReading");

    if (startReading) {

        startReading.addEventListener("click", () => {

            window.speechSynthesis.cancel();

            const mainContent =
            document.getElementById("mainContent");

            if (!mainContent) return;

            speech =
            new SpeechSynthesisUtterance(
                mainContent.innerText
            );

            speech.lang = "pt-BR";
            speech.rate = 1;
            speech.pitch = 1;

            window.speechSynthesis.speak(
                speech
            );

        });

    }

    if (pauseReading) {

        pauseReading.addEventListener("click", () => {

            window.speechSynthesis.pause();

        });

    }

    if (resumeReading) {

        resumeReading.addEventListener("click", () => {

            window.speechSynthesis.resume();

        });

    }

    if (stopReading) {

        stopReading.addEventListener("click", () => {

            window.speechSynthesis.cancel();

        });

    }

    /* =====================================
       COMENTÁRIOS
    ===================================== */

    const commentInput =
    document.getElementById("commentText");

    const saveComment =
    document.getElementById("saveComment");

    const commentList =
    document.getElementById("commentList");

    function loadComments() {

        if (!commentList) return;

        const comments =
        JSON.parse(
            localStorage.getItem("comments")
        ) || [];

        commentList.innerHTML = "";

        comments.forEach(comment => {

            const div =
            document.createElement("div");

            div.classList.add("comment");

            div.textContent = comment;

            commentList.appendChild(div);

        });

    }

    if (saveComment) {

        saveComment.addEventListener("click", () => {

            const text =
            commentInput.value.trim();

            if (text === "") {

                alert(
                    "Digite um comentário antes de enviar."
                );

                return;

            }

            const comments =
            JSON.parse(
                localStorage.getItem("comments")
            ) || [];

            comments.push(text);

            localStorage.setItem(
                "comments",
                JSON.stringify(comments)
            );

            commentInput.value = "";

            loadComments();

        });

    }

    loadComments();

    /* =====================================
       FORMULÁRIO
    ===================================== */

    const form =
    document.getElementById(
        "seminarioForm"
    );

    if (form) {

        form.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();

                alert(
                    "Inscrição enviada com sucesso!"
                );

                form.reset();

            }
        );

    }

    /* =====================================
       BOTÃO VOLTAR AO TOPO
    ===================================== */

    const topButton =
    document.createElement("button");

    topButton.id =
    "backToTop";

    topButton.innerHTML = "⬆";

    document.body.appendChild(
        topButton
    );

    Object.assign(
        topButton.style,
        {
            position: "fixed",
            left: "20px",
            bottom: "20px",
            width: "50px",
            height: "50px",
            border: "none",
            borderRadius: "50%",
            background: "#0B5ED7",
            color: "#ffffff",
            cursor: "pointer",
            fontSize: "20px",
            fontWeight: "bold",
            display: "none",
            zIndex: "9999",
            boxShadow:
                "0 5px 15px rgba(0,0,0,.2)"
        }
    );

    window.addEventListener(
        "scroll",
        () => {

            if (window.scrollY > 400) {

                topButton.style.display =
                "block";

            } else {

                topButton.style.display =
                "none";

            }

        }
    );

    topButton.addEventListener(
        "click",
        () => {

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

        }
    );

    /* =====================================
       ANIMAÇÃO SUAVE DOS CARDS
    ===================================== */

    const cards =
    document.querySelectorAll(
        ".card, .timeline-item"
    );

    const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                "translateY(0)";

            }

        });

    });

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform =
        "translateY(30px)";
        card.style.transition =
        "all .6s ease";

        observer.observe(card);

    });

    console.log(
        "✅ Agro Forte carregado com sucesso!"
    );

});
