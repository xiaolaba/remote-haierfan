document.getElementById('audio-button-1').onclick = function() {
    playSound('1.wav');
};

document.getElementById('audio-button-2').onclick = function() {
    playSound('2.wav');
};

document.getElementById('audio-button-3').onclick = function() {
    playSound('3.wav');
};

document.getElementById('audio-button-4').onclick = function() {
    playSound('4.wav');
};

document.getElementById('audio-button-5').onclick = function() {
    playSound('5.wav');
};

document.getElementById('audio-button-6').onclick = function() {
    playSound('6.wav');
};

function playSound(soundFile) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = soundFile;
    audioPlayer.play();
}