let key1 = new Audio('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electronic%20Jazz%20Kit/66[kb]CYMBAL03.aif.mp3');

let key2 = new Audio('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electronic%20Jazz%20Kit/6[kb]STICK.aif.mp3');

let key3 = new Audio('https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/919[kb]090_hard-high-piano-arpeggio.wav.mp3');



function removeTransition(e) {

    if (e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');

}

function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

    if (!audio) return;

    key.classList.add('playing');

    audio.currentTime = 0;

    audio.play();

}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);




record1.addEventListener(`click`, function () {

    navigator.mediaDevices.getUserMedia({ audio: true })

        .then(stream => {

            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener(`dataavailable`, (event) => {

                audioChunks.push(event.data);

            });




            mediaRecorder.addEventListener(`stop`, () => {



                const audioBlob = new Blob(audioChunks);

                const audioUrl = URL.createObjectURL(audioBlob);

                const audio = new Audio(audioUrl);



                play1.addEventListener(`click`, function () {

                    audio.play();



                });

            });




            stop1.addEventListener(`click`, () => {

                mediaRecorder.stop();

            })



        });



});

record2.addEventListener(`click`, function () {

    navigator.mediaDevices.getUserMedia({ audio: true })

        .then(stream => {

            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener(`dataavailable`, (event) => {

                audioChunks.push(event.data);

            });




            mediaRecorder.addEventListener(`stop`, () => {



                const audioBlob = new Blob(audioChunks);

                const audioUrl = URL.createObjectURL(audioBlob);

                const audio = new Audio(audioUrl);



                play2.addEventListener(`click`, function () {

                    audio.play();



                });

            });




            stop2.addEventListener(`click`, () => {

                mediaRecorder.stop();

            })



        });



});
record3.addEventListener(`click`, function () {

    navigator.mediaDevices.getUserMedia({ audio: true })

        .then(stream => {

            const mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener(`dataavailable`, (event) => {

                audioChunks.push(event.data);

            });




            mediaRecorder.addEventListener(`stop`, () => {



                const audioBlob = new Blob(audioChunks);

                const audioUrl = URL.createObjectURL(audioBlob);

                const audio = new Audio(audioUrl);



                play3.addEventListener(`click`, function () {

                    audio.play();



                });

            });




            stop3.addEventListener(`click`, () => {

                mediaRecorder.stop();

            })



        });



});
