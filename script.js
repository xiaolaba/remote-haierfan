function playAudio(audioId) {
  var audio = document.getElementById(audioId);
  audio.play();
  // JavaScript to display information
  alert("button is clicked");

// Remove the information div after a few seconds
setTimeout(function() {
  var infoDiv = document.getElementById('info');
  infoDiv.parentNode.removeChild(infoDiv);
}, 5000); // 5000 milliseconds = 5 seconds

}

