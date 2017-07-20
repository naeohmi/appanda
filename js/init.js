//jQuery plugin for pushpin from Materialize 
$('.pushpin-demo-nav').each(function () {
  var $this = $(this);
  var $target = $('#' + $(this).attr('data-target'));
  $this.pushpin({
    top: $target.offset().top,
    bottom: $target.offset().top + $target.outerHeight() - $this.height()
  });
});

$(document).ready(function () {
  $('.target').pushpin({
    top: 0,
    bottom: 1000,
    offset: 0
  });
});

//home/landing page animations modified from codepen
class AnimateWords {
  constructor() {
    this.animateWord = document.getElementsByClassName('animateWord');
    this.wrdArr = [];
    this.curtWrd = 0;
  }

  letterLoop() {
    for (let i = 0; i < this.animateWord.length; i++) {
      this.splitLetters(this.animateWord[i]);
    }
  }

  splitLetters(word) {
    let content = word.innerHTML;
    word.innerHTML = '';
    let allLtrs = [];
    for (let i = 0; i < content.length; i++) {
      const eachLtr = document.createElement('span');
      eachLtr.className = 'letter';
      eachLtr.innerHTML = content.charAt(i);
      word.appendChild(eachLtr);
      allLtrs.push(eachLtr);
    }
    this.wrdArr.push(allLtrs);
  }

  changeWord() {
    
    let cw = this.wrdArr[this.curtWrd];
    console.log(cw)
    let nw = this.curtWrd == this.animateWord.length - 1 ? this.wrdArr[0] : this.wrdArr[this.curtWrd + 1];
    for (let i = 0; i < cw.length; i++) {
      this.animateLetterOut(cw, i);
    }

    for (let i = 0; i < nw.length; i++) {
      nw[i].className = 'letter behind';
      nw[0].parentElement.style.opacity = 1;
      this.animateLetterIn(nw, i);
    }
    this.curtWrd = (this.curtWrd == this.wrdArr.length - 1) ? 0 : this.curtWrd + 1;
  }

  animateLetterOut(cw, i) {
    setTimeout(() => {
      cw[i].className = 'letter out';
    }, i * 80);
  }

  animateLetterIn(nw, i) {
    setTimeout(() => {
      nw[i].className = 'letter in';
    }, 340 + (i * 80));
  }

}

let instatiateClass = new AnimateWords();
instatiateClass.letterLoop();
instatiateClass.changeWord();
setInterval(instatiateClass.changeWord, 4000);