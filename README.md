# SudokuX - Interactive Sudoku Solver

An interactive **Sudoku Solver** built using the **Recursive Backtracking Algorithm**. SudokuX allows users to enter any valid Sudoku puzzle, validates inputs in real time, and efficiently computes the solution using depth-first recursive search with constraint checking.

🌐 **Live Demo:** https://deepakvishwakarma24.github.io/SudokuX/

---

## Preview

> Modern dark-themed interface with an editable 9×9 Sudoku board.

---

## Features

- Interactive editable **9×9 Sudoku grid**
- Recursive **Backtracking Algorithm** for solving puzzles
- Real-time input validation (accepts only digits 1–9)
- Automatic row, column, and 3×3 subgrid constraint checking
- Responsive dark-themed UI
- Instant puzzle reset functionality
- Lightweight and dependency-free implementation
- Fully client-side (no backend or external APIs)

---

## Tech Stack

- HTML5
- CSS3
- JavaScript (ES6)
- Recursive Backtracking Algorithm

---

## Algorithm

SudokuX uses the classic **Recursive Backtracking Algorithm**.

### Steps

1. Find the next empty cell.
2. Try digits **1–9**.
3. Check whether the digit satisfies:
   - Row constraint
   - Column constraint
   - 3×3 subgrid constraint
4. If valid, place the digit.
5. Recursively solve the remaining board.
6. If no solution exists, backtrack and try another digit.
7. Continue until the board is solved.

### Time Complexity

Worst Case:

```
O(9^(n²))
```

Although the theoretical worst case is exponential, constraint checking and pruning make the solver efficient for real-world Sudoku puzzles.

---

## Project Structure

```
SudokuX
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Live Demo

**Website**

https://deepakvishwakarma24.github.io/SudokuX/

---

## GitHub Repository

https://github.com/deepakvishwakarma24/SudokuX

---

## Future Improvements

- Generate Sudoku puzzles with multiple difficulty levels
- Visualize the backtracking process step-by-step
- Solve animation with adjustable speed
- Dark/Light mode toggle
- Performance statistics (execution time & recursion count)

---

## Author

**Deepak Vishwakarma**

- LinkedIn: https://www.linkedin.com/in/deepak-vishwakarma2965/
- GitHub: https://github.com/deepakvishwakarma24

---
