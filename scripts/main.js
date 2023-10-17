/* eslint-disable linebreak-style */
/* eslint-disable no-redeclare */
/* eslint-disable eqeqeq */
/* eslint-disable no-continue */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */

const body = document.querySelector('body');

const title = document.createElement('h1');
const lvl = document.createElement('div');
const easy = document.createElement('p');
const medium = document.createElement('p');
const hard = document.createElement('p');
const field = document.createElement('div');
const box = document.createElement('div');
const subject = document.createElement('div');
const light = document.createElement('p');
const dark = document.createElement('p');
const audioClick = document.createElement('audio');
const timer = document.createElement('div');
const countClick = document.createElement('div');
const mines = document.createElement('div');
const audioGameOver = document.createElement('audio');
const gameOver = document.createElement('h1');
const inputRange = document.createElement('input');
const rangeValue = document.createElement('h2');
const boxSwiper = document.createElement('div');
const audioYouWin = document.createElement('audio');
const audioButton = document.createElement('label');
const audioInput = document.createElement('input');
const audioSpan = document.createElement('span');
let countMines = 0;

audioButton.classList.add('switch');
audioInput.type = 'checkbox';
audioSpan.classList.add('slider');
audioSpan.classList.add('round');

body.append(audioButton);
audioButton.appendChild(audioInput);
audioButton.appendChild(audioSpan);

window.addEventListener('contextmenu', (e) => {
  e.preventDefault();
});

audioClick.src = '/minesweeper/music/click.mp3';

audioGameOver.src = '/minesweeper/music/gameOver.mp3';

audioYouWin.src = '/minesweeper/music/youWin.mp3';

mines.classList.add('mines');

document.addEventListener('DOMContentLoaded', startTimerEasy);

function startTimerEasy() {
  timer.setAttribute('id', 'timer');
  timer.innerText = '00:00:00';
  boxSwiper.append(timer);
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  function startTimer() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    timer.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  const intervalId = setInterval(startTimer, 1000);
  medium.addEventListener('click', () => {
    resetTimer();
  }, { once: true });

  function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerText = '00:00:00';
  }

  easy.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
  medium.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
  hard.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
}

function startTimerMedium() {
  timer.setAttribute('id', 'timer');
  timer.innerText = '00:00:00';
  boxSwiper.append(timer);
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerText = '00:00:00';
  }

  function startTimer() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    timer.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  let intervalId = setInterval(startTimer, 1000);
  easy.addEventListener('click', () => {
    resetTimer();
  }, { once: true });

  function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerText = '00:00:00';
  }
  easy.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
  medium.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
  hard.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
}

function startTimerHard() {
  timer.setAttribute('id', 'timer');
  timer.innerText = '00:00:00';
  boxSwiper.append(timer);
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  function startTimer() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    timer.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  }

  const intervalId = setInterval(startTimer, 1000);
  medium.addEventListener('click', () => {
    resetTimer();
  }, { once: true });

  function resetTimer() {
    clearInterval(intervalId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    timer.innerText = '00:00:00';
  }
  easy.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
  medium.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
  hard.addEventListener('click', () => {
    resetTimer();
  }, { once: true });
}

light.innerText = 'Light';
dark.innerText = 'Dark';
subject.classList.add('subject');
light.classList.add('light');
dark.classList.add('dark');

light.setAttribute('id', 'light');
dark.setAttribute('id', 'dark');

body.append(subject);
subject.append(light);
subject.append(dark);

const theme = () => {
  const selectedTheme = localStorage.getItem('theme');
  if (selectedTheme) {
    if (selectedTheme === 'dark') {
      body.classList.add('black');
      rangeValue.classList.add('black__white');
      easy.classList.add('black__white');
      medium.classList.add('black__white');
      hard.classList.add('black__white');
      title.classList.add('black__white');
      light.classList.add('black__white');
      dark.classList.add('black__white');
      timer.classList.add('black__white');
      countClick.classList.add('black__white');
      mines.classList.add('black__white');
    } else if (selectedTheme === 'light') {
      body.classList.remove('black');
      rangeValue.classList.remove('black__white');
      easy.classList.remove('black__white');
      medium.classList.remove('black__white');
      hard.classList.remove('black__white');
      title.classList.remove('black__white');
      light.classList.remove('black__white');
      dark.classList.remove('black__white');
      timer.classList.remove('black__white');
      countClick.classList.remove('black__white');
      mines.classList.remove('black__white');
    }
  }
};

theme();

const handleThemeClick = (e) => {
  if (e.target.id === 'dark') {
    audioClick.play();
    localStorage.setItem('theme', 'dark');
    theme();
  } else if (e.target.id === 'light') {
    audioClick.play();
    localStorage.setItem('theme', 'light');
    theme();
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const selectedTheme = localStorage.getItem('theme');
  if (selectedTheme) {
    theme();
  }
});

document.addEventListener('click', handleThemeClick);

title.classList.add('title');
title.innerText = 'Minesweeper';
body.append(title);

easy.classList.add('easy');
medium.classList.add('medium');
hard.classList.add('hard');

easy.innerText = 'Easy';
medium.innerText = 'Medium';
hard.innerText = 'Hard';

lvl.classList.add('lvl');
lvl.append(easy);
lvl.append(medium);
lvl.append(hard);

body.append(lvl);

boxSwiper.classList.add('swiper');
body.append(boxSwiper);

rangeValue.innerText = 10;
rangeValue.setAttribute('id', 'rangeValue');
inputRange.type = 'range';
inputRange.classList.add('range');
inputRange.value = 10;
inputRange.min = 10;
inputRange.max = 99;
inputRange.setAttribute('onmousemove', 'rangeSlider(this.value)');

boxSwiper.append(rangeValue);
boxSwiper.append(inputRange);

function rangeSlider(value) {
  rangeValue.innerText = value;
}

box.classList.add('box');
body.append(box);

document.addEventListener('DOMContentLoaded', startGameEasy(10, 10, inputRange.value));

easy.addEventListener('click', () => {
  audioClick.play();
  box.classList.toggle('none');
  gameOver.remove();
  startTimerEasy();
  startGameEasy(10, 10, inputRange.value);
});

medium.addEventListener('click', () => {
  audioClick.play();
  box.classList.toggle('none');
  gameOver.remove();
  startTimerMedium();
  startGameMedium(15, 15, inputRange.value);
});

hard.addEventListener('click', () => {
  audioClick.play();
  box.classList.toggle('none');
  gameOver.remove();
  startTimerHard();
  startGameHard(25, 25, inputRange.value);
});

function startGameEasy(width, height, bombsCount) {
  const cellsCount = width * height;
  field.innerHTML = '<p class="field__btn-easy"></p>'.repeat(cellsCount);
  field.classList.add('field__easy');
  field.classList.remove('field__medium');
  field.classList.remove('field__hard');
  box.append(field);

  const cells = [...field.children];

  let count = 0;
  countClick.classList.add('count-click');
  countClick.innerText = `Clicks: ${count}`;
  box.append(countClick);

  mines.innerText = `Flag: ${countMines}`;
  box.append(mines);
  countMines = 0;
  const bombs = [];

  field.addEventListener('click', (e) => {
    if (e.target.classList == 'field__btn-easy') {
      if (bombs.length === 0) {
        while (bombs.length < bombsCount) {
          const index = Math.floor(Math.random() * cellsCount);
          if (!bombs.includes(index) && index !== cells.indexOf(e.target)) {
            bombs.push(index);
          }
        }
      }

      const index = cells.indexOf(e.target);
      const column = index % width;
      const row = (index - column) / width;
      open(row, column);
      count++;
      countClick.innerText = `Clicks: ${count}`;
      audioClick.play();
    }
  });

  function checkYouWin() {
    const openedCells = document.querySelectorAll('.field__btn-open');
    const totalOpenedCells = openedCells.length;
    const totalCells = width * height;
    if (totalOpenedCells === totalCells - bombsCount) {
      showYouWin();
    }
  }

  function open(row, column) {
    if (!isValid(row, column)) return;
    const index = row * width + column;
    const cell = cells[index];
    if (!cell) return;

    if (isBombs(row, column)) {
      cell.innerHTML = '💣';
      showGameOver();
      return;
    }

    const count = getCount(row, column);

    if (count == 1 || count == 3) {
      cell.style.color = 'red';
    } else if (count == 2 || count == 4) {
      cell.style.color = 'blue';
    } else if (count == 5 || count == 6) {
      cell.style.color = 'green';
    } else if (count == 7 || count == 8) {
      cell.style.color = 'black';
    }

    cell.innerHTML = count;
    cell.classList.remove('field__btn-easy');
    cell.classList.add('field__btn-open');

    if (count === 0) {
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;
          const newRow = row + y;
          const newColumn = column + x;
          const newIndex = newRow * width + newColumn;

          if (newRow >= 0 && newRow < height && newColumn >= 0 && newColumn < width) {
            if (!cells[newIndex].classList.contains('field__btn-open')) {
              open(newRow, newColumn);
            }
          }
        }
      }
    }
    if (count === 0) {
      cell.innerHTML = '<p class="opacity">0</p>';
    }
    checkYouWin();
  }

  field.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    if (e.target.classList.contains('field__btn-easy')) {
      e.target.innerText = '🚩';
      e.target.classList.add('mine-easy');
      e.target.classList.remove('field__btn-easy');
      audioClick.play();
      countMines++;
      mines.innerText = `Flag: ${countMines}`;
    } else if (e.target.classList.contains('mine-easy')) {
      e.target.innerText = '';
      e.target.classList.remove('mine-easy');
      e.target.classList.add('field__btn-easy');
      audioClick.play();
      countMines--;
      mines.innerText = `Flag: ${countMines}`;
    }
  });

  function isValid(row, column) {
    return row >= 0 && row < height && column >= 0 && column < width;
  }

  function getCount(row, column) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (isBombs(row + x, column + y)) {
          count++;
        }
      }
    }
    return count;
  }

  function isBombs(row, column) {
    if (!isValid(row, column)) return false;

    const index = row * width + column;

    return bombs.includes(index);
  }
}

function startGameMedium(width, height, bombsCount) {
  const cellsCount = width * height;
  field.innerHTML = '<p class="field__btn-medium"></p>'.repeat(cellsCount);
  field.classList.add('field__medium');
  field.classList.remove('field__easy');
  field.classList.remove('field__hard');
  box.append(field);
  const cells = [...field.children];

  let count = 0;
  countClick.classList.add('count-click');
  countClick.innerText = `Clicks: ${count}`;
  box.append(countClick);

  countMines = 0;
  mines.innerText = `Flag: ${countMines}`;
  box.append(mines);

  const bombs = [];

  field.addEventListener('click', (e) => {
    if (e.target.classList == 'field__btn-medium') {
      if (bombs.length === 0) {
        while (bombs.length < bombsCount) {
          const index = Math.floor(Math.random() * cellsCount);
          if (!bombs.includes(index) && index !== cells.indexOf(e.target)) {
            bombs.push(index);
          }
        }
      }

      const index = cells.indexOf(e.target);
      const column = index % width;
      const row = (index - column) / width;
      open(row, column);
      count++;
      countClick.innerText = `Clicks: ${count}`;
      audioClick.play();
    }
  });

  function isValid(row, column) {
    return row >= 0 && row < height && column >= 0 && column < width;
  }

  function checkYouWin() {
    const openedCells = document.querySelectorAll('.field__btn-open');
    const totalOpenedCells = openedCells.length;
    const totalCells = width * height;
    if (totalOpenedCells === totalCells - bombsCount) {
      showYouWin();
    }
  }

  function open(row, column) {
    if (!isValid(row, column)) return;
    const index = row * width + column;
    const cell = cells[index];
    if (!cell) return;

    if (isBombs(row, column)) {
      cell.innerHTML = '💣';
      showGameOver();
      return;
    }

    const count = getCount(row, column);

    if (count == 1 || count == 3) {
      cell.style.color = 'red';
    } else if (count == 2 || count == 4) {
      cell.style.color = 'blue';
    } else if (count == 5 || count == 6) {
      cell.style.color = 'green';
    } else if (count == 7 || count == 8) {
      cell.style.color = 'black';
    }

    cell.innerHTML = count;
    cell.classList.remove('field__btn-medium');
    cell.classList.add('field__btn-open');

    if (count === 0) {
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;
          const newRow = row + y;
          const newColumn = column + x;
          const newIndex = newRow * width + newColumn;

          if (newRow >= 0 && newRow < height && newColumn >= 0 && newColumn < width) {
            if (!cells[newIndex].classList.contains('field__btn-open')) {
              open(newRow, newColumn);
            }
          }
        }
      }
    }
    if (count === 0) {
      cell.innerHTML = '<p class="opacity">0</p>';
    }
    checkYouWin();
  }

  function getCount(row, column) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (isBombs(row + y, column + x)) {
          count++;
        }
      }
    }
    return count;
  }

  field.oncontextmenu = (e) => {
    e.preventDefault();
    if (e.target.classList.contains('field__btn-medium')) {
      e.target.innerText = '🚩';
      e.target.classList.add('mine-medium');
      e.target.classList.remove('field__btn-medium');
      audioClick.play();
      countMines++;
      mines.innerText = `Flag: ${countMines}`;
    } else if (e.target.classList.contains('mine-medium')) {
      e.target.innerText = '';
      e.target.classList.remove('mine-medium');
      e.target.classList.add('field__btn-medium');
      audioClick.play();
      countMines--;
      mines.innerText = `Flag: ${countMines}`;
    }
  };

  function isBombs(row, column) {
    if (!isValid(row, column)) return false;

    const index = row * width + column;

    return bombs.includes(index);
  }
}

function startGameHard(width, height, bombsCount) {
  const cellsCount = width * height;
  field.innerHTML = '<p class="field__btn-hard"></p>'.repeat(cellsCount);
  field.classList.add('field__hard');
  field.classList.remove('field__easy');
  field.classList.remove('field__medium');
  box.append(field);
  const cells = [...field.children];

  let count = 0;
  countClick.classList.add('count-click');
  countClick.innerText = `Сlicks: ${count}`;
  box.append(countClick);

  countMines = 0;
  mines.innerText = `Flag: ${countMines}`;
  box.append(mines);

  const bombs = [];

  field.addEventListener('click', (e) => {
    if (e.target.classList == 'field__btn-hard') {
      if (bombs.length === 0) {
        while (bombs.length < bombsCount) {
          const index = Math.floor(Math.random() * cellsCount);
          if (!bombs.includes(index) && index !== cells.indexOf(e.target)) {
            bombs.push(index);
          }
        }
      }

      const index = cells.indexOf(e.target);
      const column = index % width;
      const row = (index - column) / width;
      open(row, column);
      count++;
      countClick.innerText = `Clicks: ${count}`;
      audioClick.play();
    }
  });

  function isValid(row, column) {
    return row >= 0 && row < height && column >= 0 && column < width;
  }

  function checkYouWin() {
    const openedCells = document.querySelectorAll('.field__btn-open');
    const totalOpenedCells = openedCells.length;
    const totalCells = width * height;
    if (totalOpenedCells === totalCells - bombsCount) {
      showYouWin();
    }
  }

  function open(row, column) {
    if (!isValid(row, column)) return;
    const index = row * width + column;
    const cell = cells[index];
    if (!cell) return;

    if (isBombs(row, column)) {
      cell.innerHTML = '💣';
      showGameOver();
      return;
    }

    const count = getCount(row, column);

    if (count == 1 || count == 3) {
      cell.style.color = 'red';
    } else if (count == 2 || count == 4) {
      cell.style.color = 'blue';
    } else if (count == 5 || count == 6) {
      cell.style.color = 'green';
    } else if (count == 7 || count == 8) {
      cell.style.color = 'black';
    }

    cell.innerHTML = count;
    cell.classList.remove('field__btn-hard');
    cell.classList.add('field__btn-open');

    if (count === 0) {
      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;
          const newRow = row + y;
          const newColumn = column + x;
          const newIndex = newRow * width + newColumn;

          if (newRow >= 0 && newRow < height && newColumn >= 0 && newColumn < width) {
            if (!cells[newIndex].classList.contains('field__btn-open')) {
              open(newRow, newColumn);
            }
          }
        }
      }
    }
    if (count === 0) {
      cell.innerHTML = '<p class="opacity">0</p>';
    }
    checkYouWin();
  }

  function getCount(row, column) {
    let count = 0;
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        if (isBombs(row + y, column + x)) {
          count++;
        }
      }
    }
    return count;
  }

  field.addEventListener('contextmenu', (e) => {
    e.stopImmediatePropagation();
    e.preventDefault();
    if (e.target.classList.contains('field__btn-hard')) {
      e.target.innerText = '🚩';
      e.target.classList.add('mine-hard');
      e.target.classList.remove('field__btn-hard');
      audioClick.play();
      countMines++;
      mines.innerText = `Flag: ${countMines}`;
    } else if (e.target.classList.contains('mine-hard')) {
      e.target.innerText = '';
      e.target.classList.remove('mine-hard');
      e.target.classList.add('field__btn-hard');
      audioClick.play();
      countMines--;
      mines.innerText = `Flag: ${countMines}`;
    }
  });

  function isBombs(row, column) {
    if (!isValid(row, column)) return false;

    const index = row * width + column;

    return bombs.includes(index);
  }
}

function showGameOver() {
  gameOver.classList.add('game__over');
  gameOver.innerText = 'Game Over!';
  audioGameOver.play();
  body.append(gameOver);
}

function showYouWin() {
  gameOver.classList.add('game__over');
  gameOver.innerText = 'You Win!';
  audioYouWin.play();
  body.append(gameOver);
}

audioInput.addEventListener('change', () => {
  if (audioInput.checked) {
    audioClick.muted = false;
    audioGameOver.muted = false;
    audioYouWin.muted = false;
  } else {
    audioClick.muted = true;
    audioGameOver.muted = true;
    audioYouWin.muted = true;
  }
});
