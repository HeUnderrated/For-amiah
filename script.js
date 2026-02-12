let currentAudio = null;
const mainVideo = document.getElementById('main-video');

const letterContent = {
    homeNote: "Hi my love, I built this to show you how much you mean to me. I really hope you like ittt.",
    firstNote: "From the very first moment i saw you i wanted to know more about you and when we first spoke i knew i needed more you had this energy that made everything easy. I knew right then you were special.",
    wayNote: "I love how you care about things so deeply. You make me want to be a better person just by being around you. You carry so much weight and make it look like a feather your one of a kind.",
    knewNote: "I didnt need time to i knew very early that it was you. I was not just falling for you, I was already there.",
    changedNote: "You brought so much color into my world. I am more happy, more calm, and more me because of you. my whole world alligned and its all thanks to you.",
    promiseNote: "I promise to stay. Through the good days and the hard ones, I will always be right here choosing you. every step of the way its us.(p.s im still gonna give you the world :))",
    foreverNote: "Whatever comes next, I want to do it with you. Time feels endless.",
    badDay: "Take a deep breath. You are stronger than you feel right now. I love you and I am proud of everything you are."
};

function startExperience() {
    document.getElementById('enter-overlay').style.display = 'none';
    document.getElementById('main-nav').style.display = 'block';
    document.getElementById('main-content').style.display = 'block';
    openTab(null, 'home', 'music/home.mp3');
}

function openTab(evt, tabName, audioSrc) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].style.display = "none";
        tabContents[i].classList.remove("active");
    }
    const tabLinks = document.getElementsByClassName("tab-link");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].classList.remove("active");
    }
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.style.display = "block";
        setTimeout(() => { selectedTab.classList.add("active"); }, 50);
    }
    if (evt) { evt.currentTarget.classList.add("active"); } 
    else { document.querySelector('.tab-link').classList.add("active"); }

    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; }
    currentAudio = new Audio(audioSrc);
    currentAudio.loop = true;
    currentAudio.play().then(() => { document.getElementById('music-indicator').style.display = "block"; });
}

function openLetter(noteKey) {
    const modal = document.getElementById('note-modal');
    const modalText = document.getElementById('modal-text');
    modalText.innerText = letterContent[noteKey];
    modal.style.display = 'flex';
}

function toggleBadDay(show) {
    if (show) {
        openLetter('badDay');
        fadeVideoSource('music/note-video.mp4');
    }
}

function closeModal() {
    document.getElementById('note-modal').style.display = 'none';
    fadeVideoSource('music/home-video.mp4');
}

function fadeVideoSource(newSrc) {
    if (!mainVideo) return;
    mainVideo.style.opacity = 0;
    setTimeout(() => {
        mainVideo.src = newSrc;
        mainVideo.load();
        mainVideo.play();
        mainVideo.style.opacity = 1;
    }, 500);
}
