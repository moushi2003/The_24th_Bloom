// ================= Typing Effect =================

const text = "A little universe made only for you... ❤️";

let index = 0;

const typingText = document.getElementById("typing");

function typeWriter(){

    if(typingText && index < text.length){

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();




// ================= Music Button =================

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if(music && musicBtn){

    musicBtn.addEventListener("click",()=>{

        if(music.paused){

            music.play();

            musicBtn.innerHTML="⏸ Pause Theme";

        }

        else{

            music.pause();

            musicBtn.innerHTML="🎵 Play Theme";

        }

    });

}




// ================= Spider Floating Stars =================

function createSceneStar(){

    const scene = document.querySelector(".scene");

    if(!scene) return;

    const star = document.createElement("div");

    star.innerHTML = "✦";

    star.style.position = "absolute";
    star.style.color = "white";

    star.style.left = Math.random()*100 + "vw";
    star.style.top = "100vh";

    star.style.fontSize = (10+Math.random()*20) + "px";
    star.style.opacity = Math.random();

    star.style.transition = "top 8s linear";

    scene.appendChild(star);

    setTimeout(()=>{

        star.style.top = "-10vh";

    },100);

    setTimeout(()=>{

        star.remove();

    },8000);

}

setInterval(createSceneStar,500);

// ================= CAKE PAGE =================


// Candle Blow Effect

const blowBtn = document.getElementById("blowBtn");

if(blowBtn){

    blowBtn.addEventListener("click",()=>{


        const flames =
        document.querySelectorAll(".candle span");


        flames.forEach((flame)=>{

            flame.style.display="none";

        });


        blowBtn.innerHTML =
        "✨ Wish Made ❤️";


        createFireworks();


    });

}




// Fireworks Effect


function createFireworks(){


    const cakePage =
    document.querySelector(".cake-page");


    if(!cakePage) return;



    for(let i=0;i<30;i++){


        const fire =
        document.createElement("div");


        fire.innerHTML="✨";


        fire.style.position="absolute";


        fire.style.left =
        Math.random()*100+"%";


        fire.style.top =
        Math.random()*60+"%";


        fire.style.fontSize =
        (15+Math.random()*25)+"px";


        fire.style.animation =
        "explode 1.5s forwards";


        cakePage.appendChild(fire);



        setTimeout(()=>{

            fire.remove();

        },1500);


    }


}




// Firework Animation


const fireStyle =
document.createElement("style");


fireStyle.innerHTML=`

@keyframes explode{

0%{

transform:scale(0);

opacity:1;

}


100%{

transform:
translate(
${Math.random()*200-100}px,
${Math.random()*200-100}px
)
scale(2);

opacity:0;

}

}

`;


document.head.appendChild(fireStyle);






// Next Button


const nextBtn =
document.getElementById("nextBtn");


if(nextBtn){

    nextBtn.addEventListener("click",()=>{

        document.querySelector(".letter-page")
        .scrollIntoView({
            behavior:"smooth"
        });

    });

}

/* ================= UNSPOKEN TRUTH & LETTER INTERACTION ================= */

// Function to open the envelope
function openLetter() {
    const envelope = document.getElementById('envelopeContainer');
    const letterStage = document.getElementById('letterStage');

    if (envelope && letterStage) {
        // Smoothly fade out envelope
        envelope.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        envelope.style.opacity = '0';
        envelope.style.transform = 'scale(0.8)';

        setTimeout(() => {
            envelope.style.display = 'none';
            letterStage.classList.add('active');

            // Smooth scroll into letter view
            letterStage.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 800);
    }
}

// Function to spawn floating heart particles
function spawnHearts(event) {
    const icons = ['💋', '💖', '🤍', '✨'];

    for (let i = 0; i < 8; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-particle';

        // Select random icon
        heart.innerHTML = icons[Math.floor(Math.random() * icons.length)];

        // Calculate offset position from click
        const offsetX = (Math.random() - 0.5) * 60;
        const offsetY = (Math.random() - 0.5) * 60;

        heart.style.left = `${event.clientX + offsetX}px`;
        heart.style.top = `${event.clientY + offsetY}px`;

        document.body.appendChild(heart);

        // Remove element after animation completes
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

/* ================= SPIDER & CAKE PAGE LOGIC ================= */

document.addEventListener('DOMContentLoaded', () => {
    // Music Button Control
    const musicBtn = document.getElementById('musicBtn');
    const music = document.getElementById('music');

    if (musicBtn && music) {
        musicBtn.addEventListener('click', () => {
            if (music.paused) {
                music.play();
                musicBtn.innerText = '⏸️ Pause Theme';
            } else {
                music.pause();
                musicBtn.innerText = '🎵 Play Theme';
            }
        });
    }

    // Cake Candle Blow Control
    const blowBtn = document.getElementById('blowBtn');
    const candleSpan = document.querySelector('.candle span');

    if (blowBtn && candleSpan) {
        blowBtn.addEventListener('click', () => {
            candleSpan.style.display = 'none';
            blowBtn.innerText = '✨ Wish Made!';
            blowBtn.disabled = true;
        });
    }

    // Navigation Next Button Control
    const nextBtn = document.getElementById('nextBtn');
    const letterPage = document.querySelector('.letter-page');

    if (nextBtn && letterPage) {
        nextBtn.addEventListener('click', () => {
            letterPage.scrollIntoView({ behavior: 'smooth' });
        });
    }
});
