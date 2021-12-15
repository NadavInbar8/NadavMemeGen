'use strict';

console.log('hello world');

////////// Variables ///////

var gCanvas;
var gCtx;
var gCurrMeme;

///// Functions //////

function renderMeme() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  gCurrMeme = getMeme();
  drawImgFromLocal(`./meme-imgs/${gCurrMeme.selectedImgId}.jpg`);
  setTimeout(() => {
    renderText(gMeme.selectedLineIdx);
  }, 1);
  updateInput();
}

function drawImgFromLocal(imgSrc) {
  var img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height);
  };
}

function drawText(txt, size, align, color, x, y) {
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = align;
  gCtx.font = `${size}px Impact`;
  gCtx.fillStyle = color;
  gCtx.fillText(txt, x, y);
  gCtx.strokeText(txt, x, y);
}

function drawRect(size, x, y) {
  gCtx.beginPath();
  gCtx.lineWidth = 3;
  gCtx.rect(0, y - size / 2, gCanvas.width, size);
  gCtx.strokeStyle = 'black';
  gCtx.stroke();
}

function renderText() {
  gCurrMeme.lines.forEach((line) => {
    drawText(line.txt, line.size, line.align, line.color, line.x, line.y);
  });
  renderRect();
}

function renderRect() {
  var selectedIdx = gCurrMeme.selectedLineIdx;
  var selectedLine = gCurrMeme.lines[selectedIdx];
  drawRect(selectedLine.size, selectedLine.x, selectedLine.y);
}

function getInput() {
  var memeText = document.querySelector('.line').value;
  setLineTxt(memeText);
  renderMeme();
}
function updateInput() {
  var txtInputEl = document.querySelector('.line');
  var selectedLineTxt = gCurrMeme.lines[gCurrMeme.selectedLineIdx].txt;
  txtInputEl.value = selectedLineTxt;
}
function getColor() {
  var memeColor = document.querySelector('.textColor').value;
  setMemeColor(memeColor);
  renderMeme();
}

function onCreateLine() {
  createLine();
  renderMeme();
}

function onSwitchLine() {
  switchLine();
  renderMeme();
}

function clearCanvas() {
  gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height);
}
