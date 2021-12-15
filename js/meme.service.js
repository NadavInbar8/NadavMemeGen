'use strict';

// var gKeywordSearchCountMap = { funny: 12, cat: 16, baby: 2 };

////////// Variables ///////

var gImgs = [
  {
    id: 1,
    url: 'imgs/meme-imgs/1.jpg',
    keywords: ['funny', 'awkward', 'celeb'],
  },
  { id: 2, url: 'imgs/meme-imgs/2.jpg', keywords: ['animal', 'happy', 'love'] },
  { id: 3, url: 'imgs/meme-imgs/3.jpg', keywords: ['baby', 'animal', 'sleep'] },
  {
    id: 4,
    url: 'imgs/meme-imgs/4.jpg',
    keywords: ['animal', 'sleep', 'funny'],
  },
  {
    id: 5,
    url: 'imgs/meme-imgs/5.jpg',
    keywords: ['success', 'baby', 'funny'],
  },
  { id: 6, url: 'imgs/meme-imgs/6.jpg', keywords: ['funny', 'celeb', 'shock'] },
  { id: 7, url: 'imgs/meme-imgs/7.jpg', keywords: ['funny', 'baby', 'shock'] },
  {
    id: 8,
    url: 'imgs/meme-imgs/8.jpg',
    keywords: ['shock', 'celeb', 'awkward'],
  },
  {
    id: 9,
    url: 'imgs/meme-imgs/9.jpg',
    keywords: ['baby', 'funny', 'success'],
  },
  {
    id: 10,
    url: 'imgs/meme-imgs/10.jpg',
    keywords: ['celeb', 'funny', 'happy'],
  },
  {
    id: 11,
    url: 'imgs/meme-imgs/11.jpg',
    keywords: ['awkward', 'celeb', 'funny'],
  },
  { id: 12, url: 'imgs/meme-imgs/12.jpg', keywords: ['shock', 'celeb', 'mad'] },
  {
    id: 13,
    url: 'imgs/meme-imgs/13.jpg',
    keywords: ['success', 'celeb', 'happy'],
  },
  { id: 14, url: 'imgs/meme-imgs/14.jpg', keywords: ['shock', 'celeb', 'mad'] },
  {
    id: 15,
    url: 'imgs/meme-imgs/15.jpg',
    keywords: ['awkward', 'celeb', 'shock'],
  },
  {
    id: 16,
    url: 'imgs/meme-imgs/16.jpg',
    keywords: ['funny', 'shock', 'awkward'],
  },
  {
    id: 17,
    url: 'imgs/meme-imgs/17.jpg',
    keywords: ['celeb', 'mad', 'success'],
  },
  {
    id: 18,
    url: 'imgs/meme-imgs/18.jpg',
    keywords: ['shock', 'success', 'scared'],
  },
];
var gCountImgId = 1;
var gMemes = [];
createMemes();
var gMeme = {};

///// Functions //////

function getCurrMemeId(imgId) {
  setCurrMeme(imgId);
}

function setCurrMeme(id) {
  gMeme = gMemes[id];
}

function createMemes() {
  for (let i = 0; i < gImgs.length; i++) {
    gMemes.push(createMeme());
  }
}

function createMeme() {
  var meme = {
    selectedImgId: gCountImgId,
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

  gCountImgId++;
  return meme;
}

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
