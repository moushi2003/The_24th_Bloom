// The 24th Bloom
// Cinematic Auto Journey

const sections = document.querySelectorAll("section");

let current = 0;

// Show first section
sections.forEach((section, index) => {
    section.style.opacity = index === 0 ? "1" : "0";
    section.style.transform = "translateY(40px)";
});


function showNextSection() {

    if (current < sections.length - 1) {

        sections[current].style.opacity = "0";
        sections[current].style.transform = "translateY(-40px)";

        current++;

        sections[current].style.opacity = "1";
        sections[current].style.transform = "translateY(0)";

    }

}


// Automatically move every 5 seconds

setInterval(() => {
    showNextSection();
}, 5000);
