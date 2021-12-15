'use strict';

function onGalleryInit() {
  renderGallery();
}

function renderGallery() {
  var elGallery = document.querySelector('.gallery');
  elGallery.innerHTML = `
  <div onclick="onImgSelect(1)" class="img1">
  <img src="./meme-imgs/1.jpg" alt="" />
  </div>
  <div onclick="onImgSelect(2)" class="img2">
  <img src="./meme-imgs/2.jpg" alt="" />
  </div>
  `;
}

function onImgSelect(imgId) {
  setImg(imgId);
  renderMeme();
}
