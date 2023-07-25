const getStorage = () => JSON.parse(localStorage.getItem('scores')) || [];
const setStorage = (arr) => localStorage.setItem('scores', JSON.stringify(arr));

export { getStorage, setStorage };