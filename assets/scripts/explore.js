// explore.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  console.log("Starting");
  const synth = window.speechSynthesis;
  const msg = new SpeechSynthesisUtterance();
  const voiceSelect = document.querySelector('select');
  let voices = [];
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length ; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  var voice_select = document.getElementById("voice-select");
  voiceSelect.addEventListener("change",(event)=>{
    msg.voiceURI = voiceSelect.options[voiceSelect.selectedIndex].getAttribute("data-name");
    msg.lang = voiceSelect.options[voiceSelect.selectedIndex].getAttribute("data-lang");
  }); 
  msg.volume = 1;
  msg.rate = 1;
  msg.pitch = 1;
  let text = document.querySelector("#text-to-speak");
  let button = document.querySelector("button");
  text.addEventListener('input', updateValue);
  const input = document.querySelector('input');
  button.addEventListener('click',(event) => {
    msg.text = text.value;
    openFace();
    speechSynthesis.speak(msg);
    msg.addEventListener('end', (event)=>{
      closeFace();
    });
  });
};
function updateValue(e) {
  console.log(e.target.value);
}
function openFace(){
  let img_select = document.querySelector("#explore > img");
  img_select.src = "assets/images/smiling-open.png";
}
function closeFace(){
  let img_select = document.querySelector("#explore > img");
  img_select.src = "assets/images/smiling.png";
}