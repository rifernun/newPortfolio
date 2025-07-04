// Animação de texto dinâmico
const devText = document.getElementById('dev');
const words = ['Web Developer', 'Full Stack', 'Node.js Devoloper', 'API Developer'];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        devText.textContent = currentWord.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeWriter, 700); // Pausa antes de começar a escrever a próxima palavra (aumentado)
        } else {
            setTimeout(typeWriter, 70); // Velocidade de apagar (aumentado)
        }
    } else {
        devText.textContent = currentWord.substring(0, charIndex++);
        if (charIndex > currentWord.length) {
            isDeleting = true;
            setTimeout(typeWriter, 1400); // Pausa antes de apagar (aumentado)
        } else {
            setTimeout(typeWriter, 130); // Velocidade de digitação (aumentado)
        }
    }
}
typeWriter();

// Projetos fictícios animados
const projects = [
    {
        title: "Blog",
        desc: "Blog interativo com banco de dados, autenticação e painel de administração.",
        img: "./src/img/blog.png",
        link: 'https://github.com/rifernun/guiaPress'
    },
    {
        title: "API de Games",
        desc: "REST API robusta para cadastro de jogos conectada com MySQL e com autenticação JWT.",
        img: "./src/img/apigames.png",
        link: 'https://github.com/rifernun/CriacaoConsumoAPI'
    },
    {
        title: "LuniaBeauty",
        desc: "Página para descobrir qual perfume mais se encaixa com você, de acordo com questionários.",
        img: "./src/img/luniabeauty.png",
        link: ''
    },
    {
        title: "TCC - TaskFLow",
        desc: "Aplicação de gerenciamento de projetos baseado no Trello (apenas protótipo).",
        img: "./src/img/tccTaskflow.jpeg",
        link: ''
    }
];
const grid = document.getElementById('projectsGrid');
projects.forEach((proj, i) => {
    const card = document.createElement('div');
    card.className = 'project-card scroll-hidden';
    card.innerHTML = `
        <h3>${proj.title}</h3>
        <p>${proj.desc}</p>
        ${proj.img ? `<img src="${proj.img}" alt="${proj.title}" style="width: 100%; border-radius: 12px; margin-top: 10px;">` : ''}<br>
        ${proj.link ? `<a href="${proj.link}" target="_blank" class="btn-main">Ver Projeto</a>` : `<button class="btn" disabled>Projeto indisponivel ou privado</button>`}
    `;
    grid.appendChild(card);
});


// Efeito aparecer ao scrollar
function revealOnScroll() {
    const elements = document.querySelectorAll('.scroll-hidden, .show-on-scroll');
    const windowHeight = window.innerHeight;
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < windowHeight * 0.92 && rect.bottom > 60) {
            el.classList.add('show-on-scroll');
        } else {
            el.classList.remove('show-on-scroll');
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('resize', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);