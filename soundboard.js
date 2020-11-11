/*
var hiHat = document.getElementById('hh')
var hhAudio = document.getElementById('hiHatAudio')
function playHH() {
    hhAudio.play();
}
hiHat.addEventListener('click', function () {
    playHH();
  });



  <button class="drumpad" id="hh" onmousedown="hiHatSound.play()">Hi-Hat</button>
    <button class="drumpad" id="snare" onmousedown="snareSound.play()">Snare</button>
    <button class="drumpad" id="kick" onmousedown="kickSound.play()">Kick Drum</button>
    <button class="drumpad" id="cc" onmousedown="crashSound.play()">Crash Cymbal</button>
    <button class="drumpad" id="ht" onmousedown="highTomSound.play()">High Tom</button>
    <button class="drumpad" id="lt" onmousedown="lowTomSound.play()">Low Tom</button>
  */

var hiHatSound = new Audio();
hiHatSound.src = "HiHat.wav";
var crashSound = new Audio();
crashSound.src = "Crash.wav";
var kickSound = new Audio();
kickSound.src = "Kick.wav";
var snareSound = new Audio();
snareSound.src = "Snare.wav";
var lowTomSound = new Audio();
lowTomSound.src = "TomMid.wav";
var highTomSound = new Audio();
highTomSound.src = "TomHigh.wav";


var hiHat = document.getElementById('hh')
function playHH() {
    hiHatSound.play();
}
hiHat.addEventListener('click', function () {
    playHH();
  });


var crash = document.getElementById('cc')
function playCC() {
    crashSound.play();
}
crash.addEventListener('click', function () {
    playCC();
  });



var kickDrum = document.getElementById('kick')
function playKick() {
    kickSound.play();
}
kickDrum.addEventListener('click', function () {
    playKick();
  });



var lowT = document.getElementById('lt')
function playLT() {
    lowTomSound.play();
}
lowT.addEventListener('click', function () {
    playLT();
  });




var highT = document.getElementById('ht')
function playHT() {
    highTomSound.play();
}
highT.addEventListener('click', function () {
    playHT();
  });



var SD = document.getElementById('snare')
function playSnare() {
    snareSound.play();
}
SD.addEventListener('click', function () {
    playSnare();
  });
