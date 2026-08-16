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

/* =========================================================
   MAHEE — CINEMATIC BIRTHDAY
   JAVASCRIPT PART 4
   REALISTIC FIREWORKS ENGINE
========================================================= */

(function () {

    const canvas =
        document.getElementById("fireworksCanvas");

    if (!canvas) {
        console.warn(
            "Fireworks canvas not found."
        );
        return;
    }


    const ctx =
        canvas.getContext("2d");


    let width = 0;
    let height = 0;

    let fireworks = [];
    let particles = [];

    let animationFrame = null;

    let fireworksRunning = false;



    /* =====================================================
       CANVAS RESIZE
    ===================================================== */

    function resizeCanvas() {

        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        width =
            window.innerWidth;

        height =
            window.innerHeight;


        canvas.width =
            width * ratio;

        canvas.height =
            height * ratio;


        canvas.style.width =
            `${width}px`;

        canvas.style.height =
            `${height}px`;


        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );

    }


    resizeCanvas();


    window.addEventListener(
        "resize",
        resizeCanvas
    );



    /* =====================================================
       FIREWORK COLORS
    ===================================================== */

    const colors = [
        "#ffd6e7",
        "#ffffff",
        "#ffe29a",
        "#b9d7ff",
        "#d8c4ff",
        "#ff9fba"
    ];



    /* =====================================================
       RANDOM COLOR
    ===================================================== */

    function randomColor() {

        return colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];

    }



    /* =====================================================
       ROCKET CLASS
    ===================================================== */

    class Rocket {

        constructor(
            startX,
            targetX,
            targetY
        ) {

            this.x =
                startX;

            this.y =
                height + 10;

            this.targetX =
                targetX;

            this.targetY =
                targetY;

            this.speed =
                Math.random() * 3 + 7;

            this.angle =
                Math.atan2(
                    targetY - this.y,
                    targetX - this.x
                );

            this.vx =
                Math.cos(
                    this.angle
                ) * this.speed;

            this.vy =
                Math.sin(
                    this.angle
                ) * this.speed;

            this.color =
                randomColor();

            this.trail = [];

            this.exploded =
                false;

        }


        update() {

            this.trail.push({
                x: this.x,
                y: this.y
            });


            if (this.trail.length > 7) {
                this.trail.shift();
            }


            this.x += this.vx;

            this.y += this.vy;


            /* Slight gravity */

            this.vy += 0.035;


            const distance =
                Math.hypot(
                    this.targetX - this.x,
                    this.targetY - this.y
                );


            if (
                distance < 18 ||
                this.vy > -1
            ) {

                this.explode();

                return true;

            }


            return false;

        }


        draw() {

            /* Rocket trail */

            ctx.beginPath();

            for (
                let i = 0;
                i < this.trail.length;
                i++
            ) {

                const point =
                    this.trail[i];

                if (i === 0) {

                    ctx.moveTo(
                        point.x,
                        point.y
                    );

                } else {

                    ctx.lineTo(
                        point.x,
                        point.y
                    );

                }

            }


            ctx.strokeStyle =
                this.color;

            ctx.globalAlpha =
                0.65;

            ctx.lineWidth =
                1.5;

            ctx.stroke();


            ctx.globalAlpha = 1;


            /* Rocket head */

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                2,
                0,
                Math.PI * 2
            );

            ctx.fillStyle =
                "#ffffff";

            ctx.shadowBlur =
                12;

            ctx.shadowColor =
                this.color;

            ctx.fill();

            ctx.shadowBlur =
                0;

        }


        explode() {

            if (this.exploded) {
                return;
            }


            this.exploded =
                true;


            createExplosion(
                this.x,
                this.y,
                this.color
            );

        }

    }



    /* =====================================================
       PARTICLE CLASS
    ===================================================== */

    class Particle {

        constructor(
            x,
            y,
            color,
            angle,
            speed,
            size
        ) {

            this.x = x;

            this.y = y;

            this.color =
                color;

            this.angle =
                angle;

            this.speed =
                speed;

            this.size =
                size;

            this.vx =
                Math.cos(angle) *
                speed;

            this.vy =
                Math.sin(angle) *
                speed;

            this.life =
                1;

            this.decay =
                Math.random() *
                0.012 +
                0.009;

            this.gravity =
                0.045;

            this.friction =
                0.985;

            this.trail = [];

        }


        update() {

            this.trail.push({
                x: this.x,
                y: this.y
            });


            if (this.trail.length > 5) {
                this.trail.shift();
            }


            this.vx *=
                this.friction;

            this.vy *=
                this.friction;


            this.vy +=
                this.gravity;


            this.x +=
                this.vx;

            this.y +=
                this.vy;


            this.life -=
                this.decay;


            return this.life <= 0;

        }


        draw() {

            ctx.globalAlpha =
                Math.max(
                    this.life,
                    0
                );


            /* Particle trail */

            ctx.beginPath();

            for (
                let i = 0;
                i < this.trail.length;
                i++
            ) {

                const point =
                    this.trail[i];

                if (i === 0) {

                    ctx.moveTo(
                        point.x,
                        point.y
                    );

                } else {

                    ctx.lineTo(
                        point.x,
                        point.y
                    );

                }

            }


            ctx.strokeStyle =
                this.color;

            ctx.lineWidth =
                this.size * 0.7;

            ctx.stroke();


            /* Particle head */

            ctx.beginPath();

            ctx.arc(
                this.x,
                this.y,
                this.size,
                0,
                Math.PI * 2
            );


            ctx.fillStyle =
                this.color;

            ctx.shadowBlur =
                10;

            ctx.shadowColor =
                this.color;

            ctx.fill();

            ctx.shadowBlur =
                0;

        }

    }



    /* =====================================================
       CREATE EXPLOSION
    ===================================================== */

    function createExplosion(
        x,
        y,
        color
    ) {

        const particleCount =
            window.innerWidth < 600
                ? 65
                : 110;


        for (
            let i = 0;
            i < particleCount;
            i++
        ) {

            const angle =
                Math.random() *
                Math.PI *
                2;


            const speed =
                Math.random() *
                5.5 +
                1.5;


            const size =
                Math.random() *
                1.5 +
                0.7;


            particles.push(
                new Particle(
                    x,
                    y,
                    color,
                    angle,
                    speed,
                    size
                )
            );

        }

    }



    /* =====================================================
       CREATE ROCKET
    ===================================================== */

    function launchFirework(
        targetX,
        targetY
    ) {

        const startX =
            Math.random() *
            width;


        fireworks.push(
            new Rocket(
                startX,
                targetX,
                targetY
            )
        );

    }



    /* =====================================================
       RANDOM FIREWORK
    ===================================================== */

    function launchRandomFirework() {

        const targetX =
            width *
            (
                0.15 +
                Math.random() *
                0.70
            );


        const targetY =
            height *
            (
                0.12 +
                Math.random() *
                0.40
            );


        launchFirework(
            targetX,
            targetY
        );

    }



    /* =====================================================
       ANIMATION LOOP
    ===================================================== */

    function animate() {

        ctx.fillStyle =
            "rgba(3, 3, 8, 0.18)";


        ctx.fillRect(
            0,
            0,
            width,
            height
        );


        /* Rockets */

        for (
            let i = fireworks.length - 1;
            i >= 0;
            i--
        ) {

            const rocket =
                fireworks[i];


            const finished =
                rocket.update();


            rocket.draw();


            if (finished) {

                fireworks.splice(
                    i,
                    1
                );

            }

        }


        /* Particles */

        for (
            let i = particles.length - 1;
            i >= 0;
            i--
        ) {

            const particle =
                particles[i];


            const dead =
                particle.update();


            particle.draw();


            if (dead) {

                particles.splice(
                    i,
                    1
                );

            }

        }


        ctx.globalAlpha =
            1;


        if (
            fireworksRunning ||
            fireworks.length ||
            particles.length
        ) {

            animationFrame =
                requestAnimationFrame(
                    animate
                );

        } else {

            animationFrame =
                null;

        }

    }



    /* =====================================================
       START ENGINE
    ===================================================== */

    function startFireworks() {

        fireworksRunning =
            true;


        if (!animationFrame) {
            animate();
        }

    }



    /* =====================================================
       STOP ENGINE
    ===================================================== */

    function stopFireworks() {

        fireworksRunning =
            false;

    }



    /* =====================================================
       FIREWORK SHOW
    ===================================================== */

    function fireworkShow(
        count = 8,
        interval = 420
    ) {

        startFireworks();


        let launched = 0;


        const timer =
            setInterval(() => {

                launchRandomFirework();

                launched++;


                if (
                    launched >= count
                ) {

                    clearInterval(
                        timer
                    );

                    setTimeout(() => {

                        stopFireworks();

                    }, 5000);

                }

            }, interval);

    }



    /* =====================================================
       CONNECT CELEBRATE BUTTON
    ===================================================== */

    const celebrateBtn =
        document.getElementById(
            "celebrateBtn"
        );


    if (celebrateBtn) {

        celebrateBtn.addEventListener(
            "click",
            () => {

                fireworkShow(
                    6,
                    450
                );

            }
        );

    }



    /* =====================================================
       EXPOSE FOR FINAL PAGE
    ===================================================== */

    window.launchFirework =
        launchFirework;

    window.launchRandomFirework =
        launchRandomFirework;

    window.startFireworks =
        startFireworks;

    window.stopFireworks =
        stopFireworks;

    window.fireworkShow =
        fireworkShow;



    console.log(
        "🎆 Fireworks engine initialized."
    );

})();


