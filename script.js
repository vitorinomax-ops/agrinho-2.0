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

    button.classList.add("opened");

} else {

    button.classList.remove("opened");

}

        });

    });

    /* =====================================
       CONTROLE DE FONTE
    ===================================== */

    const html =
    document.documentElement;

    let currentFont =
    parseInt(localStorage.getItem("fontSize")) || 16;

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
                "16"
            );

        });

    }

    /* =====================================
       MODO ESCURO
    ===================================== */

    const body =
    document.body;

    const toggleTheme =
    document.getElementById("toggleTheme");

    if (
        localStorage.getItem("theme")
        === "dark"
    ) {
        body.classList.add("dark-mode");
    }

    if (toggleTheme) {

        toggleTheme.addEventListener("click", () => {

            body.classList.toggle(
                "dark-mode"
            );

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

    let speech;

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

            const content =
            document.getElementById("mainContent");

            if (!content) return;

            speech =
            new SpeechSynthesisUtterance(
                content.innerText
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

        comments.forEach((comment, index) => {

            const div =
            document.createElement("div");

            div.className = "comment";

         const text =
document.createElement("p");

text.textContent = comment;

const btn =
document.createElement("button");

btn.textContent = "Excluir";
btn.className = "delete-comment";
btn.dataset.id = index;

div.appendChild(text);
div.appendChild(btn);

            commentList.appendChild(div);

        });

        const deleteButtons =
        document.querySelectorAll(".delete-comment");

        deleteButtons.forEach(button => {

            button.addEventListener("click", () => {

                const id =
                button.dataset.id;

                comments.splice(id, 1);

                localStorage.setItem(
                    "comments",
                    JSON.stringify(comments)
                );

                loadComments();

            });

        });

    }

    if (saveComment) {

        saveComment.addEventListener("click", () => {

            const text =
            commentInput.value.trim();

            if (!text) {

                alert(
                    "Digite um comentário."
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
       FORMULÁRIO SEMINÁRIO
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
            width: "55px",
            height: "55px",
            border: "none",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
            display: "none",
            zIndex: "9999",
            background: "#0B5ED7",
            color: "#fff",
            boxShadow:
                "0 5px 15px rgba(0,0,0,.2)"
        }
    );

    window.addEventListener(
        "scroll",
        () => {

            if (
                window.scrollY > 400
            ) {

                topButton.style.opacity = "1";
topButton.style.visibility = "visible";

            } else {

                topButton.style.opacity = "0";
topButton.style.visibility = "hidden";

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
       ANIMAÇÃO AO ROLAR
    ===================================== */

    const cards =
    document.querySelectorAll(
        ".card, .timeline-item, .imagem"
    );

    const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.style.opacity =
                    "1";

                    entry.target.style.transform =
                    "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    cards.forEach(card => {

        card.style.opacity = "0";
        card.style.transform =
        "translateY(30px)";
        card.style.transition =
        "all .6s ease";

        observer.observe(card);

    });

    console.log(
        "✅ Projeto Agro Forte carregado com sucesso!"
    );

});
const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(
".card,.timeline-item,.imagem"
)
.forEach(el => observer.observe(el));
