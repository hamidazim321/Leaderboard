import addScore from "./addScore";
import { getStorage, setStorage } from "./localStorage"

function isNumber(value) {
  return /^\d+$/.test(value);
}

function handleScore() {
  const name = document.querySelector('#inputName').value
  const score = document.querySelector('#inputScore').value
  if (isNumber(score)){
    let arr = getStorage()
    const obj = {
      name: name, 
      score: score
    }

    addScore(name,score)
    arr.push(obj)
    setStorage(arr)
  }
}

function submitScore() {
  const button = document.querySelector('#Submit')
  button.addEventListener('click', ()=> {
    handleScore()
  })
}

export default submitScore

