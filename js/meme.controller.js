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

function drawText(txt, size, align, color, borderColor, x, y) {
  gCtx.textBaseline = 'middle';
  gCtx.textAlign = align;
  gCtx.font = `${size}px Impact`;
  gCtx.fillStyle = color;
  gCtx.strokeStyle = borderColor;
  gCtx.fillText(txt, x, y);
  gCtx.strokeText(txt, x, y);
}

function drawRect(size, width, height, start, x) {
  gCtx.beginPath();
  gCtx.lineWidth = 3;
  gCtx.rect(x - start, height - size / 2, width, size);
  gCtx.strokeStyle = 'black';
  gCtx.stroke();
}

function renderText() {
  gCurrMeme.lines.forEach((line) => {
    switch (line.align) {
      case 'left':
        line.x = 0;
        break;
      case 'right':
        line.x = gCanvas.width;

        break;
      case 'center':
        line.x = gCanvas.width / 2;
        break;
    }
    drawText(
      line.txt,
      line.size,
      line.align,
      line.color,
      line.borderColor,
      line.x,
      line.y,
      line.align
    );
  });

  renderRect();
}

function renderRect() {
  var selectedIdx = gCurrMeme.selectedLineIdx;
  var selectedLine = gCurrMeme.lines[selectedIdx];
  var textWidth = gCtx.measureText(selectedLine.txt);

  drawRect(
    selectedLine.size,
    textWidth.width,
    selectedLine.y,
    textWidth.actualBoundingBoxLeft,
    selectedLine.x
  );
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

function getBorderColor() {
  var memeColor = document.querySelector('.textBorderColor').value;
  setMemeBorderColor(memeColor);
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

function OnSaveMeme() {
  clearCanvas();
  renderMeme2();
  setTimeout(() => {
    const data = gCanvas.toDataURL();
    var lines = gCurrMeme.lines;
    var savedId = gCurrMeme.selectedImgId;
    const obj = { id: savedId, lines: lines, url: data };
    var savedMemes = loadFromStorage(STORAGE_KEY);
    if (!savedMemes || savedMemes.length === 0) {
      savedMemes = [];
      savedMemes.push(obj);
      saveToStorage(STORAGE_KEY, savedMemes);
    } else {
      savedMemes.push(obj);
      saveToStorage(STORAGE_KEY, savedMemes);
    }
  }, 1);
}

const download = () => {
  clearCanvas();
  renderMeme2();
  setTimeout(() => {
    var link = document.createElement('a');
    link.download = 'meme.jpeg';
    link.href = gCanvas.toDataURL();
    link.click();
  }, 1);
};

function clearCanvas() {
  const context = gCanvas.getContext('2d');
  context.clearRect(0, 0, gCanvas.width, gCanvas.height);
}

function renderMeme2() {
  gCanvas = document.querySelector('#my-canvas');
  gCtx = gCanvas.getContext('2d');
  gCurrMeme = getMeme();
  drawImgFromLocal(`./meme-imgs/${gCurrMeme.selectedImgId}.jpg`);
  setTimeout(() => {
    renderMemeForDownload(gMeme.selectedLineIdx);
  }, 1);
  updateInput();
}

function renderMemeForDownload() {
  gCurrMeme.lines.forEach((line) => {
    switch (line.align) {
      case 'left':
        line.x = 0;
        break;
      case 'right':
        line.x = gCanvas.width;

        break;
      case 'center':
        line.x = gCanvas.width / 2;
        break;
    }
    drawText(
      line.txt,
      line.size,
      line.align,
      line.color,
      line.borderColor,
      line.x,
      line.y,
      line.align
    );
  });
}
