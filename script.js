// script.js - Handles navigation clicks and audio playback

// script.js - Handles audio playback for content images only

const rustleAudio = document.getElementById('rustle-audio');
const contentArea = document.querySelector('main');

// Play a specific audio file for the clicked content image
function playContentAudio(audioFile) {
    if (!audioFile) {
        return;
    }
    rustleAudio.src = audioFile;
    rustleAudio.currentTime = 0;
    rustleAudio.play();
}

// Handle clicks on content images using event delegation
contentArea.addEventListener('click', event => {
    const target = event.target;
    if (target.matches('.clickable-image')) {
        const audioFile = target.getAttribute('data-audio');
        playContentAudio(audioFile);
    }
});