```javascript
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

        if(!isActive){
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

increaseFont.addEventListener("click", () => {

    if(currentFont < 28){

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

decreaseFont.addEventListener("click", () => {

    if(currentFont > 12){

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

/* =====================================
   DARK MODE
===================================== */

const body =
document.body;

if(
    localStorage.getItem("theme")
    === "dark"
){
    body.classList.add("dark-mode");
}

document
.getElementById("toggleTheme")
.addEventListener("click", () => {

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

/* =====================================
   LEITURA POR VOZ
===================================== */

let speech;

const startReading =
document.getElementById(
    "startReading"
);

const pauseReading =
document.getElementById(
    "pauseReading"
);

const resumeReading =
document.getElementById(
    "resumeReading"
);

const stopReading =
document.getElementById(
    "stopReading"
);

startReading.addEventListener("click", () => {

    window.speechSynthesis.cancel();

    const text =
    document.getElementById(
        "mainContent"
    ).innerText;

    speech =
    new SpeechSynthesisUtterance(
        text
    );

    speech.lang = "pt-BR";
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(
        speech
    );

});

pauseReading.addEventListener("click", () => {

    window.speechSynthesis.pause();

});

resumeReading.addEventListener("click", () => {

    window.speechSynthesis.resume();

});

stopReading.addEventListener("click", () => {

    window.speechSynthesis.cancel();

});

/* =====================================
   COMENTÁRIOS
===================================== */

const commentInput =
document.getElementById(
    "commentText"
);

const saveComment =
document.getElementById(
    "saveComment"
);

const commentList =
document.getElementById(
    "commentList"
);

function loadComments(){

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

saveComment.addEventListener("click", () => {

    const text =
    commentInput.value.trim();

    if(text === ""){

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

loadComments();

/* =====================================
   FORMULÁRIO
===================================== */

const form =
document.getElementById(
    "seminarioForm"
);

form.addEventListener(
    "submit",
    function(event){

        event.preventDefault();

        alert(
            "Inscrição enviada com sucesso!"
        );

        form.reset();

    }
);

/* =====================================
   BOTÃO VOLTAR AO TOPO
===================================== */

const topButton =
document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id =
"backToTop";

document.body.appendChild(
    topButton
);

Object.assign(
    topButton.style,
    {
        position:"fixed",
        bottom:"20px",
        left:"20px",
        width:"50px",
        height:"50px",
        border:"none",
        borderRadius:"50%",
        cursor:"pointer",
        fontSize:"20px",
        display:"none",
        zIndex:"9999"
    }
);

window.addEventListener(
    "scroll",
    () => {

        if(
            window.scrollY > 400
        ){

            topButton.style.display =
            "block";

        }else{

            topButton.style.display =
            "none";

        }

    }
);

topButton.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    }
);

console.log(
    "Projeto Agro Forte carregado com sucesso!"
);
```
