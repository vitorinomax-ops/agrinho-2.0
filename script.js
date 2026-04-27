// Gerenciamento de Estado
const state = {
    fontSize: 16,
    isDark: false
};

// Seletores
const themeBtn = document.getElementById('theme-btn');
const fontBtn = document.getElementById('font-up');
const actionBtn = document.getElementById('main-action');
const inputName = document.getElementById('user-name');
const welcomeBox = document.getElementById('display-welcome');
const interactionBox = document.getElementById('interaction-box');

// Alternar Tema
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    state.isDark = !state.isDark;
    themeBtn.innerText = state.isDark ? "☀️ Modo Claro" : "🌓 Modo Escuro";
});

// Controle de Fonte
fontBtn.addEventListener('click', () => {
    state.fontSize += 2;
    if (state.fontSize > 24) state.fontSize = 16;
    document.body.style.fontSize = state.fontSize + "px";
});

// Personalização (Manipulação Funcional do DOM)
actionBtn.addEventListener('click', () => {
    const nome = inputName.value.trim();
    
    if (nome.length >= 3) {
        interactionBox.style.display = "none";
        
        // Criando conteúdo dinâmico
        welcomeBox.innerHTML = `
            <div style="background: var(--accent); color: #1b3617; padding: 20px; border-radius: 8px; font-weight: bold;">
                Excelente escolha, ${nome}! Abaixo você encontra as reportagens mais recentes sobre o Agro Forte.
            </div>
        `;
        welcomeBox.classList.remove('hidden');
        
        // Simular efeito de carregamento nos artigos
        console.log(`Usuário ${nome} acessou os artigos.`);
    } else {
        alert("Por favor, insira um nome com pelo menos 3 letras.");
    }
});
