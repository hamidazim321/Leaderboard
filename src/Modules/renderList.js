import addScore from './addScore.js';

function renderList() {
  const items = getStorage();
  items.forEach((item) => {
    addScore(item.name, item.score);
  });
}

export default renderList;