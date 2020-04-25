const PlayerToChar = ["X", "O"];

enum Players { //  przypisujemy wartości dla playerów X i O
  Player1 = 0,
  Player2,
}

class Board {
  currentPlayer: Players = Players.Player1; // pobranie playera 1 z enuma
  // tworzenie tablicy wszystkich pol
  cells: Cell[][];
  size: number;

  buttonInputs: NodeListOf<HTMLInputElement>;

  constructor(gameTableDOM: HTMLTableElement, size: number) {
    this.cells = new Array(size);

    for (let i = 0; i < size; i++) {
      const row = document.createElement("tr");
      this.cells[i] = new Array(size);
      for (let j = 0; j < size; j++) {
        const cell = new Cell();
        const tableData = document.createElement("td");
        const cellInput = document.createElement("input");
        cellInput.className = "inputButton";
        cellInput.setAttribute("row", i.toString());
        cellInput.setAttribute("column", j.toString());

        console.log(size);
        tableData.appendChild(cellInput);
        cell.button = tableData;
        cell.button.addEventListener("click", (event: any) => {
          cell.onClick(this.currentPlayer, this);
          this.updateCurrentPlayer();
          console.log(event.target);
        });
        row.appendChild(tableData);

        this.cells[i][j] = cell;
      }

      gameTableDOM.appendChild(row);
    }
  }

  updateCurrentPlayer() {
    if (this.currentPlayer === Players.Player1) {
      this.currentPlayer = Players.Player2;
    } else if (this.currentPlayer === Players.Player2) {
      this.currentPlayer = Players.Player1;
    }
  }

  // sprawdzanie warunków wygranej

  winner(y: number, x: number) {
    let winner = false;
    console.log(x);
    console.log(y);

    if (
      y + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
      this.cells[y][x].playerId == this.cells[y + 2][x].playerId
    ) {
      winner = true;
      console.log("if1");
    }

    if (
      y + 2 <= this.size - 1 &&
      x - 2 >= 0 &&
      this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y + 2][x - 2].playerId
    ) {
      winner = true;
      console.log("if2");
    }

    if (
      x - 2 >= 0 &&
      this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y][x - 2].playerId
    ) {
      winner = true;

      console.log("if3");
    }

    if (
      x + 2 <= this.size - 1 &&
      y + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y + 2][x + 2].playerId
    ) {
      winner = true;

      console.log("if5");
    }

    if (
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y][x + 2].playerId
    ) {
      winner = true;

      console.log("if6");
    }

    if (
      y - 2 >= 0 &&
      this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
      this.cells[y][x].playerId == this.cells[y - 2][x].playerId
    ) {
      winner = true;

      console.log("if8");
    }
    if (
      x - 2 >= 0 &&
      y - 2 >= 0 &&
      this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y - 2][x - 2].playerId
    ) {
      winner = true;

      console.log("if9");
    }

    if (
      y - 2 >= 0 &&
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y - 2][x + 2].playerId
    ) {
      winner = true;

      console.log("if12");
    }

    if (
      x - 1 >= 0 &&
      x + 1 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y][x - 1].playerId
    ) {
      winner = true;

      console.log("if13");
    }

    if (
      y - 1 >= 0 &&
      y + 1 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
      this.cells[y][x].playerId == this.cells[y - 1][x].playerId
    ) {
      winner = true;

      console.log("if14");
    }

    if (
      x - 1 >= 0 &&
      y - 1 >= 0 &&
      x + 1 <= this.size - 1 &&
      y + 1 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId
    ) {
      winner = true;

      console.log("if15");
    }

    if (
      x - 1 >= 0 &&
      y - 1 >= 0 &&
      x + 1 <= this.size - 1 &&
      y + 1 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId
    ) {
      winner = true;

      console.log("if16");
    }

    if (winner == true)
      alert("winner" + " " + PlayerToChar[this.cells[y][x].playerId]);

    return Board;
  }
}

//==================================================
class Cell {
  playerId: Players; // wartosc na pustym polu
  button: HTMLTableDataCellElement;

  // klikniecie w przycisk
  onClick(player: Players, obj: Board) {
    this.playerId = player;
    const row = parseInt(this.button.children[0].getAttribute("row") as string);
    const column = parseInt(
      this.button.children[0].getAttribute("column") as string
    );

    obj.winner(row, column);
    console.log(this.button.children[0]);
    this.button.children[0].value = PlayerToChar[player];
    this.button.children[0].disabled = true;
  }
}

// pobieranie pola 3x3
const buttonInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
  ".inputButton"
);

const gameTable: HTMLTableElement = document.querySelector(
  "#gameTable"
) as HTMLTableElement;
const game = new Board(gameTable, 7);
