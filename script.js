// DOM Elements
const views = {
    home: document.getElementById('view-home'),
    search: document.getElementById('view-search'),
    library: document.getElementById('view-library')
};

const navLinks = document.querySelectorAll('.nav-links li');
const playerIframe = document.getElementById('spotify-player');
const greetingElement = document.getElementById('greeting');
const searchInput = document.getElementById('search-input');

// Navigation Logic
navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        // Add active class to clicked link
        link.classList.add('active');

        // Hide all views
        Object.values(views).forEach(view => view.classList.add('hidden'));

        // Show corresponding view
        if(index === 0) views.home.classList.remove('hidden');
        if(index === 1) views.search.classList.remove('hidden');
        if(index === 2) views.library.classList.remove('hidden');
    });
});

// Dynamic Greeting
const currentHour = new Date().getHours();
let greetingText = 'Good Morning';
if(currentHour >= 12 && currentHour < 17) greetingText = 'Good Afternoon';
else if(currentHour >= 17) greetingText = 'Good Evening';

if(greetingElement) {
    greetingElement.innerText = greetingText;
}

// Playlist Switching Logic
window.playPlaylist = function(playlistId) {
    // 1. Switch embed source
    const newSrc = `https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator`;
    playerIframe.src = newSrc;

    // 2. Automatically navigate back to Home if not there
    if(views.home.classList.contains('hidden')) {
        navLinks.forEach(l => l.classList.remove('active'));
        navLinks[0].classList.add('active'); // Highlight Home
        Object.values(views).forEach(view => view.classList.add('hidden'));
        views.home.classList.remove('hidden');
    }

    // 3. Scroll to top to see player
    document.querySelector('.main-content').scrollTop = 0;
};

// Search Filter Simulation
if(searchInput) {
    searchInput.addEventListener('keyup', (e) => {
        const val = e.target.value.toLowerCase();
        // Here we could filter the genre cards if they had text content
        // For now, it's a visual placeholder for "All Functionalities"
        console.log("Searching for:", val);
    });
}

// Install App Button
document.querySelector('.install-app').addEventListener('click', () => {
    alert("This feature simulates a PWA installation prompt!");
});