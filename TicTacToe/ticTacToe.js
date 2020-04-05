var PlayerToChar = ["X", "O"];
var Players;
(function (Players) {
    Players[Players["Player1"] = 0] = "Player1";
    Players[Players["Player2"] = 1] = "Player2";
})(Players || (Players = {}));
var Board = /** @class */ (function () {
    function Board(buttonInputs) {
        var _this = this;
        this.currentPlayer = Players.Player1; // pobranie playera 1 z enuma
        // tworzenie tablicy wszystkich pol
        this.cells = [
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
        this.buttonInputs = buttonInputs;
        this.buttonInputs.forEach(function (elem, index) {
            console.log(elem);
            var cell = new Cell();
            cell.button = elem;
            elem.addEventListener("click", function (v) {
                cell.onClick(_this.currentPlayer);
                _this.updateCurrentPlayer();
            });
            _this.cells[index] = cell;
        });
    }
    Board.prototype.getRandomInt = function () {
        return Math.floor(Math.random() * Math.floor(9));
    };
    Board.prototype.computer = function () {
        var id = this.getRandomInt();
        var cell = this.cells[id];
        //sprawdzanie ostatniego ruchu komputera
        if (this.cells[0].playerId == this.currentPlayer &&
            this.cells[1].playerId == this.currentPlayer &&
            this.cells[2].playerId == null) {
            this.cells[2].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[3].playerId == this.currentPlayer &&
            this.cells[4].playerId == this.currentPlayer &&
            this.cells[5].playerId == null) {
            this.cells[5].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[6].playerId == this.currentPlayer &&
            this.cells[7].playerId == this.currentPlayer &&
            this.cells[8].playerId == null) {
            this.cells[8].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[1].playerId == this.currentPlayer &&
            this.cells[2].playerId == this.currentPlayer &&
            this.cells[0].playerId == null) {
            this.cells[0].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[4].playerId == this.currentPlayer &&
            this.cells[5].playerId == this.currentPlayer &&
            this.cells[3].playerId == null) {
            this.cells[3].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[7].playerId == this.currentPlayer &&
            this.cells[8].playerId == this.currentPlayer &&
            this.cells[6].playerId == null) {
            this.cells[6].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[0].playerId == this.currentPlayer &&
            this.cells[2].playerId == this.currentPlayer &&
            this.cells[1].playerId == null) {
            this.cells[1].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[3].playerId == this.currentPlayer &&
            this.cells[5].playerId == this.currentPlayer &&
            this.cells[4].playerId == null) {
            this.cells[4].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[6].playerId == this.currentPlayer &&
            this.cells[8].playerId == this.currentPlayer &&
            this.cells[7].playerId == null) {
            this.cells[7].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[0].playerId == this.currentPlayer &&
            this.cells[3].playerId == this.currentPlayer &&
            this.cells[6].playerId == null) {
            this.cells[6].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[1].playerId == this.currentPlayer &&
            this.cells[4].playerId == this.currentPlayer &&
            this.cells[7].playerId == null) {
            this.cells[7].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[2].playerId == this.currentPlayer &&
            this.cells[5].playerId == this.currentPlayer &&
            this.cells[8].playerId == null) {
            this.cells[8].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[6].playerId == this.currentPlayer &&
            this.cells[3].playerId == this.currentPlayer &&
            this.cells[0].playerId == null) {
            this.cells[0].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[7].playerId == this.currentPlayer &&
            this.cells[4].playerId == this.currentPlayer &&
            this.cells[1].playerId == null) {
            this.cells[1].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[8].playerId == this.currentPlayer &&
            this.cells[5].playerId == this.currentPlayer &&
            this.cells[2].playerId == null) {
            this.cells[2].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[0].playerId == this.currentPlayer &&
            this.cells[6].playerId == this.currentPlayer &&
            this.cells[3].playerId == null) {
            this.cells[3].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[1].playerId == this.currentPlayer &&
            this.cells[7].playerId == this.currentPlayer &&
            this.cells[4].playerId == null) {
            this.cells[4].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[2].playerId == this.currentPlayer &&
            this.cells[5].playerId == this.currentPlayer &&
            this.cells[8].playerId == null) {
            this.cells[8].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[0].playerId == this.currentPlayer &&
            this.cells[4].playerId == this.currentPlayer &&
            this.cells[8].playerId == null) {
            this.cells[8].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[8].playerId == this.currentPlayer &&
            this.cells[4].playerId == this.currentPlayer &&
            this.cells[0].playerId == null) {
            this.cells[0].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[0].playerId == this.currentPlayer &&
            this.cells[8].playerId == this.currentPlayer &&
            this.cells[4].playerId == null) {
            this.cells[4].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[2].playerId == this.currentPlayer &&
            this.cells[4].playerId == this.currentPlayer &&
            this.cells[6].playerId == null) {
            this.cells[6].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[2].playerId == this.currentPlayer &&
            this.cells[6].playerId == this.currentPlayer &&
            this.cells[4].playerId == null) {
            this.cells[4].onClick(this.currentPlayer);
            this.updateCurrentPlayer();
        }
        else if (this.cells[6].playerId == this.currentPlayer &&
            this.cells[4].playerId == this.currentPlayer &&
            this.cells[2].playerId == null) {
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
    };
    // zmiana tury graczy
    Board.prototype.updateCurrentPlayer = function () {
        console.log(this.currentPlayer);
        var isGameDone = this.winner();
        if (!isGameDone) {
            if (this.currentPlayer === Players.Player1) {
                this.currentPlayer = Players.Player2;
                this.computer();
            }
            else if (this.currentPlayer === Players.Player2) {
                this.currentPlayer = Players.Player1;
            }
        }
    };
    // sprawdzanie warunków wygranej
    Board.prototype.winner = function () {
        console.log(this.currentPlayer);
        if ((this.cells[0].playerId == this.currentPlayer &&
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
                this.cells[6].playerId == this.currentPlayer)) {
            if (this.currentPlayer == Players.Player1)
                alert("Win Player 1");
            else
                alert("Win Player 2");
            return true;
        }
        else {
            var counter = 0;
            this.cells.forEach(function (element) {
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
    };
    return Board;
}());
var Cell = /** @class */ (function () {
    function Cell() {
    }
    // klikniecie w przycisk
    Cell.prototype.onClick = function (player) {
        this.playerId = player;
        this.button.value = PlayerToChar[player];
        this.button.disabled = true;
    };
    return Cell;
}());
// pobieranie pola 3x3
var buttonInputs = document.querySelectorAll(".inputButton");
var game = new Board(buttonInputs); // tworzenie planszy
