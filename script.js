document.addEventListener('DOMContentLoaded', function() {
  const audioButtons = document.querySelectorAll('.audio-button');
  const audioPlayer = document.getElementById('audioPlayer');

  audioButtons.forEach(button => {
    button.addEventListener('click', function() {
      const soundFile = this.dataset.sound;
      audioPlayer.src = soundFile;
      audioPlayer.play();
    });
  });
});
