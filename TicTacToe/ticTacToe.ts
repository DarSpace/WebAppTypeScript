var PlayerToChar = ["X", "O"];

enum Players { //  przypisujemy wartości dla playerów X i O
  Player1 = 0,
  Player2,
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
    new Cell(),
  ];

  buttonInputs: NodeListOf<HTMLInputElement>;

  constructor(buttonInputs: NodeListOf<HTMLInputElement>) {
    this.buttonInputs = buttonInputs;

    this.buttonInputs.forEach((elem: HTMLInputElement, index: number) => {
      console.log(elem);

      var cell = new Cell();
      cell.button = elem;
      elem.addEventListener("click", (v) => {
        cell.onClick(this.currentPlayer);

        this.updateCurrentPlayer();
      });

      this.cells[index] = cell;
    });
  }

  getRandomInt() {
    return Math.floor(Math.random() * Math.floor(9));
  }

  computer() {
    var id = this.getRandomInt();
    var cell = this.cells[id];
    //sprawdzanie ostatniego ruchu komputera
    if (
      this.cells[0].playerId == this.currentPlayer &&
      this.cells[1].playerId == this.currentPlayer &&
      this.cells[2].playerId == null
    ) {
      this.cells[2].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[3].playerId == this.currentPlayer &&
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[5].playerId == null
    ) {
      this.cells[5].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[6].playerId == this.currentPlayer &&
      this.cells[7].playerId == this.currentPlayer &&
      this.cells[8].playerId == null
    ) {
      this.cells[8].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[1].playerId == this.currentPlayer &&
      this.cells[2].playerId == this.currentPlayer &&
      this.cells[0].playerId == null
    ) {
      this.cells[0].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[5].playerId == this.currentPlayer &&
      this.cells[3].playerId == null
    ) {
      this.cells[3].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[7].playerId == this.currentPlayer &&
      this.cells[8].playerId == this.currentPlayer &&
      this.cells[6].playerId == null
    ) {
      this.cells[6].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[0].playerId == this.currentPlayer &&
      this.cells[2].playerId == this.currentPlayer &&
      this.cells[1].playerId == null
    ) {
      this.cells[1].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[3].playerId == this.currentPlayer &&
      this.cells[5].playerId == this.currentPlayer &&
      this.cells[4].playerId == null
    ) {
      this.cells[4].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[6].playerId == this.currentPlayer &&
      this.cells[8].playerId == this.currentPlayer &&
      this.cells[7].playerId == null
    ) {
      this.cells[7].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[0].playerId == this.currentPlayer &&
      this.cells[3].playerId == this.currentPlayer &&
      this.cells[6].playerId == null
    ) {
      this.cells[6].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[1].playerId == this.currentPlayer &&
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[7].playerId == null
    ) {
      this.cells[7].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[2].playerId == this.currentPlayer &&
      this.cells[5].playerId == this.currentPlayer &&
      this.cells[8].playerId == null
    ) {
      this.cells[8].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[6].playerId == this.currentPlayer &&
      this.cells[3].playerId == this.currentPlayer &&
      this.cells[0].playerId == null
    ) {
      this.cells[0].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[7].playerId == this.currentPlayer &&
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[1].playerId == null
    ) {
      this.cells[1].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[8].playerId == this.currentPlayer &&
      this.cells[5].playerId == this.currentPlayer &&
      this.cells[2].playerId == null
    ) {
      this.cells[2].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[0].playerId == this.currentPlayer &&
      this.cells[6].playerId == this.currentPlayer &&
      this.cells[3].playerId == null
    ) {
      this.cells[3].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[1].playerId == this.currentPlayer &&
      this.cells[7].playerId == this.currentPlayer &&
      this.cells[4].playerId == null
    ) {
      this.cells[4].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[2].playerId == this.currentPlayer &&
      this.cells[5].playerId == this.currentPlayer &&
      this.cells[8].playerId == null
    ) {
      this.cells[8].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[0].playerId == this.currentPlayer &&
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[8].playerId == null
    ) {
      this.cells[8].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[8].playerId == this.currentPlayer &&
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[0].playerId == null
    ) {
      this.cells[0].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[0].playerId == this.currentPlayer &&
      this.cells[8].playerId == this.currentPlayer &&
      this.cells[4].playerId == null
    ) {
      this.cells[4].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[2].playerId == this.currentPlayer &&
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[6].playerId == null
    ) {
      this.cells[6].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[2].playerId == this.currentPlayer &&
      this.cells[6].playerId == this.currentPlayer &&
      this.cells[4].playerId == null
    ) {
      this.cells[4].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    } else if (
      this.cells[6].playerId == this.currentPlayer &&
      this.cells[4].playerId == this.currentPlayer &&
      this.cells[2].playerId == null
    ) {
      this.cells[2].onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    }

    // losowanie dopoki nie trafimy na puste pole
    else {
      while (cell.playerId != null) {
        cell = this.cells[this.getRandomInt()];
      }
      console.log(cell);
      cell.onClick(this.currentPlayer);
      this.updateCurrentPlayer();
    }
  }

  // zmiana tury graczy
  updateCurrentPlayer() {
    console.log(this.currentPlayer);
    var isGameDone = this.winner();
    if (!isGameDone) {
      if (this.currentPlayer === Players.Player1) {
        this.currentPlayer = Players.Player2;
        this.computer();
      } else if (this.currentPlayer === Players.Player2) {
        this.currentPlayer = Players.Player1;
      }
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
      if (this.currentPlayer == Players.Player1) alert("Win Player 1");
      else alert("Win Player 2");

      return true;
    } else {
      var counter = 0;
      this.cells.forEach((element) => {
        if (element.playerId == null) {
          counter++;
        }
      });

      if (counter == 0) {
        alert("remis");
        return true;
      }
    }
    return false;
  }
}

class Cell {
  playerId: Players; // wartosc na pustym polu
  button: HTMLInputElement;

  // klikniecie w przycisk
  onClick(player: Players) {
    this.playerId = player;
    this.button.value = PlayerToChar[player];
    this.button.disabled = true;
  }
}

// pobieranie pola 3x3
const buttonInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  ".inputButton"
);
const game = new Board(buttonInputs); // tworzenie planszy
