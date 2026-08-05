// Typing Effect

const text = "A little universe made only for you... ❤️";

let index = 0;

const typingText = document.getElementById("typing");


function typeWriter(){

    if(index < text.length){

        typingText.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter,80);

    }

}


typeWriter();




// Music Button

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");


musicBtn.addEventListener("click",()=>{

    music.play();

    musicBtn.innerHTML="🎵 Playing Theme";

});




// Floating light particles

function createStar(){

    const star=document.createElement("div");

    star.innerHTML="✦";

    star.style.position="absolute";

    star.style.color="white";

    star.style.left=Math.random()*100+"vw";

    star.style.top="100vh";

    star.style.opacity=Math.random();

    star.style.fontSize=(10+Math.random()*20)+"px";

    star.style.transition="8s linear";

    document.querySelector(".scene").appendChild(star);


    setTimeout(()=>{

        star.style.top="-10vh";

    },100);



    setTimeout(()=>{

        star.remove();

    },8000);

}


setInterval(createStar,500);
