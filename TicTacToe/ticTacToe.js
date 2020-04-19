var PlayerToChar = ["X", "O"];
var Players;
(function (Players) {
    Players[Players["Player1"] = 0] = "Player1";
    Players[Players["Player2"] = 1] = "Player2";
})(Players || (Players = {}));
var Board = /** @class */ (function () {
    function Board(gameTableDOM, size) {
        var _this = this;
        this.currentPlayer = Players.Player1; // pobranie playera 1 z enuma
        this.cells = new Array(size);
        for (var i = 0; i < size; i++) {
            var row = document.createElement("tr");
            this.cells[i] = new Array(size);
            var _loop_1 = function (j) {
                var cell = new Cell();
                var tableData = document.createElement("td");
                var cellInput = document.createElement("input");
                cellInput.className = "inputButton";
                cellInput.setAttribute("row", i.toString());
                cellInput.setAttribute("column", j.toString());
                //  cellInput.getAttribute("row");
                //cellInput.getAttribute("column");
                console.log(size);
                tableData.appendChild(cellInput);
                cell.button = tableData;
                cell.button.addEventListener("click", function (event) {
                    cell.onClick(_this.currentPlayer, _this);
                    _this.updateCurrentPlayer();
                    console.log(event.target);
                });
                row.appendChild(tableData);
                this_1.cells[i][j] = cell;
            };
            var this_1 = this;
            for (var j = 0; j < size; j++) {
                _loop_1(j);
            }
            gameTableDOM.appendChild(row);
        }
    }
    Board.prototype.updateCurrentPlayer = function () {
        if (this.currentPlayer === Players.Player1) {
            this.currentPlayer = Players.Player2;
        }
        else if (this.currentPlayer === Players.Player2) {
            this.currentPlayer = Players.Player1;
        }
    };
    // sprawdzanie warunków wygranej
    Board.prototype.winner = function (y, x) {
        var winner = false;
        console.log(x);
        console.log(y);
        if ((this.cells[0][0].playerId == this.currentPlayer &&
            this.cells[0][1].playerId == this.currentPlayer &&
            this.cells[0][2].playerId == this.currentPlayer) ||
            (this.cells[1][0].playerId == this.currentPlayer &&
                this.cells[1][1].playerId == this.currentPlayer &&
                this.cells[1][2].playerId == this.currentPlayer) ||
            (this.cells[2][0].playerId == this.currentPlayer &&
                this.cells[2][1].playerId == this.currentPlayer &&
                this.cells[2][2].playerId == this.currentPlayer) ||
            (this.cells[0][0].playerId == this.currentPlayer &&
                this.cells[1][0].playerId == this.currentPlayer &&
                this.cells[2][0].playerId == this.currentPlayer) ||
            (this.cells[0][1].playerId == this.currentPlayer &&
                this.cells[1][1].playerId == this.currentPlayer &&
                this.cells[2][1].playerId == this.currentPlayer) ||
            (this.cells[0][2].playerId == this.currentPlayer &&
                this.cells[1][2].playerId == this.currentPlayer &&
                this.cells[2][2].playerId == this.currentPlayer) ||
            (this.cells[0][0].playerId == this.currentPlayer &&
                this.cells[1][1].playerId == this.currentPlayer &&
                this.cells[2][2].playerId == this.currentPlayer) ||
            (this.cells[0][2].playerId == this.currentPlayer &&
                this.cells[1][1].playerId == this.currentPlayer &&
                this.cells[2][0].playerId == this.currentPlayer)) {
            winner = true;
        }
        ///
        ///
        if (y + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
            this.cells[y][x].playerId == this.cells[y + 2][x].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if1");
        }
        if (y + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y + 2][x - 2].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if2");
        }
        if (y + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y][x - 2].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if3");
        }
        //1111111111111
        //2222222222222
        if (x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
            this.cells[y][x].playerId == this.cells[y + 2][x].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if4");
        }
        if (x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y + 2][x + 2].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if5");
        }
        if (x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y][x + 2].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if6");
        }
        //2222222222222222222
        //3333333333333333333
        if (y + 2 <= this.size - 1 &&
            x - 2 >= 0 &&
            this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y][x - 2].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if7");
        }
        if (y + 2 <= this.size - 1 &&
            x - 2 >= 0 &&
            this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
            this.cells[y][x].playerId == this.cells[y - 2][x].playerId) {
            winner = true;
            alert("koniec gry player X");
            console.log("if8");
        }
        if (y + 2 <= this.size - 1 &&
            x - 2 >= 0 &&
            this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y - 2][x - 2].playerId) {
            // winner = true;
            alert("koniec gry player X");
            console.log("if9");
        }
        //33333333333
        //44444444444
        if (y + 2 <= this.size - 1 &&
            x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y][x + 2].playerId) {
            // winner = true;
            alert("koniec gry player X");
            console.log("if10");
        }
        if (y + 2 <= this.size - 1 &&
            x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
            this.cells[y][x].playerId == this.cells[y - 2][x].playerId) {
            // winner = true;
            alert("koniec gry player X");
            console.log("if11");
        }
        if (y + 2 <= this.size - 1 &&
            x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y - 2][x + 2].playerId) {
            //winner = true;
            alert("koniec gry player X");
            console.log("if12");
        }
        //444444444
        if (x - 1 >= 0 &&
            y - 1 >= 0 &&
            x + 1 <= this.size - 1 &&
            y + 1 <= this.size - 1) {
            if ((this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
                this.cells[y][x].playerId == this.cells[y][x - 1].playerId) ||
                (this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
                    this.cells[y][x].playerId == this.cells[y - 1][x].playerId) ||
                (this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
                    this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId) ||
                (this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
                    this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId)) {
                //winner = true;
                alert("koniec gry player X");
                console.log("if13");
            }
        }
        if (winner == true)
            alert("koniec gry player X");
        // else alert("winner  player O");
        // if (this.currentPlayer == 0) alert("Win Player 1");
        //else alert("Win Player2");
        return Board;
    };
    return Board;
}());
//==================================================
var Cell = /** @class */ (function () {
    function Cell() {
    }
    // klikniecie w przycisk
    Cell.prototype.onClick = function (player, obj) {
        this.playerId = player;
        var row = parseInt(this.button.children[0].getAttribute("row"));
        var column = parseInt(this.button.children[0].getAttribute("column"));
        obj.winner(row, column);
        console.log(this.button.children[0]);
        this.button.children[0].value = PlayerToChar[player];
        this.button.children[0].disabled = true;
    };
    return Cell;
}());
// pobieranie pola 3x3
var buttonInputs = document.querySelectorAll(".inputButton");
var gameTable = document.querySelector("#gameTable");
var game = new Board(gameTable, 3);
//
//
//
//
//=================================2wersja gry na sprawdzanie dynamiczne algorytmem ktore nie dziala=========================================
// tworzenie planszy
// /* const PlayerToChar = ["X", "O"];
// enum Players { //  przypisujemy wartości dla playerów X i O
//   Player1 = 0,
//   Player2,
// }
// class Board {
//   currentPlayer: Players = Players.Player1; // pobranie playera 1 z enuma
//   // tworzenie tablicy wszystkich pol
//   cells: Cell[][];
//   size: number;
//   buttonInputs: NodeListOf<HTMLInputElement>;
//   constructor(gameTableDOM: HTMLTableElement, size: number) {
//     this.cells = new Array(size);
//     for (let i = 0; i < size; i += 1) {
//       const row = document.createElement("tr");
//       for (let j = 0; j < size; j += 1) {
//         const cell = new Cell();
//         const tableData = document.createElement("td");
//         const cellInput = document.createElement("input");
//         cellInput.className = "inputButton";
//         tableData.appendChild(cellInput);
//         cell.button = tableData;
//         cell.button.addEventListener("click", (event: any) => {
//           cell.onClick(this.currentPlayer);
//           this.winner();
//           this.updateCurrentPlayer();
//         });
//         row.appendChild(tableData);
//         this.cells[i].push(cell);
//       }
//       gameTableDOM.appendChild(row);
//     }
//   }
//   updateCurrentPlayer() {
//     if (this.currentPlayer === Players.Player1) {
//       this.currentPlayer = Players.Player2;
//     } else if (this.currentPlayer === Players.Player2) {
//       this.currentPlayer = Players.Player1;
//     }
//   }
//   winner() {
//     console.log(this.currentPlayer);
//     if (
//       (this.cells[0][0].playerId == this.currentPlayer &&
//         this.cells[0][1].playerId == this.currentPlayer &&
//         this.cells[0][2].playerId == this.currentPlayer) ||
//       (this.cells[1][0].playerId == this.currentPlayer &&
//         this.cells[1][1].playerId == this.currentPlayer &&
//         this.cells[1][2].playerId == this.currentPlayer) ||
//       (this.cells[2][0].playerId == this.currentPlayer &&
//         this.cells[2][1].playerId == this.currentPlayer &&
//         this.cells[2][2].playerId == this.currentPlayer) ||
//       (this.cells[0][0].playerId == this.currentPlayer &&
//         this.cells[0][3].playerId == this.currentPlayer &&
//         this.cells[0][6].playerId == this.currentPlayer) ||
//       (this.cells[0][1].playerId == this.currentPlayer &&
//         this.cells[0][4].playerId == this.currentPlayer &&
//         this.cells[0][7].playerId == this.currentPlayer) ||
//       (this.cells[0][2].playerId == this.currentPlayer &&
//         this.cells[0][5].playerId == this.currentPlayer &&
//         this.cells[0][8].playerId == this.currentPlayer) ||
//       (this.cells[0][0].playerId == this.currentPlayer &&
//         this.cells[0][4].playerId == this.currentPlayer &&
//         this.cells[0][8].playerId == this.currentPlayer) ||
//       (this.cells[0][2].playerId == this.currentPlayer &&
//         this.cells[0][4].playerId == this.currentPlayer &&
//         this.cells[0][6].playerId == this.currentPlayer)
//     ) {
//       if (this.currentPlayer == Players.Player1) alert("Win Player 1");
//       else alert("Win Player 2");
//       return true;
//     } else {
//       var counter = 0;
//       // this.cells.forEach((element) => {
//       //   if (element.playerId == null) {
//       //     counter++;
//       // }
//     }
//     if (counter == 0) {
//       alert("remis");
//       return true;
//     }
//   }
//   // return false;
//   // sprawdzanie warunków wygranej
//   /* winner(y: number, x: number) {
//     if (y + 2 >= 0 && x - 2 >= 0) {
//       if ((this.cells[y][x].playerId == this.cells[y + 1][x].playerId && this.cells[y][x].playerId == this.cells[y + 2][x].playerId) ||
//       (this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId && this.cells[y][x].playerId == this.cells[y + 2][x - 2].playerId) ||
//       (this.cells[y][x].playerId == this.cells[y][x-1].playerId && this.cells[y][x].playerId == this.cells[y][x - 2].playerId)) {
//   }
//     }
//     if (y + 2 >= 0 && x + 2 <= this.size - 1) {
//       if ((this.cells[y][x].playerId == this.cells[y + 1][x].playerId && this.cells[y][x].playerId == this.cells[y + 2][x].playerId) ||
//           (this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId && this.cells[y][x].playerId == this.cells[y + 2][x + 2].playerId) ||
//           (this.cells[y][x].playerId == this.cells[y][x + 1].playerId && this.cells[y][x].playerId == this.cells[y][x + 2].playerId)) {
//       }
//     }
//     if (y + 2 <= this.size - 1 && x - 2 >= 0) {
//       if ((this.cells[y][x].playerId == this.cells[y][x - 1].playerId && this.cells[y][x].playerId == this.cells[y][x - 2].playerId) ||
//       (this.cells[y][x].playerId == this.cells[y - 1][x].playerId && this.cells[y][x].playerId == this.cells[y - 2][x].playerId) ||
//       (this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId && this.cells[y][x].playerId == this.cells[y - 2][x - 2].playerId)) {
//   }
//     }
//     if (y + 2 <= this.size - 1 && x + 2 <= this.size - 1) {
//       if ((this.cells[y][x].playerId == this.cells[y][x + 1].playerId && this.cells[y][x].playerId == this.cells[y][x + 2].playerId) ||
//           (this.cells[y][x].playerId == this.cells[y - 1][x].playerId && this.cells[y][x].playerId == this.cells[y - 2][x].playerId) ||
//           (this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId && this.cells[y][x].playerId == this.cells[y - 2][x + 2].playerId)) {
//       }
//     }
//     if (x - 1 >= 0 && y - 1 >= 0 && x + 1 <= this.size - 1 && y + 1 <= this.size - 1) {
//       if ((this.cells[y][x].playerId == this.cells[y][x + 1].playerId && this.cells[y][x].playerId == this.cells[y][x - 1].playerId) ||
//       (this.cells[y][x].playerId == this.cells[y + 1][x].playerId && this.cells[y][x].playerId == this.cells[y - 1][x].playerId) ||
//       (this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId && this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId) ||
//       (this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId && this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId)) {
//   }
//     }
//   */
//   //================================================================
//   /* else if (
//         this.currentPlayer == Players.Player1
//       )
//         alert("Win Player 1");
//       else alert("Win Player 2");
// */
//   // return true;
//   /*else  {
//       var counter = 0;
//       this.cells.forEach((element) => {
//         if (element.playerId == null) {
//           counter++;
//         }
//       });
//       else if (counter == 0) {
//         alert("remis");
//         return true;
//       }
//     } */
//   //return false;
//   //----------------------------------------------------------------
// }
// class Cell {
//   playerId: Players; // wartosc na pustym polu
//   button: HTMLTableDataCellElement;
//   cellIdX: number;
//   cellIdY: number;
//   //constructor(y: number, x: number) {
//   //this.cellIdY = y;
//   // this.cellIdX = x;
//   // }
//   // klikniecie w przycisk
//   onClick(player: Players) {
//     this.playerId = player;
//     this.button.children[0].value = PlayerToChar[player];
//     this.button.children[0].disabled = true;
//   }
// }
// // pobieranie pola 3x3
// const buttonInputs: NodeListOf<HTMLInputElement> = document.querySelectorAll(
//   ".inputButton"
// );
// const gameTable: HTMLTableElement = document.querySelector(
//   "#gameTable"
// ) as HTMLTableElement;
// const game = new Board(gameTable, 3);
//============
/*//======================================
    if (y + 2 >= 0 && x - 2 >= 0) {
      if (
        //(this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
        //  this.cells[y][x].playerId == this.cells[y + 2][x].playerId) ||
        //(this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
         // this.cells[y][x].playerId == this.cells[y + 2][x - 2].playerId) ||
       // (this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
      //    this.cells[y][x].playerId == this.cells[y][x - 2].playerId)
      ) {
      }
    } else if (y + 2 >= 0 && x + 2 <= this.size - 1) {
      if (
       // (this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
       //   this.cells[y][x].playerId == this.cells[y + 2][x].playerId) ||
       // (this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
         // this.cells[y][x].playerId == this.cells[y + 2][x + 2].playerId) ||
       // (this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
         // this.cells[y][x].playerId == this.cells[y][x + 2].playerId)
      ) {
      }
    }
    if (y + 2 <= this.size - 1 && x - 2 >= 0) {
      if (
       // (this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
       //   this.cells[y][x].playerId == this.cells[y][x - 2].playerId) ||
       // (this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
        //  this.cells[y][x].playerId == this.cells[y - 2][x].playerId) ||
       // (this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId &&
         // this.cells[y][x].playerId == this.cells[y - 2][x - 2].playerId)
      ) {
      }
    }
    if (y + 2 <= this.size - 1 && x + 2 <= this.size - 1) {
      if (
       // (this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
      //    this.cells[y][x].playerId == this.cells[y][x + 2].playerId) ||
       // (this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
      //    this.cells[y][x].playerId == this.cells[y - 2][x].playerId) ||
        //(this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId &&
       //   this.cells[y][x].playerId == this.cells[y - 2][x + 2].playerId)
      ) {
      }
    }
    if (
      x - 1 >= 0 &&
      y - 1 >= 0 &&
      x + 1 <= this.size - 1 &&
      y + 1 <= this.size - 1
    ) {
      if (
        (this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
          this.cells[y][x].playerId == this.cells[y][x - 1].playerId) ||
        (this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
          this.cells[y][x].playerId == this.cells[y - 1][x].playerId) ||
        (this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
          this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId) ||
        (this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
          this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId)
      ) {
      ////////////////////////
      ////////////////////////
      ////////////////////////
      ////////////////////////
      ////////////////////////
    //----------------
    /* winner(y: number, x: number) {
    let winner = false;

    if (
      y + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
      this.cells[y][x].playerId == this.cells[y + 2][x].playerId
    ) {
      winner = true;
    }

    if (
      y + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y + 2][x - 2].playerId
    ) {
      winner = true;
    }

    if (
      y + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y][x - 2].playerId
    ) {
      winner = true;
    }
    //1111111111111
    //2222222222222
    if (
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
      this.cells[y][x].playerId == this.cells[y + 2][x].playerId
    ) {
      winner = true;
    }
    if (
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y + 2][x + 2].playerId
    ) {
      winner = true;
    }

    if (
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y][x + 2].playerId
    ) {
      winner = true;
    }
    //2222222222222222222
    //3333333333333333333
    if (
      y + 2 <= this.size - 1 &&
      x - 2 >= 0 &&
      this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y][x - 2].playerId
    ) {
      winner = true;
    }
    if (
      y + 2 <= this.size - 1 &&
      x - 2 >= 0 &&
      this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
      this.cells[y][x].playerId == this.cells[y - 2][x].playerId
    ) {
      winner = true;
    }
    if (
      y + 2 <= this.size - 1 &&
      x - 2 >= 0 &&
      this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId &&
      this.cells[y][x].playerId == this.cells[y - 2][x - 2].playerId
    ) {
      winner = true;
    }
    //33333333333
    //44444444444
    if (
      y + 2 <= this.size - 1 &&
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y][x + 2].playerId
    ) {
      winner = true;
    }

    if (
      y + 2 <= this.size - 1 &&
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
      this.cells[y][x].playerId == this.cells[y - 2][x].playerId
    ) {
      winner = true;
    }

    if (
      y + 2 <= this.size - 1 &&
      x + 2 <= this.size - 1 &&
      this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId &&
      this.cells[y][x].playerId == this.cells[y - 2][x + 2].playerId
    ) {
      winner = true;
    }
    //444444444

    if (
      x - 1 >= 0 &&
      y - 1 >= 0 &&
      x + 1 <= this.size - 1 &&
      y + 1 <= this.size - 1
    ) {
      if (
        (this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
          this.cells[y][x].playerId == this.cells[y][x - 1].playerId) ||
        (this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
          this.cells[y][x].playerId == this.cells[y - 1][x].playerId) ||
        (this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
          this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId) ||
        (this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
          this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId)
      ) {
        winner = true;
      }
    }

    {
      if ((winner = true)) alert("koniec gry");
      else alert("winner");

      // if (this.currentPlayer == 0) alert("Win Player 1");
      //else alert("Win Player2");
    }
    return Board;
  }
}
*/
