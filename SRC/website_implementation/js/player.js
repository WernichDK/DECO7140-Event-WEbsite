let now_playing = document.querySelector(".now-playing");
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
        image: "https://i1.sndcdn.com/artworks-7bUCaUcV2PA968Qy-NiI6yw-t500x500.jpg",
        path: "BFE.mp3",

    },
    {
        name: "Picanya 2400",
        artist: "Kettama",
        image: "https://i1.sndcdn.com/artworks-NErejjcY58iDngGo-mdYtRg-t500x500.jpg",
        path: "Picanya 2400.mp3",
    },
    {
        name: "Care 4 U",
        artist: "Sam Alfred",
        image: "https://i1.sndcdn.com/artworks-Q9yTxBkEKTGU-0-t500x500.jpg",
        path: "Care 4 U.mp3",
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
    now_playing.textContent = "PLAYING" + (songindex + 1) + " OF " + song_list.length;

    //setting 1 second timer to update the seek slider
    updateTimer = setInterval(seekUpdate, 1000)

    //start playing next song when current song ends
    currsong.addEventListener("ended", nextTrack);

  
}

function resetValues() {
    currtime.textContent = "00:00";
    totduration.textContent = "00:00";
    seekslider = "0";
}