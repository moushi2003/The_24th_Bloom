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


// Extra Twinkling Stars

function createStar(){

    const star = document.createElement("div");

    star.innerHTML = "✦";

    star.style.position = "absolute";

    star.style.color = "white";

    star.style.left = Math.random()*100 + "vw";

    star.style.top = Math.random()*60 + "vh";

    star.style.fontSize = (8 + Math.random()*15) + "px";

    star.style.opacity = Math.random();

    star.style.animation = "blink 2s infinite";

    document.querySelector(".garden-scene")
    .appendChild(star);


    setTimeout(()=>{

        star.remove();

    },5000);

}



setInterval(createStar,700);




// Gentle Wind Feel

const flowers = document.querySelectorAll(".flower");


setInterval(()=>{

    flowers.forEach((flower)=>{

        flower.style.transform =
        `rotate(${Math.random()*10-5}deg)`;

    });


},1500);




// Add blink animation

const style = document.createElement("style");


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
