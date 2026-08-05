// The 24th Bloom
// Automatic Cinematic Journey

const sections = document.querySelectorAll("section");

let current = 0;

// First scene visible
sections.forEach((section, index) => {
    if (index === 0) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
    } else {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
    }
});

function nextScene() {
    if (current < sections.length - 1) {

        sections[current].style.opacity = "0";
        sections[current].style.transform = "translateY(-40px)";

        current++;

        sections[current].style.opacity = "1";
        sections[current].style.transform = "translateY(0)";
    }
}

// Change scene automatically every 6 seconds
setInterval(nextScene, 6000);
