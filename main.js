const button = document.getElementById("no-button");
const song = document.getElementById("song");

button.addEventListener("mouseenter", function () {
  showMessage("No");
});

yesButton.addEventListener("click", function () {
  showMessage("Yes");
});

function showMessage(response) {
  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";

    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "Альо, ти що там задумала?";
    document.getElementById("name").style.display = "none";
  }

  if (response === "Yes") {
    document.getElementById("name").remove();
    document.getElementById("no-button").remove();

    const yesMessage = document.getElementById("question");
    yesMessage.innerHTML =
      "Ти моя бусінка 😘<br>Подарунок на тебе вже чекає!🤩";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/kiss.gif";

    document.getElementById("yesButton").remove();

    // Відтворення пісні тільки після натискання кнопки "Так"
    song.play();
  }
}
