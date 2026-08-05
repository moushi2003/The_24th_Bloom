// The 24th Bloom
// Main JavaScript File

// Start Button Effect

const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", function () {

        document.querySelector(".birthday")
        .scrollIntoView({
            behavior: "smooth"
        });

    });
}


// Simple fade effect while scrolling

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }

    });

});
