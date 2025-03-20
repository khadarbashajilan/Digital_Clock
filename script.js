let h = document.getElementById('hrs');
let m = document.getElementById('mins');
let s = document.getElementById('secs');
let aud = document.getElementsByTagName("audio")[0];
let vol = document.getElementById('vol');

if (window.innerWidth < 932) {
    alert("Your screen size is too small for the best experience!");
    console.prompt("Please use a device with a screen width of at least 932px for the best experience.");
}

vol.addEventListener('click', () => {
    aud.volume=aud.volume ===0?1:0;
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


aud.currentTime = 2; // Set playback position to 2 seconds
aud.play(); // Play audio from the new position
aud.volume=1;
