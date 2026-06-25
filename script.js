var arr = [[], [], [], [], [], [], [], [], []];

for (var i = 0; i < 9; i++) {
  for (var j = 0; j < 9; j++) {
    arr[i][j] = document.getElementById(i * 9 + j);
  }
}

var board = [[], [], [], [], [], [], [], [], []];

function ReadBoard() {
  for (var i = 0; i < 9; i++) {
    board[i] = [];

    for (var j = 0; j < 9; j++) {
      let value = arr[i][j].innerText.trim();

      if (value === "") board[i][j] = 0;
      else board[i][j] = parseInt(value);
    }
  }
}

function FillBoard(board) {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      if (board[i][j] === 0) arr[i][j].innerText = "";
      else arr[i][j].innerText = board[i][j];
    }
  }
}

function isSafe(board, row, col, num) {
  for (let x = 0; x < 9; x++) {
    if (board[row][x] === num) return false;
  }

  for (let x = 0; x < 9; x++) {
    if (board[x][col] === num) return false;
  }

  let startRow = row - (row % 3);
  let startCol = col - (col % 3);

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[startRow + i][startCol + j] === num) return false;
    }
  }

  return true;
}

function SudokuSolver(board, row, col) {
  if (row === 9) return true;

  if (col === 9) return SudokuSolver(board, row + 1, 0);

  if (board[row][col] !== 0) return SudokuSolver(board, row, col + 1);

  for (let num = 1; num <= 9; num++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;

      if (SudokuSolver(board, row, col + 1)) return true;

      board[row][col] = 0;
    }
  }

  return false;
}

let SolvePuzzle = document.getElementById("SolvePuzzle");

SolvePuzzle.onclick = function () {
  ReadBoard();

  if (SudokuSolver(board, 0, 0)) {
    FillBoard(board);
  } else {
    alert("No Solution Exists!");
  }
};

let ResetPuzzle = document.getElementById("ResetPuzzle");

ResetPuzzle.onclick = function () {
  for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
      board[i][j] = 0;
      arr[i][j].innerText = "";
    }
  }
};

for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    arr[i][j].addEventListener("input", function () {
      let value = this.innerText;

      if (!/^[1-9]?$/.test(value)) {
        this.innerText = "";
      }
    });
  }
}
