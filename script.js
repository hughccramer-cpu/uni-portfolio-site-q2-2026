// script.js - Handles navigation clicks and audio playback

// script.js - Handles audio playback for content images only

const rustleAudio = document.getElementById('rustle-audio'); // Find the audio element in the page with id "rustle-audio"
const contentArea = document.querySelector('main'); // Find the first <main> element in the page to listen for clicks there

// Play a specific audio file for the clicked content image
function playContentAudio(audioFile) {
    if (!audioFile) {
        return; // If there is no audio file path, stop and do nothing
    }
    const contentAudio = new Audio(audioFile); // Create a separate audio object for content sounds
    contentAudio.currentTime = 0; // Reset playback to the start of the audio file
    contentAudio.play(); // Start playing the audio
}

// Play the rustle sound and delay navigation so the sound can be heard
function playRustleThenNavigate(event) {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return; // Allow middle-click, ctrl-click, shift-click, etc. to work normally
    }

    event.preventDefault();
    const link = event.currentTarget;
    const href = link.getAttribute('href');
    if (!href) {
        return;
    }

    rustleAudio.currentTime = 0; // Reset rustle sound to the beginning
    const navigate = () => {
        window.location.href = href;
    };

    rustleAudio.play().catch(() => {
        // If playback is blocked, still navigate immediately
        navigate();
    });

    rustleAudio.addEventListener('ended', navigate, { once: true });
    setTimeout(navigate, 250); // Fallback navigation if audio doesn't end cleanly
}

// Handle clicks on content images using event delegation
contentArea.addEventListener('click', event => {
    const target = event.target; // The actual element that was clicked
    if (target.matches('.clickable-image')) { // Check if that element has the class "clickable-image"
        const audioFile = target.getAttribute('data-audio'); // Read the audio file path stored in the element
        playContentAudio(audioFile); // Play the audio file for the clicked image
    }
});

// Handle navigation clicks so rustle audio plays before the page changes
const navLinks = document.querySelectorAll('aside nav a');
navLinks.forEach(link => {
    link.addEventListener('click', playRustleThenNavigate);
});