// The following JavaScript was implement as per a guide from https://www.geeksforgeeks.org/create-a-music-player-using-javascript/
let album_cover = document.querySelector(".albumcov");
let song_name = document.querySelector(".sname");
let artist_name = document.querySelector(".aname");

let pausebtn = document.querySelector(".pause");
let nextbtn = document.querySelector(".nextson");
let prevbtn = document.querySelector(".prevson");

let seekslider = document.querySelector(".seek-slid");
let volumeslider = document.querySelector(".volume-slid");
let currtime = document.querySelector(".time");
let totduration = document.querySelector(".totduration");

let songindex = 0;
let isPlaying = false;
let updateTimer;

let currsong = document.createElement('audio');

let song_list = [
    {
        name: "BFE",
        artist: "Janis Zelinsky",
        image: "media/bfe.jpg",
        path: "media/BFE.mp3",

    },
    {
        name: "Picanya 2400",
        artist: "Kettama",
        image: "media/picanya.jpg",
        path: "media/Picanya 2400.mp3",
    },
    {
        name: "Care 4 U",
        artist: "Sam Alfred",
        image: "media/c4u.jpg",
        path: "media/Care 4 U.mp3",
    },
    {
        name: "System",
        artist: "Salute",
        image: "media/system.jpg",
        path: "media/System.mp3",
    },
    {
        name: "Hit Ya Like That",
        artist: "DJ STREETMODE",
        image: "media/hylt.jpg",
        path: "media/hylt.mp3",
    },
    {
        name: "Heartbreak Repair System",
        artist: "DJ Heartsring",
        image: "media/hbrs.jpg",
        path: "media/hbrs.mp3",
    },
    {
        name: "HYDROPLANE",
        artist: "Cochise",
        image: "media/hp.jpg",
        path: "media/hp.mp3",
    },
    {
        name: "PROTEIN/CREATINE",
        artist: "Cochise",
        image: "media/pc.jpg",
        path: "media/pc.mp3",
    },
    {
        name: "TRUE STORY",
        artist: "CRUSH3D",
        image: "media/ts.jpg",
        path: "media/ts.mp3",
    },
    {
        name: "These Streets Look Dangerous",
        artist: "X-Club",
        image: "media/HTJ.jpg",
        path: "media/HTJ.mp3",
    },
    {
        name: "Flashback",
        artist: "Benjamin",
        image: "media/flashback.jpg",
        path: "media/flashback.mp3",
    },
];

function loadSong(songindex) {
    //clear previous timer
    clearInterval(updateTimer);
    resetValues();   

    // load new song
    currsong.src = song_list[songindex].path;
    currsong.load();

    //update artist name and other details
    album_cover.style.backgroundImage = "url(" + song_list[songindex].image + ")";
    song_name.textContent = song_list[songindex].name;
    artist_name.textContent = song_list[songindex].artist;
    

    //setting 1 second timer to update the seek slider
    updateTimer = setInterval(seekUpdate, 1000)

    //start playing next song when current song ends
    currsong.addEventListener("ended", nextSong);

  
}

function resetValues() {
    currtime.textContent = "00:00";
    totduration.textContent = "00:00";
    seekslider.value = 0;
}

function playpauseSong() {
    //switch between paused and playing
    if (!isPlaying) {
        playSong();
    }
    else {
        pauseSong();
    }
}

function playSong() {
    currsong.play();
    isPlaying = true;

    //replace icon with pause icon
    pausebtn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseSong() {
    currsong.pause();
    isPlaying = false;

    //replace icon with play icon
    pausebtn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}

function nextSong() {
    if (songindex < song_list.length - 1)
        songindex += 1;
    else songindex = 0;

    //load and play next song
    loadSong(songindex);
    playSong();
}

function prevSong() {
    if (songindex > 0)
        songindex -= 1;
    else songindex = song_list.length - 1;

    loadSong(songindex);
    playSong();
}

function seekTo() {
    seekto = currsong.duration * (seekslider.value / 100);

    currsong.currentTime = seekto;
}

function setVolume() {
    currsong.volume = volumeslider.value / 100;
}

function seekUpdate() {
    let seekPosition = 0;

    if (!isNaN(currsong.duration)) {
        seekPosition = currsong.currentTime * (100 / currsong.duration);
        seekslider.value = seekPosition;

        let currentMinutes = Math.floor(currsong.currentTime / 60);
        let currentSeconds = Math.floor(currsong.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(currsong.duration / 60);
        let durationSeconds = Math.floor(currsong.duration - durationMinutes * 60);

        if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
        if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
        if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        currtime.textContent = currentMinutes + ":" + currentSeconds;
        totduration.textContent = durationMinutes + ":" + durationSeconds;
    }
}



loadSong(songindex);
