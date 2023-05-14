"use strict";

const player = document.querySelector(".player"),
  playBtn = document.querySelector(".play"),
  prevBtn = document.querySelector(".prev"),
  nextBtn = document.querySelector(".next"),
  audio = document.querySelector(".audio"),
  progressContainer = document.querySelector(".progress__container"),
  progress = document.querySelector(".progress"),
  songName = document.querySelector(".song"),
  cover = document.querySelector(".cover"),
  playIcon = document.querySelector(".play-pause");

const songs = ["01 Cycle", "02 Morning", "03 Heart Is a Drum"];

// ============== Default song
let songIndex = 0;

// ============== Init
const loadSong = (song) => {
  songName.innerHTML = song.slice(3);
  audio.src = `assets/audio/${song}.mp3`;
};

loadSong(songs[songIndex]);

// ============== Play
const playTrack = () => {
  player.classList.add("play");
  playIcon.src = "./assets/img/pause.svg";
  audio.play();
};

// ============== Pause
const pauseTrack = () => {
  player.classList.remove("play");
  playIcon.src = "./assets/img/play.svg";
  audio.pause();
};

playBtn.addEventListener("click", () => {
  if (!player.classList.contains("play")) {
    playTrack();
  } else {
    pauseTrack();
  }
});

// ============== Next
const nextTrack = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playTrack();
};

nextBtn.addEventListener("click", nextTrack);

// ============== Prev
const prevTrack = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playTrack();
};

prevBtn.addEventListener("click", prevTrack);
