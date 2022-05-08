"use strict";
const Speech = {
  canvas: undefined,
  ctx: undefined,

  text: {
    x: 400,
    y: 50,
    size: 20,
    color: "blue",
    offset: 30,
    words: ["apple", "banana", "grape", "lemon", "orange"],
    about: "Aysenur Davulcu 2022" ,
    help:
    "Say a name of the object on the screen. Say 'About', to hear about the program.",
    default: "Say a name of a fruit on the screen..",
  },
};
const start = () => {
  Speech.canvas = document.getElementById("canvas");
  Speech.ctx = Speech.canvas.getContext("2d");
  execute();
};

document.addEventListener("DOMContentLoaded", start);
const execute = () => {
  updateButton();
  drawText(Speech.text);
};
const updateButton = () => {
  const button = document.getElementById("speak");
  button.onclick = () => {
    if (button.innerText === "Speak") {
      button.innerText = "Stop";
      recognition.start();
    } else {
      button.innerText = "Speak";
      recognition.abort();
    }
  };
};
const drawText = (text) => {
  Speech.ctx.clearRect(0, 0, canvas.width, canvas.height);
  Speech.ctx.font = `${text.size}px ${text.font}`;
  Speech.ctx.fillStyle = text.color;
  for (let i = 0; i < text.words.length; i++) {
    Speech.ctx.fillText(text.words[i], text.x, text.y + text.offset * i);
  }
};
const drawSubject = (subject) => {
  Speech.ctx.clearRect(0, 0, canvas.width, canvas.height);
  Speech.ctx.fillText(subject, Speech.text.x, Speech.text.y + 200);
};

const recognition = new webkitSpeechRecognition();
recognition.continuous = false;
recognition.onspeechend = () => {
  recognition.stop();
  const button = document.getElementById("speak");
  button.innerText = "Speak";
};
recognition.onresult = (event) => {
  const result = String(event.results[0][0].transcript);

  if (result === "help") {
    speak(Speech.text.help);
  } else if (result === "about") {
    speak(Speech.text.about);
  } else if (Speech.text.words.indexOf(result.toLowerCase()) !== -1) {
    speak(result);
    drawSubject(result);
  } else {
    speak(Speech.text.default);
    drawText(Speech.text);
  }
};
const speak = (text) => {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
};