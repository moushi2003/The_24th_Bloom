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
