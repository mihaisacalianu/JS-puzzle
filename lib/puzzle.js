// Select all the tiles
const tiles = document.querySelectorAll('td');

const canMove = (tile) => {
  const tileIndex = tile.cellIndex;
  const tileRow = tile.parentElement.rowIndex;
  let result = false;
  let tileI = 0;
  let tileR = 0;

  tiles.forEach((el) => {
    if (el.classList[0] === 'empty') {
      tileI = el.cellIndex;
      tileR = el.parentElement.rowIndex;
    }
  });

  if (tileRow === tileR) {
    if (tileIndex + 1 === tileI || tileIndex - 1 === tileI) {
      result = true;
    } else {
      result = false;
    }
  } else {
    if (tileRow === tileR + 1) {
      tileIndex === tileI ? result = true : result = false;
    } else if (tileRow === tileR - 1) {
      tileIndex === tileI ? result = true : result = false;
    } else {
      result = false;
    }
  }
  return result;
};

const moveTile = (element) => {
  // TOOD: Move the tile
  const text = element.innerText;
  const tileIndex = element.cellIndex;
  const tileRow = element.parentElement.rowIndex;
  let activeTile = null;
  tiles.forEach((el) => {
    if (el.classList[0] === 'empty') {
      activeTile = el;
    }
  });
  if (canMove(element)) {
    element.innerText = "";
    element.classList.add("empty");
    activeTile.innerText = text;
    activeTile.classList.remove('empty');
  }
};

function checkSorted(arr) {
  return arr.every((value, index, array) => index === 0 || value >= array[index - 1]);
}


const checkIfPlayerWins = () => {
  const arr = [];
  tiles.forEach((el) => {
    if (el.innerText !== '') {
      arr.push(parseInt(el.innerText, 10));
    }
  });
  if (checkSorted(arr)) {
    alert('You won!');
  }
};


// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
