/* Floating hearts */
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerText = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (4 + Math.random() * 4) + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 300);

/* NO button escape */
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

/* YES button */
const yesBtn = document.getElementById('yesBtn');
const subtitle = document.getElementById('subtitle');

yesBtn.addEventListener('click', () => {
    subtitle.innerText = 'Wiedziałem! Kocham Cię najbardziej na świecie 😘';
    confetti();
});

function confetti() {
    for (let i = 0; i < 120; i++) {
        const c = document.createElement('div');
        c.style.position = 'fixed';
        c.style.width = '10px';
        c.style.height = '10px';
        c.style.background = ['#ff4d6d', '#ffd166', '#ff758f'][Math.floor(Math.random() * 3)];
        c.style.left = Math.random() * 100 + 'vw';
        c.style.top = '-10px';
        c.style.animation = `fall ${2 + Math.random()*3}s linear`;
        document.body.appendChild(c);
        setTimeout(() => c.remove(), 5000);
    }
}

const style = document.createElement('style');
style.innerHTML = `
@keyframes fall {
  to { transform: translateY(110vh) rotate(360deg); opacity: 0; }
}`;
document.head.appendChild(style);


console.log(
    "%cKocham Cię bardziej niż czysty kod ❤️",
    "color:#ff4d6d;font-size:16px;font-weight:bold"
);
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.intro').style.opacity = 0;
        document.querySelector('.intro').style.transition = '1.5s ease';

        setTimeout(() => {
            document.querySelector('.intro').style.display = 'none';
        }, 1500);
    }, 4200);
});
document.addEventListener('mousemove', e => {
    document.querySelectorAll('.petal').forEach((p, i) => {
        const offset = (e.clientX / window.innerWidth - 0.5) * 10;
        p.style.transform = `rotate(${offset * (i+1)}deg)`;
    });
});
const lines = document.querySelectorAll('.line');
let delay = 0;

lines.forEach(line => {
    setTimeout(() => {
        line.style.opacity = 1;
        line.style.transform = 'translateY(0)';
    }, delay);
    delay += 1200;
});
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY / document.body.scrollHeight;
    document.body.style.background = `linear-gradient(
    180deg,
    #fff0f5 ${100 - scrolled*100}%,
    #1a1a2e
  )`;
});

document.getElementById('startScreen').addEventListener('click', () => {
    document.getElementById('startScreen').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('startScreen').remove();
    }, 800);
});
let bloomStage = 0;
const petals = document.querySelectorAll('.petal');

document.querySelector('.intro').addEventListener('click', () => {
    if (bloomStage < petals.length) {
        petals[bloomStage].style.opacity = 1;
        petals[bloomStage].style.transform = 'scale(1)';
        bloomStage++;
    }
});
let timer;

const heart = document.querySelector('.holdHeart');

heart.addEventListener('touchstart', () => {
    timer = setTimeout(() => {
        subtitle.innerText = "Zawsze. Bez warunków.";
        confetti();
    }, 1500);
});

heart.addEventListener('touchend', () => clearTimeout(timer));