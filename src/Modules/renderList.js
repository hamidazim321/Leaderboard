import addScore from "./addScore"
import { getStorage } from "./localStorage"

function renderList() {
  const items = getStorage()
  items.forEach((item)=>{
    addScore(item.name, item.score)
  })
}

export default renderList