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

// ============== DEFAULT SONG
let songIndex = 0;

// ============== LOAD TRACK
const loadSong = (song) => {
  songName.innerHTML = song.slice(3);
  audio.src = `assets/audio/${song}.mp3`;
};

loadSong(songs[songIndex]);

// ============== PLAY
const playTrack = () => {
  player.classList.add("play");
  playIcon.src = "./assets/img/pause.svg";
  audio.play();
};

// ============== PAUSE
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

// ============== NEXT
const nextTrack = () => {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  playTrack();
};

nextBtn.addEventListener("click", nextTrack);

// ============== PREV
const prevTrack = () => {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  loadSong(songs[songIndex]);
  playTrack();
};

prevBtn.addEventListener("click", prevTrack);

// ============== PROGRESS
const updateProgress = (e) => {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
};

audio.addEventListener("timeupdate", updateProgress);

// ============== SET PROGRESS
function setProgress(e) {
  const width = this.clientWidth;
  const clickPosition = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickPosition / width) * duration;

  console.log(duration);
}

progressContainer.addEventListener("click", setProgress);

// ============== AUTOPLAY
audio.addEventListener("ended", nextTrack);
