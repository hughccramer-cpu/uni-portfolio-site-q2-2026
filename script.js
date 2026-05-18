function playSound(imgElement) {
  var soundSrc = imgElement.getAttribute('data-audio');
  var sound = new Audio(soundSrc);
  sound.play();
}
