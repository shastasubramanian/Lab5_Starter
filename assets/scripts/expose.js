// expose.js
window.addEventListener('DOMContentLoaded', init);
function init() {
  // TODO
  const jsConfetti = new JSConfetti();
  var obj_select = document.getElementById("horn-select");
  var audio_select = document.querySelector(".hidden");
  obj_select.addEventListener('change', (event) => {
    let img_select = document.querySelector("#expose > img");
    let button = document.querySelector("button");
    if (obj_select.selectedIndex == 1){
      img_select.src = "assets/images/air-horn.svg";
      audio_select.src = "assets/audio/air-horn.mp3";
    }
    if (obj_select.selectedIndex == 2){
      img_select.src = "assets/images/car-horn.svg";
      audio_select.src = "assets/audio/car-horn.mp3";
    }
    if (obj_select.selectedIndex == 3){
      img_select.src = "assets/images/party-horn.svg";
      audio_select.src = "assets/audio/party-horn.mp3";
    }
    button.addEventListener('click',(event) => {
      if(obj_select.selectedIndex==3){
        jsConfetti.addConfetti();
      }
      audio_select.play();
    });
  });
  let volinput = document.getElementById("volume");
  volinput.addEventListener('change', function() {
    let soundIcon = document.querySelectorAll('img')[1];
    let soundValue = volinput.value;
    audio_select.volume = soundValue/100;
    if(soundValue == 0){
      soundIcon.src="assets/icons/volume-level-0.svg";
    }
    else if(soundValue >= 1 && soundValue < 33){
      soundIcon.src="assets/icons/volume-level-1.svg";
    }
    else if(soundValue >= 33 && soundValue < 67){
      soundIcon.src="assets/icons/volume-level-2.svg";
      }
    else{
      soundIcon.src="assets/icons/volume-level-3.svg";
    }
  });
}