"use strict";

const AgroApp = {
    init() {
        this.navHandler();
        this.tabsHandler();
        this.themeHandler();
        this.revealManager();
    },

    navHandler() {
        const nav = document.querySelector('#nav');
        window.addEventListener('scroll', () => {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        });
    },

    themeHandler() {
        const themeBtn = document.querySelector('#theme-master');
        const body = document.body;

        themeBtn.addEventListener('click', () => {
            body.classList.toggle('light-theme');
            const isLight = body.classList.contains('light-theme');
            themeBtn.innerHTML = isLight ? "🌙" : "☀️";
            localStorage.setItem('agro-theme', isLight ? 'light' : 'dark');
        });

        // Checar preferência salva
        if (localStorage.getItem('agro-theme') === 'light') {
            body.classList.add('light-theme');
            themeBtn.innerHTML = "🌙";
        }
    },

    tabsHandler() {
        const btns = document.querySelectorAll('.hub-btn');
        const title = document.querySelector('#hub-title');
        const desc = document.querySelector('#hub-description');
        
        const contentData = {
            ia: {
                title: "Visual Computing",
                desc: "Drones com sensores hiperespectrais que detectam pragas e estresse hídrico através de IA preventiva."
            },
            bio: {
                title: "Regenerative Bio",
                desc: "Soluções biológicas que restauram o bioma do solo, aumentando a produtividade de forma sustentável."
            },
            iot: {
                title: "IoT Mesh",
                desc: "Rede de sensores de baixa latência conectando máquinas e solo em tempo real sem necessidade de 5G."
            }
        };

        btns.forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.getAttribute('data-target');
                
                btns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Animação de saída
                const display = document.querySelector('.hub-display');
                display.style.opacity = '0';
                display.style.transform = 'translateY(10px)';

                setTimeout(() => {
                    title.innerText = contentData[target].title;
                    desc.innerText = contentData[target].desc;
                    display.style.opacity = '1';
                    display.style.transform = 'translateY(0)';
                }, 300);
            });
        });
    },

    revealManager() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.bento-item, .hub-container').forEach(el => {
            el.style.opacity = "0";
            el.style.transform = "translateY(30px)";
            el.style.transition = "1s cubic-bezier(0.4, 0, 0.2, 1)";
            observer.observe(el);
        });
    }
};

document.addEventListener('DOMContentLoaded', () => AgroApp.init());
