const gameBoard = (() => {
    const board = ['', '', '', '', '', '', '', '', ''];
    const squares = document.querySelectorAll('.field');
    const message = document.querySelector(".message");
    let currentPlayer = 'X';
    let gameOver = false;
    const winningFormulas = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    const switchPlayer = () => {
      if (currentPlayer === 'X') {
        currentPlayer = 'O'
      } else {
        currentPlayer = 'X'
      }
      message.textContent = `Player ${currentPlayer}'s turn`
    }



    const checkForWin = (player) => {
      for (let i = 0; i < winningFormulas.length; i++) {
        const formula = winningFormulas[i];
        let count = 0;

        for (let j = 0; j < formula.length; j++) {
          if (board[formula[j]] === player) {
            count++;
          }     
        }

        if (count === 3) {
          return true;  
        }
      }
      return false;
    }

    const checkForDraw = () => {
      const board = gameBoard.getBoard()
      for (let i = 0; i < board.length; i++) {
        if (board[i] === "") {
          return false;
        }
      }
      return true;
    }

    const resetGame = () => {
      board.fill('');
      squares.forEach((square) => {
        square.textContent = "";
        square.classList.remove('winning-square');
      });
      gameOver = false;
      currentPlayer = 'X';
      message.textContent = `Player ${currentPlayer}'s turn`
    }

    const playMove = (index) => {
      if (!gameOver && board[index] === "") {
        board[index] = currentPlayer
        squares[index].textContent = currentPlayer
        if (checkForWin(currentPlayer)) {
          gameOver = true
          message.textContent = `${currentPlayer} wins`
          const formula = winningFormulas.find((formula) => {
            let count = 0;
            for (let j = 0; j < formula.length; j++) {
              if (board[formula[j]] === currentPlayer) {
                count++;
              }
            }
            return count === 3;
          });
          formula.forEach((i) => squares[i].classList.add('winning-square'));
        } else if(checkForDraw()) {
          gameOver = true
          message.textContent = "its a draw"
        }
        else {
          switchPlayer()
        }
      }
    }

    const getBoard = () => [...board]

    return {
      getBoard,
      playMove,
      resetGame
    }
  })();

  const squares = document.querySelectorAll('.field');
squares.forEach((square, index) => {
  square.addEventListener('click', () => {
    gameBoard.playMove(index);
  });
});

const disableClicks = () => {
  squares.forEach((square) => {
    square.removeEventListener('click', gameBoard.playMove);
  });
};

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  gameBoard.resetGame();
});

const playBtn = document.querySelector("span.material-symbols-outlined ")
const main = document.querySelector(".main")
const upperTxt = document.querySelector("span")
const start = document.querySelector(".start")

playBtn.addEventListener('click' , () => {
  upperTxt.style.display = "none";
  main.style.display = "flex"
  start.style.display = "none"
})