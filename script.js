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

            musicBtn.innerHTML =
            "⏸ Pause Theme";

        }

        else{

            music.pause();

            musicBtn.innerHTML =
            "🎵 Play Theme";

        }


    });

}





// ================= Spider Floating Stars =================


function createSceneStar(){


    const scene =
    document.querySelector(".scene");


    if(!scene) return;



    const star=document.createElement("div");


    star.innerHTML="✦";


    star.style.position="absolute";

    star.style.color="white";


    star.style.left =
    Math.random()*100+"vw";


    star.style.top="100vh";


    star.style.opacity =
    Math.random();


    star.style.fontSize =
    (10+Math.random()*20)+"px";


    star.style.transition =
    "8s linear";


    scene.appendChild(star);



    setTimeout(()=>{

        star.style.top="-10vh";

    },100);



    setTimeout(()=>{

        star.remove();

    },8000);


}


setInterval(createSceneStar,500);







// ================= Garden Twinkle Stars =================


function createGardenStar(){


    const garden =
    document.querySelector(".garden-scene");


    if(!garden) return;



    const star=document.createElement("div");


    star.innerHTML="✦";


    star.style.position="absolute";

    star.style.color="white";


    star.style.left =
    Math.random()*100+"vw";


    star.style.top =
    Math.random()*60+"vh";


    star.style.fontSize =
    (8+Math.random()*15)+"px";


    star.style.opacity =
    Math.random();


    star.style.animation =
    "blink 2s infinite";



    garden.appendChild(star);



    setTimeout(()=>{

        star.remove();

    },5000);


}



setInterval(createGardenStar,700);







// ================= Flower Movement =================


const flowers =
document.querySelectorAll(".flower");


setInterval(()=>{


    flowers.forEach((flower)=>{


        flower.style.transform =
        `rotate(${Math.random()*10-5}deg)`;


    });


},1500);







// ================= Blink Animation =================


const style =
document.createElement("style");


style.innerHTML = `

@keyframes blink{

0%,100%{

opacity:.3;

}

50%{

opacity:1;

}

}

`;


document.head.appendChild(style);
