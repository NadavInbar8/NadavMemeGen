'use strict';

function onGalleryInit() {
  renderGallery();
}

function renderGallery(keyWord = 'all') {
  var elGallery = document.querySelector('.gallery');
  var strHTML = '';
  var sortedArr = onSortBy(keyWord);
  sortedArr.forEach((memeImg) => {
    strHTML += ` <div class="img img${memeImg.id}"><img onclick="onImgSelect(${memeImg.selectedImgId})" src="./imgs/${memeImg.selectedImgId}.jpg"/></div>`;
  });

  elGallery.innerHTML = strHTML;
}

function onImgSelect(imgId) {
  checkMobile();

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

function onSortBy(value) {
  var arraySorted = sortBy(value);
  return arraySorted;
}

function moreOptions() {
  const categories = document.querySelector('.moreCate');
  const more = document.querySelector('.more');
  categories.classList.toggle('hidden');
  more.classList.toggle('hidden');
}

function checkMobile() {
  const body = document.querySelector('body');
  const gallery = document.querySelector('.main-page');

  if (body.offsetWidth < 1000) {
    gallery.classList.toggle('hidden');
  }
}
