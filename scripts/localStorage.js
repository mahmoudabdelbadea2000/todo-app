export const saveInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getData = (key) => {
  const result = localStorage.getItem(key);
  return result ? JSON.parse(result) : false;
};
