
/* ==========================================
   AGRO FORTE - SCRIPT.JS
========================================== */

/* ==========================================
   ACCORDION
========================================== */

const accordionHeaders =
document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {

    header.addEventListener("click", () => {

        const content =
        header.nextElementSibling;

        content.classList.toggle("active");

        header.classList.toggle("opened");

    });

});

/* ==========================================
   CONTROLE DE FONTE
========================================== */

let currentFont = 16;

const html =
document.documentElement;

const increaseFont =
document.getElementById("increaseFont");

const decreaseFont =
document.getElementById("decreaseFont");

const resetFont =
document.getElementById("resetFont");

increaseFont.addEventListener("click", () => {

    currentFont += 2;

    html.style.fontSize =
    currentFont + "px";

});

decreaseFont.addEventListener("click", () => {

    if(currentFont > 12){

        currentFont -= 2;

        html.style.fontSize =
        currentFont + "px";
    }

});

resetFont.addEventListener("click", () => {

    currentFont = 16;

    html.style.fontSize = "16px";

});

/* ==========================================
   DARK MODE
========================================== */

const toggleTheme =
document.getElementById("toggleTheme");

toggleTheme.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const darkModeAtivo =
    document.body.classList.contains("dark-mode");

    localStorage.setItem(
        "darkMode",
        darkModeAtivo
    );

});

/* Carregar preferência */

if(localStorage.getItem("darkMode") === "true"){

    document.body.classList.add("dark-mode");

}

/* ==========================================
   FORMULÁRIO SEMINÁRIO
========================================== */

const seminarioForm =
document.getElementById("seminarioForm");

if(seminarioForm){

    seminarioForm.addEventListener(
        "submit",
        function(event){

            event.preventDefault();

            alert(
                "Inscrição enviada com sucesso!"
            );

            seminarioForm.reset();

        }
    );

}

/* ==========================================
   COMENTÁRIOS
========================================== */

const saveComment =
document.getElementById("saveComment");

const commentText =
document.getElementById("commentText");

const commentList =
document.getElementById("commentList");

function carregarComentarios(){

    const comentarios =
    JSON.parse(
        localStorage.getItem("comentarios")
    ) || [];

    commentList.innerHTML = "";

    comentarios.forEach(texto => {

        const div =
        document.createElement("div");

        div.classList.add("comment");

        div.textContent = texto;

        commentList.appendChild(div);

    });

}

if(saveComment){

    saveComment.addEventListener(
        "click",
        () => {

            const texto =
            commentText.value.trim();

            if(texto === ""){

                alert(
                    "Digite um comentário."
                );

                return;
            }

            const comentarios =
            JSON.parse(
                localStorage.getItem("comentarios")
            ) || [];

            comentarios.push(texto);

            localStorage.setItem(
                "comentarios",
                JSON.stringify(comentarios)
            );

            commentText.value = "";

            carregarComentarios();

        }
    );

}

carregarComentarios();

/* ==========================================
   LEITURA DE TEXTO
========================================== */

let speech = null;

const startReading =
document.getElementById("startReading");

const pauseReading =
document.getElementById("pauseReading");

const resumeReading =
document.getElementById("resumeReading");

const stopReading =
document.getElementById("stopReading");

if(startReading){

    startReading.addEventListener(
        "click",
        () => {

            window.speechSynthesis.cancel();

            const texto =
            document.body.innerText;

            speech =
            new SpeechSynthesisUtterance(texto);

            speech.lang = "pt-BR";

            speech.rate = 1;

            speech.pitch = 1;

            window.speechSynthesis.speak(
                speech
            );

        }
    );

}

if(pauseReading){

    pauseReading.addEventListener(
        "click",
        () => {

            window.speechSynthesis.pause();

        }
    );

}

if(resumeReading){

    resumeReading.addEventListener(
        "click",
        () => {

            window.speechSynthesis.resume();

        }
    );

}

if(stopReading){

    stopReading.addEventListener(
        "click",
        () => {

            window.speechSynthesis.cancel();

        }
    );

}

/* ==========================================
   ANIMAÇÃO AO ROLAR
========================================== */

const elementosAnimados =
document.querySelectorAll(
    ".card, .imagem"
);

const observer =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add(
                    "show"
                );

            }

        });

    },

    {
        threshold:0.15
    }

);

elementosAnimados.forEach(item => {

    observer.observe(item);

});

/* ==========================================
   BOTÃO VOLTAR AO TOPO
========================================== */

const backToTop =
document.createElement("button");

backToTop.id = "backToTop";

backToTop.innerHTML = "↑";

document.body.appendChild(backToTop);

Object.assign(
    backToTop.style,
    {
        position:"fixed",
        bottom:"20px",
        left:"20px",
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        border:"none",
        background:"#2E8B57",
        color:"#fff",
        fontSize:"22px",
        cursor:"pointer",
        zIndex:"999",
        opacity:"0",
        visibility:"hidden",
        transition:"0.3s"
    }
);

window.addEventListener(
    "scroll",
    () => {

        if(window.scrollY > 400){

            backToTop.style.opacity = "1";

            backToTop.style.visibility =
            "visible";

        }

        else{

            backToTop.style.opacity = "0";

            backToTop.style.visibility =
            "hidden";

        }

    }
);

backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    }
);

/* ==========================================
   CONTADOR DAS ESTATÍSTICAS
========================================== */

const numeros =
document.querySelectorAll(
    ".stats-section h3"
);

function animarNumero(elemento){

    const textoOriginal =
    elemento.innerText;

    const valor =
    parseInt(textoOriginal);

    if(isNaN(valor)) return;

    let contador = 0;

    const incremento =
    Math.ceil(valor / 50);

    const timer =
    setInterval(() => {

        contador += incremento;

        if(contador >= valor){

            contador = valor;

            clearInterval(timer);

        }

        if(textoOriginal.includes("%")){

            elemento.innerText =
            contador + "%";

        }

        else{

            elemento.innerText =
            contador;

        }

    }, 30);

}

const observerStats =
new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                animarNumero(
                    entry.target
                );

                observerStats.unobserve(
                    entry.target
                );

            }

        });

    },

    {
        threshold:0.5
    }

);

numeros.forEach(numero => {

    observerStats.observe(numero);

});

/* ==========================================
   MENSAGEM DE BOAS-VINDAS
========================================== */

window.addEventListener(
    "load",
    () => {

        console.log(
            "Agro Forte carregado com sucesso!"
        );

    }
);
