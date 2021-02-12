const animeTest = () => {
    (function () {
        const ball = document.querySelector('.ball');
        const hole = document.querySelector('.hole');
        const guess = document.querySelector('.distance-supplied');
        const puttButton = document.querySelector('.putt-button');
        const restartButton = document.querySelector('.try-again');
        let holeAdjustment =0;
        let distance = 0;
        let holePos = 0;

        const init = () => {
            ball.style.cssText = 'left:100px;';
            guess.value = '';
            holeAdjustment = Math.round((Math.random() * 200));
            hole.style.cssText = `left:${600 + holeAdjustment}px`;
            holePos = 600 + holeAdjustment;
        }

        init();

        guess.addEventListener('change', () => {
            loadAnime(guess.value, holePos);
        });

        const loadAnime = (distance, holePos) => {
            const putt = anime({
                autoplay: false,
                duration: 1500,
                easing: 'easeInOutQuad',
                targets: '.ball',
                translateX: parseInt(distance * 10),
                complete: () => {
                    if (parseInt((distance * 10) + 110) >= (holePos - 10) && parseInt((distance * 10) + 110) <= (holePos + 10)) {
                        console.log('hole in one!');
                        anime({
                            duration: 150,
                            easing: 'linear',
                            targets: '.ball',
                            scale: 0.6
                        });
                    }
                }
            });

            puttButton.onclick = putt.play;
            restartButton.addEventListener('click', () => {
                init();
            });
        }
    })();
};

animeTest();
