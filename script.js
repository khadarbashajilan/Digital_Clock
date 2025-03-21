let h = document.getElementById('hrs');
let m = document.getElementById('mins');
let s = document.getElementById('secs');
let aud = document.getElementsByTagName("audio")[0];
let vol = document.getElementById('vol');

aud.volume = 0.0; // Start with muted audio

if (window.innerWidth < 932) {
    alert("Your screen size is too small for the best experience!");
}

// Fix autoplay: Play audio on first user interaction
document.addEventListener("click", () => {
    aud.muted = false;
    aud.volume = 1.0;
    aud.play().catch(err => console.warn("Autoplay blocked:", err));
}, { once: true }); // Runs only once

// Fix volume toggle button
vol.addEventListener("click", () => {
    aud.muted = !aud.muted; // Toggle mute
    aud.volume = aud.muted ? 0.0 : 1.0; // Adjust volume

    vol.classList.toggle("fa-volume-up");
    vol.classList.toggle("fa-volume-mute");
});

setInterval(() => {
const now = new Date();
let hrs = now.getHours().toString().padStart(2, '0');
let mins = now.getMinutes().toString().padStart(2, '0');    
let secs = now.getSeconds().toString().padStart(2, '0');
h.innerText = hrs;
m.innerText = mins; 
s.innerText = secs;
}
,1000);

