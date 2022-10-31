// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  console.log("Starting");
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();
  var voices = synth.getVoices();
  console.log(voices.length);
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;
  msg.text = "Hello, my name is Shasta";
  msg.voiceURI = "Alex";
  msg.lang = "en-US";
  
  let button = document.querySelector("button");
  const input = document.querySelector('input');
  button.addEventListener('click',(event) => {
    msg.text = "text-to-speak";
    speechSynthesis.speak(msg);
  });
};


