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
      return false;
    }

    const getBoard = () => [...board]

    return {
      getBoard
    }
  })();
  


  
  