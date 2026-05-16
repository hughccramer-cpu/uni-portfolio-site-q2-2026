// script.js - Handles navigation clicks and audio playback

// script.js - Handles audio playback for content images only

const rustleAudio = document.getElementById('rustle-audio'); // Find the audio element in the page with id "rustle-audio"
const contentArea = document.querySelector('main'); // Find the first <main> element in the page to listen for clicks there

// Play a specific audio file for the clicked content image
function playContentAudio(audioFile) {
    if (!audioFile) {
        return; // If there is no audio file path, stop and do nothing
    }
    rustleAudio.src = audioFile; // Set the audio element's source to the chosen audio file
    rustleAudio.currentTime = 0; // Reset playback to the start of the audio file
    rustleAudio.play(); // Start playing the audio
}

// Handle clicks on content images using event delegation
contentArea.addEventListener('click', event => {
    const target = event.target; // The actual element that was clicked
    if (target.matches('.clickable-image')) { // Check if that element has the class "clickable-image"
        const audioFile = target.getAttribute('data-audio'); // Read the audio file path stored in the element
        playContentAudio(audioFile); // Play the audio file for the clicked image
    }
});

// Create overlay spans for navigation images using each image's alt text
// Overlay spans are added directly in the HTML now; no JS injection needed.