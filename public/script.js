const title = document.querySelector("h1");
const canvas = document.getElementById("canvas");
const iframe = document.getElementById("iframe");
const button = document.querySelector("#button-section button");
const mainSection = document.querySelector("#main-section");
const buttonSection = document.querySelector("#button-section");
const audio = document.querySelector("audio");
const jsConfetti = new JSConfetti({ canvas });
const setConfetti = () => {
  jsConfetti.addConfetti({
    emojis: ["🎉", "🥳", "🍾", "🎊", "🎈", "🎁", "🪅", "🪩"],
  });
};

let nomes = "Salache e Gabrieh";
const titleText = "Parabéns " + nomes;

function setTitle() {
  title.innerText = titleText;
}

setTitle();
// setTimeout(() => {
//   setConfetti();
// }, 500);
canvas.addEventListener("click", () => {
  setConfetti();
});

button.addEventListener("click", () => {
  buttonSection.classList.add("hidden");
  mainSection.classList.remove("hidden");
  setConfetti()
  setInterval(setConfetti, 2500)
  audio.volume = 0.2
  audio.play()
  audio.loop = true
});
