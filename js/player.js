let audio = document.getElementById("audio");    // Беремо елемент audio
let time = document.querySelector(".time");      // Беремо аудіо доріжку
let btnPlay = document.querySelector(".play");   // Беремо кнопку програвання
let btnPause = document.querySelector(".pause"); // Беремо кнопку паузи
let btnPrev = document.querySelector(".prev");   // Беремо кнопку перемикання попереднього треку
let btnNext = document.querySelector(".next");   // Беремо кнопку перемикання наступного треку

// масив з піснями
let playlist = [
    'treck1.mp3',
    'treck2.mp3',
    'treck3.mp3',
    'treck4.mp3',
];

let treck; // змінна з індексом треку

// Подія перед загрузкою сторінки
window.onload = function () {
    treck = 0; // Присвоюєм змінній 0
}
function switchTreck(numTreck) {
    audio.src = "../maket/audio/" + playlist[numTreck];
    audio.currentTime = 0;
    audio.play();
}
btnPlay.addEventListener("click", function () {
    audio.play(); // Запуск пісні
    // Запуск інтервалу
    audioPlay = setInterval(function () {
        let audioTime = Math.round(audio.currentTime);
        let audioLength = Math.round(audio.duration);
        time.style.width = (audioTime * 100) / audioLength + '%';
        if (audioTime == audioLength && treck < 3) {
            treck++; 
            switchTreck(treck); 
        } else if (audioTime == audioLength && treck >= 3) {
            treck = 0; 
            switchTreck(treck); 
        }
    }, 10)
});
btnPause.addEventListener("click", function () {
    audio.pause(); 
    clearInterval(audioPlay) 
});
btnPrev.addEventListener("click", function() {
    if (treck > 0) {
        treck--; 
        switchTreck(treck); 
    } else { 
        treck = 3;
        switchTreck(treck); 
    }
});

btnNext.addEventListener("click", function() {
    if (treck < 3) {
        treck++; 
        switchTreck(treck); 
    } else { 
        treck = 0; 
        switchTreck(treck); 
    }
});