document.getElementById('audio-button-1').onclick = function() {
    playSound('1-modulated_親嘴不要臉.wav');
};

document.getElementById('audio-button-2').onclick = function() {
    playSound('2-modulated_親嘴不要臉.wav');
};

document.getElementById('audio-button-3').onclick = function() {
    playSound('3-modulated_親嘴不要臉.wav');
};

document.getElementById('audio-button-4').onclick = function() {
    playSound('4-modulated_親嘴不要臉.wav');
};

document.getElementById('audio-button-5').onclick = function() {
    playSound('5-modulated_親嘴不要臉.wav');
};

document.getElementById('audio-button-6').onclick = function() {
    playSound('6-modulated_親嘴不要臉.wav');
};

function playSound(soundFile) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = soundFile;
    audioPlayer.play();
}