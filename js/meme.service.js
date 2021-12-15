'use strict';

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };

////////// Variables ///////

var gCurLine = 0;

var gImgs = [
  { id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
  { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] },
  { id: 3, url: 'img/3.jpg', keywords: ['funny', 'cat'] },
  { id: 4, url: 'img/4.jpg', keywords: ['funny', 'cat'] },
  { id: 5, url: 'img/5.jpg', keywords: ['funny', 'cat'] },
];

var gMeme = {
  selectedImgId: 1,
  selectedLineIdx: 0,
  lines: [
    {
      txt: 'placeholder',
      size: 50,
      align: 'center',
      color: 'white',
      x: 225,
      y: 50,
      isFocused: true,
    },
  ],
};

///// Functions //////

function getMeme() {
  return gMeme;
}

function setLineTxt(text) {
  gMeme.lines[gMeme.selectedLineIdx].txt = text;
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId;
}

function setMemeColor(color) {
  gMeme.lines[gMeme.selectedLineIdx].color = color;
}

function changeSize(val) {
  val === 'increase'
    ? (gMeme.lines[gMeme.selectedLineIdx].size += 10)
    : (gMeme.lines[gMeme.selectedLineIdx].size -= 10);
  renderMeme();
}

function createLine() {
  gMeme.lines.push({
    txt: 'placeholder2',
    size: 50,
    align: 'center',
    color: 'white',
    x: 225,
    y: gMeme.lines.length === 1 ? 400 : 250,
  });
  document.querySelector('.line').value =
    gMeme.lines[gMeme.selectedLineIdx].txt;
  switchLine();
}

function switchLine() {
  var lines = gMeme.lines.length;
  // 2 sorot : 2 //// [0 , 1]
  if (gMeme.selectedLineIdx === lines - 1) {
    gMeme.selectedLineIdx = 0;
  } else {
    gMeme.selectedLineIdx++;
  }
}
