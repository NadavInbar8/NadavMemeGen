'use strict';

function onGalleryInit() {
  renderGallery();
}

function renderGallery() {
  var elGallery = document.querySelector('.gallery');
  var strHTML = '';
  for (var i = 1; i < gImgs.length; i++) {
    strHTML += ` <div class="img img${i}"><img onclick="onImgSelect(${i})" src="./meme-imgs/${i}.jpg" alt=""/></div>`;
  }
  elGallery.innerHTML = strHTML;
}

function onImgSelect(imgId) {
  openModal();
  getCurrMemeId(imgId);
  setImg(imgId);
  renderMeme();
}

function galleryOpen() {
  document.querySelector('.saved-memes').classList.add('hidden');
  document.querySelector('.savedGallery').classList.add('hidden');

  document.querySelector('.main-page').classList.remove('hidden');
}
