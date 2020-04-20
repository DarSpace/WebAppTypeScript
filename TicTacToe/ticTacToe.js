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
        if (y + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
            this.cells[y][x].playerId == this.cells[y + 2][x].playerId) {
            winner = true;
            console.log("if1");
        }
        if (y + 2 <= this.size - 1 &&
            x - 2 >= 0 &&
            this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y + 2][x - 2].playerId) {
            winner = true;
            console.log("if2");
        }
        if (x - 2 >= 0 &&
            this.cells[y][x].playerId == this.cells[y][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y][x - 2].playerId) {
            winner = true;
            console.log("if3");
        }
        if (x + 2 <= this.size - 1 &&
            y + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y + 2][x + 2].playerId) {
            winner = true;
            console.log("if5");
        }
        if (x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y][x + 2].playerId) {
            winner = true;
            console.log("if6");
        }
        if (y - 2 >= 0 &&
            this.cells[y][x].playerId == this.cells[y - 1][x].playerId &&
            this.cells[y][x].playerId == this.cells[y - 2][x].playerId) {
            winner = true;
            console.log("if8");
        }
        if (x - 2 >= 0 &&
            y - 2 >= 0 &&
            this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y - 2][x - 2].playerId) {
            winner = true;
            console.log("if9");
        }
        if (y - 2 >= 0 &&
            x + 2 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y - 2][x + 2].playerId) {
            winner = true;
            console.log("if12");
        }
        if (x - 1 >= 0 &&
            x + 1 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y][x - 1].playerId) {
            winner = true;
            console.log("if13");
        }
        if (y - 1 >= 0 &&
            y + 1 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x].playerId &&
            this.cells[y][x].playerId == this.cells[y - 1][x].playerId) {
            winner = true;
            console.log("if14");
        }
        if (x - 1 >= 0 &&
            y - 1 >= 0 &&
            x + 1 <= this.size - 1 &&
            y + 1 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x + 1].playerId &&
            this.cells[y][x].playerId == this.cells[y - 1][x - 1].playerId) {
            winner = true;
            console.log("if15");
        }
        if (x - 1 >= 0 &&
            y - 1 >= 0 &&
            x + 1 <= this.size - 1 &&
            y + 1 <= this.size - 1 &&
            this.cells[y][x].playerId == this.cells[y + 1][x - 1].playerId &&
            this.cells[y][x].playerId == this.cells[y - 1][x + 1].playerId) {
            winner = true;
            console.log("if16");
        }
        if (winner == true)
            alert("winner" + " " + PlayerToChar[this.cells[y][x].playerId]);
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
var game = new Board(gameTable, 8);
