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
alert("kocham cieeeeeeeeee!!!!!!!!!!")
alert("jesteś gotowa?")
alert("ale czy na pewno jesteś gotowa?")
alert("tak na 100 %?")
alert("a tak na 1000%?")
alert("a tak na 100000%?")
alert("a tak na 100000000000000000000%?")
alert("dobra już cię nie męczę kochanie ❤️")

/* Interakcja ze zdjęciami */
document.querySelectorAll('.photo').forEach((photo, index) => {
    photo.addEventListener('click', () => {
        confetti();
        const messages = [
            'To jedno z moich ulubionych wspomień! 💕',
            'Każda chwila z tobą jest magiczna! ✨',
            'Nie mogę czekać na więcej takich momentów! 😍',
            'Jesteś piękna na każdym zdjęciu! 💖'
        ];
        alert(messages[index % messages.length]);
    });
});

/* Sparkles na mousemove */
document.addEventListener('mousemove', (e) => {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'fixed';
    sparkle.style.left = e.clientX + 'px';
    sparkle.style.top = e.clientY + 'px';
    sparkle.style.width = '8px';
    sparkle.style.height = '8px';
    sparkle.style.background = ['#ff4d6d', '#ff758f', '#ffd166'][Math.floor(Math.random() * 3)];
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkleAnim 0.8s ease-out forwards';
    sparkle.style.zIndex = '1';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
});

const sparkleStyle = document.createElement('style');
sparkleStyle.innerHTML = `
@keyframes sparkleAnim {
    to {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }
}`;
document.head.appendChild(sparkleStyle);

/* Easter egg - podwójny klik */
let clickCount = 0;
let clickTimer;

document.addEventListener('dblclick', (e) => {
    if (e.target.tagName !== 'BUTTON' && e.target.tagName !== 'IMG') {
        const heart = document.createElement('div');
        heart.innerText = '💕';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '3rem';
        heart.style.pointerEvents = 'none';
        heart.style.animation = 'floatUpBig 1.5s ease-out forwards';
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }
});

const heartStyle = document.createElement('style');
heartStyle.innerHTML = `
@keyframes floatUpBig {
    to {
        transform: translateY(-200px);
        opacity: 0;
    }
}`;
document.head.appendChild(heartStyle);

/* Easter egg - 5 kliknięć/tapnięć na serce */
let heartClickCount = 0;
const holdHeart = document.querySelector('.holdHeart');

holdHeart.addEventListener('click', () => {
    heartClickCount++;
    if (heartClickCount === 5) {
        alert('💖 SUPERZABEZPIECZENIE: KOCHAM CIĘ ZBYT MOCNO! 💖\nNiepowstrzymana energia miłości! ✨');
        confetti();
        confetti();
        confetti();
        heartClickCount = 0;
    }
});

/* Easter egg - Shake telefonu */
if ('DeviceMotionEvent' in window) {
    let lastShake = 0;

    window.addEventListener('devicemotion', (e) => {
        const acceleration = e.accelerationIncludingGravity;
        const x = acceleration.x || 0;
        const y = acceleration.y || 0;
        const z = acceleration.z || 0;

        const motionSize = Math.abs(x) + Math.abs(y) + Math.abs(z);

        if (motionSize > 30) {
            const now = Date.now();
            if (now - lastShake > 1000) {
                alert('🎉 DRŻYSZ ZE WZRUSZENIA? 🎉\nJa też! ❤️');
                confetti();
                lastShake = now;
            }
        }
    });
}

/* Easter egg - Swipe w górę (3 razy) */
let touchStartY = 0;
let swipeUpCount = 0;
let swipeTimer;

document.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
});

document.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;

    if (touchStartY - touchEndY > 100) {
        swipeUpCount++;
        clearTimeout(swipeTimer);

        if (swipeUpCount === 3) {
            alert('⬆️ JESTEŚ NIEZWYKŁA! ⬆️\nLiteralnie zalatałaś do nieba moim sercem!');
            confetti();
            swipeUpCount = 0;
        }

        swipeTimer = setTimeout(() => {
            swipeUpCount = 0;
        }, 2000);
    }
});

/* Easter egg - Long press na h1 */
let longPressTimer;

document.querySelector('h1').addEventListener('touchstart', () => {
    longPressTimer = setTimeout(() => {
        alert('💕 DEEP LOVE MODE 💕\nKocham Cię więcej niż dane słowa mogą wyrazić!');
        confetti();
    }, 1500);
});

document.querySelector('h1').addEventListener('touchend', () => {
    clearTimeout(longPressTimer);
});

/* Easter egg - Dotknij wszystkie 4 zdjęcia */
let photosTouched = new Set();
const photos = document.querySelectorAll('.photo');

photos.forEach((photo, index) => {
    photo.addEventListener('click', () => {
        photosTouched.add(index);

        if (photosTouched.size === 4) {
            alert('✨ DOTKNĄŁEŚ SERCA WSZYSTKICH WSPOMIEŃ! ✨\nKażda chwila z Tobą jest bezcenna! 💎');
            confetti();
            photosTouched.clear();
        }
    });
});

/* Easter egg - Szybkie 3 tappy na przyciski */
let yesClickCount = 0;
let noClickCount = 0;
let yesTimer, noTimer;

document.getElementById('yesBtn').addEventListener('click', () => {
    yesClickCount++;
    clearTimeout(yesTimer);

    if (yesClickCount === 3) {
        alert('YES YES YES! 🎆\nMoja odpowiedź to zawsze TAK dla Ciebie!');
        confetti();
        yesClickCount = 0;
    }

    yesTimer = setTimeout(() => {
        yesClickCount = 0;
    }, 1000);
});

document.getElementById('noBtn').addEventListener('mouseenter', () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;
    document.getElementById('noBtn').style.transform = `translate(${x}px, ${y}px)`;
});