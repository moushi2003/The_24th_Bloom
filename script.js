/* =========================================================
   MAHEE — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 1
   MASTER SETUP + BIRTHDAY CURTAIN
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       PAGE 2 — BIRTHDAY ELEMENTS
    ===================================================== */

    const birthdayPage =
        document.getElementById("birthdayPage");

    const birthdayCurtain =
        document.getElementById("birthdayCurtain");

    const celebrateBtn =
        document.getElementById("celebrateBtn");

    const balloonContainer =
        document.getElementById("balloonContainer");



    /* =====================================================
       SAFETY CHECK
       Prevents errors if an element is temporarily missing
    ===================================================== */

    if (!birthdayPage) {
        console.warn(
            "Birthday Page not found."
        );

        return;
    }



    /* =====================================================
       INITIAL STATE
    ===================================================== */

    birthdayPage.classList.remove(
        "curtain-open"
    );


    if (balloonContainer) {
        balloonContainer.innerHTML = "";
    }



    /* =====================================================
       CURTAIN OPENING
    ===================================================== */

    function openBirthdayCurtain() {

        if (
            birthdayPage.classList.contains(
                "curtain-open"
            )
        ) {
            return;
        }


        /* Small cinematic pause */

        setTimeout(() => {

            birthdayPage.classList.add(
                "curtain-open"
            );

        }, 450);



        /* Remove curtain interaction after opening */

        setTimeout(() => {

            if (birthdayCurtain) {
                birthdayCurtain.style.pointerEvents =
                    "none";
            }

        }, 2200);

    }



    /* =====================================================
       AUTO CURTAIN OPEN
    ===================================================== */

    setTimeout(() => {

        openBirthdayCurtain();

    }, 900);



    /* =====================================================
       CELEBRATE BUTTON
       Actual balloons + fireworks will come in
       the next JS parts.
    ===================================================== */

    if (celebrateBtn) {

        celebrateBtn.addEventListener(
            "click",
            () => {

                birthdayPage.classList.add(
                    "celebration-started"
                );

                /*

                   Balloons + confetti +
                   fireworks will be connected
                   in JS Part 2.

                */

                console.log(
                    "Celebration started 🎉"
                );

            }
        );

    }



    /* =====================================================
       EXPOSE CURTAIN FUNCTION
       Useful for later page transitions
    ===================================================== */

    window.openBirthdayCurtain =
        openBirthdayCurtain;



    console.log(
        "🎂 Birthday Page initialized successfully."
    );

  /* =========================================================
   MAHEE — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 2
   BALLOONS + CELEBRATION
========================================================= */


/* =========================================================
   BALLOON SYSTEM
========================================================= */

(function () {

    const birthdayPage =
        document.getElementById("birthdayPage");

    const balloonContainer =
        document.getElementById("balloonContainer");

    const celebrateBtn =
        document.getElementById("celebrateBtn");


    if (!birthdayPage || !balloonContainer) {
        return;
    }


    /* =====================================================
       BALLOON COLORS
    ===================================================== */

    const balloonColors = [
        "#ff6b81",
        "#ff9fba",
        "#ffd166",
        "#8ec5ff",
        "#b8a0ff",
        "#ffffff"
    ];


    /* =====================================================
       CREATE BALLOON
    ===================================================== */

    function createBalloon(
        extra = false
    ) {

        const balloon =
            document.createElement("div");

        balloon.className =
            "cinematic-balloon";


        /* Random properties */

        const size =
            extra
                ? Math.random() * 18 + 42
                : Math.random() * 20 + 38;


        const left =
            Math.random() * 94 + 3;


        const duration =
            Math.random() * 5 + 7;


        const delay =
            Math.random() * 3;


        const color =
            balloonColors[
                Math.floor(
                    Math.random() *
                    balloonColors.length
                )
            ];


        balloon.style.setProperty(
            "--balloon-size",
            `${size}px`
        );


        balloon.style.setProperty(
            "--balloon-left",
            `${left}%`
        );


        balloon.style.setProperty(
            "--balloon-duration",
            `${duration}s`
        );


        balloon.style.setProperty(
            "--balloon-delay",
            `${delay}s`
        );


        balloon.style.setProperty(
            "--balloon-color",
            color
        );


        balloonContainer.appendChild(
            balloon
        );


        /* Remove after animation */

        if (extra) {

            setTimeout(() => {

                balloon.remove();

            }, (duration + delay) * 1000 + 1000);

        }

    }



    /* =====================================================
       BACKGROUND BALLOONS
    ===================================================== */

    function createBackgroundBalloons() {

        balloonContainer.innerHTML = "";


        for (
            let i = 0;
            i < 14;
            i++
        ) {

            createBalloon(false);

        }

    }


    createBackgroundBalloons();



    /* =====================================================
       CELEBRATION BALLOONS
    ===================================================== */

    function launchCelebrationBalloons() {

        for (
            let i = 0;
            i < 28;
            i++
        ) {

            setTimeout(() => {

                createBalloon(true);

            }, i * 80);

        }

    }



    /* =====================================================
       CONFETTI
    ===================================================== */

    function launchConfetti() {

        const confettiColors = [
            "#ff6b81",
            "#ffd166",
            "#8ec5ff",
            "#b8a0ff",
            "#ffffff"
        ];


        for (
            let i = 0;
            i < 70;
            i++
        ) {

            const piece =
                document.createElement("span");

            piece.className =
                "cinematic-confetti";


            piece.style.left =
                `${Math.random() * 100}%`;


            piece.style.setProperty(
                "--confetti-color",
                confettiColors[
                    Math.floor(
                        Math.random() *
                        confettiColors.length
                    )
                ]
            );


            piece.style.setProperty(
                "--confetti-delay",
                `${Math.random() * 0.8}s`
            );


            piece.style.setProperty(
                "--confetti-x",
                `${(Math.random() - 0.5) * 260}px`
            );


            birthdayPage.appendChild(
                piece
            );


            setTimeout(() => {

                piece.remove();

            }, 4000);

        }

    }



    /* =====================================================
       CELEBRATE BUTTON
    ===================================================== */

    if (celebrateBtn) {

        celebrateBtn.addEventListener(
            "click",
            () => {

                birthdayPage.classList.add(
                    "celebration-started"
                );


                launchCelebrationBalloons();


                launchConfetti();


                /*

                  Fireworks will be connected
                  in JS Part 4.

                */

            }
        );

    }



    /* =====================================================
       EXPOSE FUNCTIONS
       For later JS parts
    ===================================================== */

    window.createBirthdayBalloon =
        createBalloon;

    window.launchCelebrationBalloons =
        launchCelebrationBalloons;

    window.launchBirthdayConfetti =
        launchConfetti;


})();

});

/* =========================================================
   MAHEE — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 3
   FRIENDSHIP MEMORIES — 4 PHOTO SLIDESHOW
========================================================= */

(function () {

    const memoriesPage =
        document.querySelector(".memories-page");

    const slides =
        document.querySelectorAll(".memory-slide");

    const dots =
        document.querySelectorAll(".memory-progress-dot");

    const prevBtn =
        document.querySelector(".memory-nav-prev");

    const nextBtn =
        document.querySelector(".memory-nav-next");


    /* =====================================================
       SAFETY CHECK
    ===================================================== */

    if (
        !memoriesPage ||
        !slides.length
    ) {
        console.warn(
            "Memories slideshow not found."
        );

        return;
    }


    /* =====================================================
       STATE
    ===================================================== */

    let currentSlide = 0;

    let autoSlideTimer = null;

    const SLIDE_DURATION = 4500;



    /* =====================================================
       SHOW SLIDE
    ===================================================== */

    function showSlide(index) {

        if (!slides.length) {
            return;
        }


        /* Loop around */

        if (index < 0) {
            index = slides.length - 1;
        }

        if (index >= slides.length) {
            index = 0;
        }


        currentSlide = index;


        /* Remove active state */

        slides.forEach((slide) => {

            slide.classList.remove(
                "active"
            );

        });


        dots.forEach((dot) => {

            dot.classList.remove(
                "active"
            );

        });


        /* Activate current */

        slides[currentSlide]
            .classList.add("active");


        if (dots[currentSlide]) {

            dots[currentSlide]
                .classList.add("active");

        }

    }



    /* =====================================================
       NEXT
    ===================================================== */

    function nextSlide() {

        showSlide(
            currentSlide + 1
        );

        restartAutoSlide();

    }



    /* =====================================================
       PREVIOUS
    ===================================================== */

    function previousSlide() {

        showSlide(
            currentSlide - 1
        );

        restartAutoSlide();

    }



    /* =====================================================
       AUTO SLIDESHOW
    ===================================================== */

    function startAutoSlide() {

        clearInterval(
            autoSlideTimer
        );


        autoSlideTimer =
            setInterval(() => {

                showSlide(
                    currentSlide + 1
                );

            }, SLIDE_DURATION);

    }



    function restartAutoSlide() {

        startAutoSlide();

    }



    /* =====================================================
       BUTTON CONTROLS
    ===================================================== */

    if (nextBtn) {

        nextBtn.addEventListener(
            "click",
            nextSlide
        );

    }


    if (prevBtn) {

        prevBtn.addEventListener(
            "click",
            previousSlide
        );

    }



    /* =====================================================
       DOT CONTROLS
    ===================================================== */

    dots.forEach((dot, index) => {

        dot.addEventListener(
            "click",
            () => {

                showSlide(index);

                restartAutoSlide();

            }
        );

    });



    /* =====================================================
       TOUCH / SWIPE SUPPORT
    ===================================================== */

    let touchStartX = 0;

    let touchStartY = 0;

    let touchEndX = 0;

    let touchEndY = 0;


    memoriesPage.addEventListener(
        "touchstart",
        (event) => {

            const touch =
                event.changedTouches[0];

            touchStartX =
                touch.clientX;

            touchStartY =
                touch.clientY;

        },
        {
            passive: true
        }
    );


    memoriesPage.addEventListener(
        "touchend",
        (event) => {

            const touch =
                event.changedTouches[0];

            touchEndX =
                touch.clientX;

            touchEndY =
                touch.clientY;


            handleSwipe();

        },
        {
            passive: true
        }
    );



    /* =====================================================
       SWIPE DETECTION
    ===================================================== */

    function handleSwipe() {

        const differenceX =
            touchEndX - touchStartX;

        const differenceY =
            touchEndY - touchStartY;


        /* Ignore mostly vertical movement */

        if (
            Math.abs(differenceX) <
            Math.abs(differenceY)
        ) {
            return;
        }


        /* Minimum swipe distance */

        if (
            Math.abs(differenceX) <
            45
        ) {
            return;
        }


        if (differenceX < 0) {

            nextSlide();

        } else {

            previousSlide();

        }

    }



    /* =====================================================
       PAUSE WHEN USER HOLDS / HOVERS
    ===================================================== */

    memoriesPage.addEventListener(
        "mouseenter",
        () => {

            clearInterval(
                autoSlideTimer
            );

        }
    );


    memoriesPage.addEventListener(
        "mouseleave",
        () => {

            startAutoSlide();

        }
    );



    /* =====================================================
       INITIALIZE
    ===================================================== */

    showSlide(0);

    startAutoSlide();



    /* =====================================================
       EXPOSE FUNCTIONS
       For later master navigation
    ===================================================== */

    window.showMemorySlide =
        showSlide;

    window.nextMemorySlide =
        nextSlide;

    window.previousMemorySlide =
        previousSlide;


    console.log(
        "📸 Friendship slideshow initialized."
    );

})();


