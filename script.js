//your JS code here. If required.
window.addEventListener("keydown", function(event) {
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  if (!key) return; // Exit the function if no key element found for the pressed key
  playSound(key);
});

function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
  if (!audio) return; // Exit the function if no audio element found for the key
  audio.currentTime = 0; // Rewind to the start
  audio.play();
  key.classList.add("playing");
}

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(function(key) {
  key.addEventListener("transitionend", removePlayingClass);
});

function removePlayingClass(event) {
  if (event.propertyName !== "transform") return; // Skip if the transition does not apply to transform
  this.classList.remove("playing");
}
