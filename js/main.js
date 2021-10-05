'use strict'

const text = document.getElementById('text');

text.addEventListener('click', function() {
  if (this.textContent === 'hello world.') {
    this.textContent = 'hello rabbit♥';
  } else {
    this.textContent = 'hello world.';
  }
});

// アレンジ加えてない元のはこっち⤵
// text.addEventListener('click' , function() {
//   this.textContent = 'hello rabbit♥';
// });