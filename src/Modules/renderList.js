import addScore from './addScore.js';
import { getStorage } from './localStorage.js';

function renderList() {
  const items = getStorage();
  items.forEach((item) => {
    addScore(item.name, item.score);
  });
}

export default renderList;