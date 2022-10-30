// expose.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  var obj_select = document.getElementById("horn-select");
  obj_select.addEventListener('change', (event) => {
    let audio_select = document.querySelector(".hidden");
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
    let volinput = document.querySelector("#volume");
    volinput.addEventListener('input',(event) => {
      alert(audio_select.volume);
    });
    button.addEventListener('click',(event) => {
      if (obj_select.selectedIndex == 3){
        const jsConfetti = new jsConfetti()
        jsConfetti.addConfetti()
      }
      audio_select.play();
    });
  });
}