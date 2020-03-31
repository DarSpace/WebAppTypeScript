enum Players { //  przypisujemy wartości dla playerów X i O
  Player1 = "X",
  Player2 = "O"
}

class Board {
  currentPlayer: Players = Players.Player1; // pobranie playera 1 z enuma
  // tworzenie tablicy wszystkich pol
  cells = [
    new Cell(),
    new Cell(),
    new Cell(),
    new Cell(),
    new Cell(),
    new Cell(),
    new Cell(),
    new Cell(),
    new Cell()
  ];

  buttonInputs: NodeListOf<HTMLInputElement>;

  constructor(buttonInputs: NodeListOf<HTMLInputElement>) {
    this.buttonInputs = buttonInputs;
    this.buttonInputs.forEach((elem: HTMLInputElement, index: number) => {
      console.log(elem);
      this.cells[index] = new Cell();
      elem.addEventListener("click", v => {
        this.cells[index].onClick(this.currentPlayer, elem);
        this.winner();
        this.updateCurrentPlayer();
      });
    });
  }

  // zmiana tury graczy
  updateCurrentPlayer() {
    if (this.currentPlayer === Players.Player1) {
      this.currentPlayer = Players.Player2;
    } else if (this.currentPlayer === Players.Player2) {
      this.currentPlayer = Players.Player1;
    }
  }

  // sprawdzanie warunków wygranej
  winner() {
    console.log(this.currentPlayer);
    if (
      (this.cells[0].playerId == this.currentPlayer &&
        this.cells[1].playerId == this.currentPlayer &&
        this.cells[2].playerId == this.currentPlayer) ||
      (this.cells[3].playerId == this.currentPlayer &&
        this.cells[4].playerId == this.currentPlayer &&
        this.cells[5].playerId == this.currentPlayer) ||
      (this.cells[6].playerId == this.currentPlayer &&
        this.cells[7].playerId == this.currentPlayer &&
        this.cells[8].playerId == this.currentPlayer) ||
      (this.cells[0].playerId == this.currentPlayer &&
        this.cells[3].playerId == this.currentPlayer &&
        this.cells[6].playerId == this.currentPlayer) ||
      (this.cells[1].playerId == this.currentPlayer &&
        this.cells[4].playerId == this.currentPlayer &&
        this.cells[7].playerId == this.currentPlayer) ||
      (this.cells[2].playerId == this.currentPlayer &&
        this.cells[5].playerId == this.currentPlayer &&
        this.cells[8].playerId == this.currentPlayer) ||
      (this.cells[0].playerId == this.currentPlayer &&
        this.cells[4].playerId == this.currentPlayer &&
        this.cells[8].playerId == this.currentPlayer) ||
      (this.cells[2].playerId == this.currentPlayer &&
        this.cells[4].playerId == this.currentPlayer &&
        this.cells[6].playerId == this.currentPlayer)
    ) {
      if (this.currentPlayer == "X") alert("Win Player 1");
      else alert("Win Player 2");
    }
  }
}

class Cell {
  playerId = ""; // wartosc na pustym polu

  // klikniecie w przycisk
  onClick(playerChar: string, button: HTMLInputElement) {
    this.playerId = playerChar;
    button.value = playerChar;
    button.disabled = true;
  }
}

// pobieranie pola 3x3
const buttonInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  ".inputButton"
);
const game = new Board(buttonInputs); // tworzenie planszy
