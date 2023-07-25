function addScore(name,score){
  const container = document.querySelector('#scoreList')
  const li = document.createElement('li')
  li.classList.add('player')
  li.textContent = `${name}: ${score}`
  container.appendChild(li)
}

export default addScore