'use strict';

const STORAGE_KEY = 'savedMemesDB';

if (!loadFromStorage(STORAGE_KEY)) {
  saveToStorage(STORAGE_KEY, []);
}

function saveToStorage(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
  var val = localStorage.getItem(key);
  return JSON.parse(val);
}
