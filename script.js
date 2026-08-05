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


        alert("Birthday Wish Letter Coming Soon ❤️");


    });

}
