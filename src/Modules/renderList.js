import url from "./ScoreURL.js";

const getScore = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const result = await data.result;
  return result;
};

const handleRefesh = async () => {
  const scoreBoard = document.querySelector("#scoreList");
  scoreBoard.innerHTML = "";
  const scores = await getScore();

  scores.forEach((player) => {
    const li = document.createElement("li");
    li.classList.add("player");
    li.textContent = `${player.user}: ${player.score}`;
    scoreBoard.appendChild(li);
  });
};

function renderScore() {
  handleRefesh()
  const button = document.querySelector("#refresh");
  button.addEventListener("click", () => {
    handleRefesh();
  });
}

export {renderScore, handleRefesh}
