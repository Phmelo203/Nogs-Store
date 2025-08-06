# Nogs-Store
Nogs Store Site de demonstração do carrossel interativo com três produtos Apple (Apple Watch, AirPods Max Pro, Vision Pro). Criado com HTML, CSS animado e JavaScript para navegação entre slides.


🚀 Funcionalidades

Navegação manual entre slides com os botões Anterior e Próximo

Indicação visual do slide ativo via dots e contador numérico (01, 02, 03)

Animações suaves:

Slide da imagem com fade e movimento horizontal

Texto do produto (nome, tag, descrição e botão) animando em cascata

Responsivo e compatível com telas modernas

📁 Estrutura de arquivos

pgsql
Copiar
Editar
/
├── index.html
├── style.css
└── script.js
index.html – marcação do carrossel com três itens (.item.active, .item, .item)

style.css – estilos visuais, animações, layout e responsividade

script.js – lógica JavaScript para alternância entre slides e controle dos indicadores

⚙️ Como executar

Clone ou baixe o repositório

Abra o arquivo index.html em um navegador moderno (Chrome, Firefox, Edge)

Utilize os botões “Anterior” e “Próximo” para navegar

O slide ativo exibirá animadamente o conteúdo com base nas classes .active

📘 Detalhes técnicos

HTML
Cada slide (.item) contém:

imagem dentro de .product-img

conteúdo dentro de .content (product-tag, product-name, description, botão)

A navegação está fora da lista de itens:

<div class="arrows"> contém botões com id="prev" e id="next"

<div class="indicators"> com .numbers e .dots sincronizados via JS

CSS

Layout com flexbox e posicionamento absoluto para os .item

Uso de transform e opacity animados ao aplicar/remover .active

Conteúdo interno animado com delays sequenciais (tag → nome → descrição → botão)

Paleta de cores personalizada aplicada às classes .logo, .btn, .dot.active, .container, etc.

Estilo decorativo dos círculos com .ngs-circle e .circle

JavaScript (script.js)
Seleciona os elementos com document.getElementById e document.querySelectorAll

Mantém active como índice do slide atual

Função update(direction):

Remove .active dos elementos atuais

Atualiza o índice com wrap-around

Adiciona .active ao novo item e ao dot correspondente

Atualiza o número exibido (.numbers.textContent = '0' + (active + 1))

🛠️ Personalização

Adicionar autoplay (troca automática a cada X segundos com setInterval)

Controlar com teclado (← e → para trocar slides)

Mobile friendly: adicionar media queries para telas menores

Novos produtos: basta duplicar .item e .dot e ajustar JS

📧 Contato

Para dúvidas, sugestões ou melhorias, entre em contato:

GitHub:Phmelo2003

E-mail: ph.melo20031974@gmail.com

