let key1 = new Audio('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electronic%20Jazz%20Kit/66[kb]CYMBAL03.aif.mp3');

let key2 = new Audio('https://sampleswap.org/samples-ghost/DRUMS%20(FULL%20KITS)/STYLE%20KITS%20(Hip%20Hop,%20Etc)/Electronic%20Jazz%20Kit/6[kb]STICK.aif.mp3');

let key3 = new Audio('https://sampleswap.org/samples-ghost/MELODIC%20LOOPS/KEYS%20ORGAN%20PIANO%20LOOPS/919[kb]090_hard-high-piano-arpeggio.wav.mp3');


var audio1;


function removeTransition(e) {

    if (e.propertyName !== 'transform') return;

    e.target.classList.remove('playing');

}

function playSound(e) {

    const audio = document.querySelector(`audio[data-key="${e.key}"]`);

    const key = document.querySelector(`div[data-key="${e.key}"]`);

    if (!audio) return;

    key.classList.add('playing');

    audio.currentTime = 0;

    audio.play();

}

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playSound);

let record1 = document.getElementById('RECORD1');

let record2 = document.getElementById('RECORD2');

let record3 = document.getElementById('RECORD3');

let record4 = document.getElementById('RECORD4');

let stop1 = document.getElementById('STOP1');

let stop2 = document.getElementById('STOP2');

let stop3 = document.getElementById('STOP3');

let stop4 = document.getElementById('STOP4');

let play1 = document.getElementById('PLAY1');

let play2 = document.getElementById('PLAY2');

let play3 = document.getElementById('PLAY3');

let play4 = document.getElementById('PLAY4');





record1.addEventListener('click', function () {

    navigator.mediaDevices.getUserMedia({ audio: true })

        .then(stream => {

            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener('dataavailable', (event) => {

                audioChunks.push(event.data);

            });

			var audio;


			mediaRecorder.addEventListener('stop', () => {

                const audioBlob = new Blob(audioChunks);

                const audioUrl = URL.createObjectURL(audioBlob);

                audio = new Audio(audioUrl);

			});

			stop1.addEventListener('click', () => {

				mediaRecorder.stop();

			});


            play1.addEventListener('click', () => {

                audio.play();

			});



        });


});

record2.addEventListener('click', function () {

    navigator.mediaDevices.getUserMedia({ audio: true })

        .then(stream => {

            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener('dataavailable', (event) => {

                audioChunks.push(event.data);

            });

			var audio;


			mediaRecorder.addEventListener('stop', () => {

                const audioBlob = new Blob(audioChunks);

                const audioUrl = URL.createObjectURL(audioBlob);

                audio = new Audio(audioUrl);

			});

			stop2.addEventListener('click', () => {

				mediaRecorder.stop();

			});


            play2.addEventListener('click', () => {

                audio.play();

			});



        });


});

record3.addEventListener('click', function () {

    navigator.mediaDevices.getUserMedia({ audio: true })

        .then(stream => {

            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener('dataavailable', (event) => {

                audioChunks.push(event.data);

            });

			var audio;


			mediaRecorder.addEventListener('stop', () => {

                const audioBlob = new Blob(audioChunks);

                const audioUrl = URL.createObjectURL(audioBlob);

                audio = new Audio(audioUrl);

			});

			stop3.addEventListener('click', () => {

				mediaRecorder.stop();

			});


            play3.addEventListener('click', () => {

                audio.play();

			});



        });


});

record4.addEventListener('click', function () {

    navigator.mediaDevices.getUserMedia({ audio: true })

        .then(stream => {

            mediaRecorder = new MediaRecorder(stream);

            mediaRecorder.start();

            const audioChunks = [];

            mediaRecorder.addEventListener('dataavailable', (event) => {

                audioChunks.push(event.data);

            });

			var audio;


			mediaRecorder.addEventListener('stop', () => {

                const audioBlob = new Blob(audioChunks);

                const audioUrl = URL.createObjectURL(audioBlob);

                audio = new Audio(audioUrl);

			});

			stop4.addEventListener('click', () => {

				mediaRecorder.stop();

			});


            play4.addEventListener('click', () => {

                audio.play();

			});



        });


});



				

