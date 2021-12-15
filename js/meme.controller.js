'use strict';

console.log('hello world');

////////// Variables ///////

var gCanvas;
var gCtx;
var gCurrMeme = getMeme();

///// Functions //////

function renderMeme() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  gCurrMeme = getMeme();
  drawImgFromLocal(`../meme-imgs/${gCurrMeme.selectedImgId}.jpg`);
  setTimeout(() => {
    renderText();
  }, 1);
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

function renderText() {
  drawText(
    gCurrMeme.lines[0].txt,
    gCurrMeme.lines[0].size,
    gCurrMeme.lines[0].align,
    gCurrMeme.lines[0].color
  );
}

function getInput() {
  var memeText = document.querySelector('.line').value;
  setLineTxt(memeText);
  renderMeme();
}
