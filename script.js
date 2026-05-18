function playSound(imgElement) {
  var soundSrc = imgElement.getAttribute('data-audio');
  var sound = new Audio(soundSrc);
  sound.play();
}



var hasInteracted = localStorage.getItem('hasInteracted');

if (hasInteracted) {
  // They've been here before — safe to autoplay
  window.addEventListener('load', function () {
    document.getElementById('page-sound').play();
  });

} else {
  // First ever visit — wait for a click, then play and set the flag
  document.addEventListener('click', function playOnFirstInteraction() {
    document.getElementById('page-sound').play();

    // Save the flag so future page loads know to autoplay
    localStorage.setItem('hasInteracted', 'true');

    document.removeEventListener('click', playOnFirstInteraction);
  }, { once: true });
}