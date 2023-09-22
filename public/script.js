const title = document.querySelector("h1");
const canvas = document.getElementById("canvas");
const iframe = document.getElementById("iframe");
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
setTimeout(() => {
  setConfetti();
}, 500);
canvas.addEventListener("click", () => {
  setConfetti();
});
