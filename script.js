<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgroSustentável | Hub de Conhecimento</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <header>
        <nav class="navbar container">
            <div class="logo">Agro<span>Forte</span></div>
            <div class="controls">
                <button id="theme-btn">🌓 Alternar Tema</button>
                <button id="font-up">A+</button>
            </div>
        </nav>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Conhecimento para <br><span>Nutrir o Futuro</span></h1>
                <p>Explore nossa curadoria de artigos científicos, matérias e vídeos sobre o equilíbrio ambiental.</p>
                
                <div id="interaction-box">
                    <input type="text" id="user-name" placeholder="Digite seu nome para começar...">
                    <button id="main-action">Liberar Conteúdo</button>
                </div>
                <div id="display-welcome" class="hidden"></div>
            </div>
        </section>

        <section class="container section-padding">
            <h2 class="section-title">Artigos e Materiais de Apoio</h2>
            <div class="grid-layout">
                <article class="content-card">
                    <span class="category">Embrapa</span>
                    <h3>O Sistema ILPF</h3>
                    <p>Entenda como a Integração Lavoura-Pecuária-Floresta pode recuperar solos e aumentar o lucro.</p>
                    <a href="https://www.embrapa.br/tema-integracao-lavoura-pecuaria-floresta-ilpf" target="_blank" class="link-btn">Acessar Artigo →</a>
                </article>

                <article class="content-card">
                    <span class="category">Tecnologia</span>
                    <h3>Agricultura de Precisão</h3>
                    <p>Matéria sobre como o GPS e sensores reduzem o uso de defensivos e protegem nascentes.</p>
                    <a href="https://www.senar.org.br/blog/agricultura-de-precisao-o-que-e-e-quais-os-beneficios/" target="_blank" class="link-btn">Ler Matéria →</a>
                </article>

                <article class="content-card">
                    <span class="category">Meio Ambiente</span>
                    <h3>Código Florestal Brasileiro</h3>
                    <p>Um guia sobre as Áreas de Preservação Permanente (APPs) e sua importância para o ecossistema.</p>
                    <a href="https://www.gov.br/agricultura/pt-br/assuntos/sustentabilidade/codigo-florestal" target="_blank" class="link-btn">Ver Guia →</a>
                </article>
            </div>
        </section>

        <section class="video-area">
            <div class="container">
                <h2 class="section-title">Vídeos Educativos</h2>
                <div class="grid-layout">
                    <a href="https://www.youtube.com/watch?v=kYI94k7vjAs" target="_blank" class="video-box">
                        <div class="play-overlay">▶</div>
                        <p>Vídeo: Sustentabilidade no Campo (YouTube)</p>
                    </a>
                    <a href="https://www.youtube.com/watch?v=N4f8WpD5f5I" target="_blank" class="video-box">
                        <div class="play-overlay">▶</div>
                        <p>Vídeo: Tecnologia e Agro (YouTube)</p>
                    </a>
                </div>
            </div>
        </section>
    </main>

    <footer class="footer">
        <div class="container">
            <p><strong>Projeto Agrinho 2026</strong> | Sustentabilidade e Inovação</p>
            <p>Referências extraídas de bases científicas e órgãos oficiais do agronegócio.</p>
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>
