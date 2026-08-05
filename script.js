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
