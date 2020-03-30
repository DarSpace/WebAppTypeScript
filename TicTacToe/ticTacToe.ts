enum Players {
  Player1 = "X",
  Player2 = "O"
}

class Board {
  currentPlayer: Players = Players.Player1;

  movesBoard: string[] = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  buttonInputs: NodeListOf<HTMLInputElement>;

  constructor(buttonInputs: NodeListOf<HTMLInputElement>) {
    this.buttonInputs = buttonInputs;
  }

  listenForClicks() {
    buttonInputs.forEach((elem: HTMLInputElement, index: number) => {
      elem.addEventListener("click", event => {
        this.movesBoard[index] = this.currentPlayer;
        elem.value = this.currentPlayer;
        elem.disabled = true;
        this.updateCurrentPlayer();
        console.log(this.movesBoard);
      });
    });
  }

  updateCurrentPlayer() {
    if (this.currentPlayer === Players.Player1) {
      this.currentPlayer = Players.Player2;
    } else if (this.currentPlayer === Players.Player2) {
      this.currentPlayer = Players.Player1;
    }
  }
}

class Game {
  constructor(buttonInputs: NodeListOf<HTMLInputElement>) {
    const board: Board = new Board(buttonInputs);
    board.listenForClicks();
  }
}

const buttonInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  ".inputButton"
);
const game = new Game(buttonInputs);
