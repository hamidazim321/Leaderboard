import url from './ScoreURL.js';
import { handleRefesh } from './renderList.js';

function isNumber(value) {
  const regex = /^[0-9]+(\.[0-9]+)?$/;
  return regex.test(value);
}

const postScore = async (obj) => {
  const headers = {
    'Content-Type': 'application/json',
  };

  return fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(obj),
  });
};

const submitScore = () => {
  const form = document.querySelector('#inputForm');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.querySelector('#inputName').value;
    const score = document.querySelector('#inputScore').value;
    if (isNumber(score)) {
      const newScore = {
        user: name,
        score: Number(score),
      };
      await postScore(newScore);
      await handleRefesh();
    }
  });
};

export default submitScore;