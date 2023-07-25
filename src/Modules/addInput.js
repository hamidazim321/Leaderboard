import { getStorage, setStorage } from "./localStorage"

function isNumber(value) {
  return /^\d+$/.test(value);
}

function handleScore() {
  const name = document.querySelector('#inputName').value
  const score = document.querySelector('#inputScore').value
  const container = document.querySelector('#scoreList')
  if (isNumber(score)){
    const li = document.createElement('li')
    let arr = getStorage()
    const obj = {
      name: name, 
      score: score
    }

    li.innerHTML = `<li class="player">${name}: ${score}</li>`
    container.appendChild(li)

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

