'use strict';

var gId = 0;

function onSavedInit() {
  var savedMemes = loadFromStorage(STORAGE_KEY);
  var savedGalleyEl = document.querySelector('.savedGallery');
  var strHTML = '';
  gId = 0;
  for (let i = 0; i < savedMemes.length; i++) {
    strHTML += `<div class="img img${i}"> <img src="${savedMemes[i].url}"></div>`;
  }
  savedGalleyEl.innerHTML = strHTML;
}

function savedMemesOpen() {
  document.querySelector('.main-page').classList.add('hidden');
  document.querySelector('.saved-memes').classList.remove('hidden');
  document.querySelector('.savedGallery').classList.remove('hidden');

  document.querySelector('body').classList.add('overflow-x-off');
  onSavedInit();
}
