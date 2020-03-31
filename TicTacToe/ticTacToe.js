var Players;
(function (Players) {
    Players["Player1"] = "X";
    Players["Player2"] = "O";
})(Players || (Players = {}));
var Board = /** @class */ (function () {
    function Board(buttonInputs) {
        var _this = this;
        this.currentPlayer = Players.Player1;
        this.cells = [
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
        this.buttonInputs = buttonInputs;
        this.buttonInputs.forEach(function (elem, index) {
            console.log(elem);
            _this.cells[index] = new Cell();
            elem.addEventListener("click", function (v) {
                _this.cells[index].onClick(_this.currentPlayer, elem);
                _this.winner();
                _this.updateCurrentPlayer();
            });
        });
    }
    Board.prototype.updateCurrentPlayer = function () {
        if (this.currentPlayer === Players.Player1) {
            this.currentPlayer = Players.Player2;
        }
        else if (this.currentPlayer === Players.Player2) {
            this.currentPlayer = Players.Player1;
        }
    };
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
            if (this.currentPlayer == "X")
                alert("Win Player 1");
            else
                alert("Win Player 2");
        }
    };
    return Board;
}());
var Cell = /** @class */ (function () {
    function Cell() {
        this.playerId = "";
    }
    Cell.prototype.onClick = function (playerChar, button) {
        this.playerId = playerChar;
        button.value = playerChar;
        button.disabled = true;
    };
    return Cell;
}());
var buttonInputs = document.querySelectorAll(".inputButton");
var game = new Board(buttonInputs);
