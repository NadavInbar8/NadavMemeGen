'use strict';

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };
////////// Variables ///////

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
      size: 20,
      align: 'center',
      color: 'white',
    },
  ],
};

///// Functions //////

function getMeme() {
  return gMeme;
}

function setLineTxt(text) {
  gMeme.lines[0].txt = text;
}

function setImg(imgId) {
  gMeme.selectedImgId = imgId;
}
