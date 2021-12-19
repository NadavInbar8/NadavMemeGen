'use strict';

var gId = 0;

function onSavedInit() {
  var savedMemes = loadFromStorage(STORAGE_KEY);
  var savedGalleyEl = document.querySelector('.savedGallery');
  var strHTML = '';
  gId = 0;
  console.log(savedMemes);
  if (savedMemes.length === 0) {
    strHTML = `<p class="about">
    Make a meme and bookmark it, to show it here!
    </p>`;
    console.log(strHTML);
  }
  for (let i = 0; i < savedMemes.length; i++) {
    strHTML += `<div class="img img${i}"> 
      <img src="${savedMemes[i].url}" />
      <div class= "saved-memes-options flex">
            <img src="./assets/SVG's/down-arrow.png" class="download" onclick="download()" />
            </div>
      </div>`;
  }
  savedGalleyEl.innerHTML = strHTML;
}

function savedMemesOpen() {
  document.querySelector('.main-page').classList.add('hidden');
  document.querySelector('.saved-memes').classList.remove('hidden');
  document.querySelector('.savedGallery').classList.remove('hidden');
  document.querySelector('.search-container').classList.add('hidden');
  document.querySelector('.saved-memes').style.marginTop = '100px';

  document.querySelector('body').classList.add('overflow-x-off');
  onSavedInit();
}
