'use strict';

function onGalleryInit() {
  renderGallery();
}

function renderGallery() {
  var elGallery = document.querySelector('.gallery');
  var strHTML = '';
  for (var i = 1; i < 19; i++) {
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
