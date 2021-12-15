'use strict';

console.log('hello world');

////////// Variables ///////

var gCanvas;
var gCtx;
var gCurrMeme;

///// Functions //////

function init() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  drawImgFromLocal('../meme-imgs/1.jpg');
  renderMeme();
}

function renderMeme() {
  gCurrMeme = getMeme();
  renderText();
}

function drawImgFromLocal(imgSrc) {
  var img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
  };
}

function drawText(txt, size, align, color) {
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = align;
  gCtx.font = `${size}px Impact`;
  gCtx.fillStyle = color;
  gCtx.fillText(txt, 225, 50);
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function renderText() {
  drawText(
    gCurrMeme.lines[0].txt,
    gCurrMeme.lines[0].size,
    gCurrMeme.lines[0].align,
    gCurrMeme.lines[0].color
  );
}
