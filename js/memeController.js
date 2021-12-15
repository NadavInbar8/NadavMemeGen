'use strict';

console.log('hello world');

var gCanvas;
var gCtx;

function init() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  renderMeme();
}

function renderMeme() {
  drawImgFromLocal('../meme-imgs/1.jpg');
}

function drawImgFromLocal(imgSrc) {
  var img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
  };
}
