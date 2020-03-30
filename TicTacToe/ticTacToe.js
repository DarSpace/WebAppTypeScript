var Players;
(function (Players) {
    Players["Player1"] = "X";
    Players["Player2"] = "O";
})(Players || (Players = {}));
var Board = /** @class */ (function () {
    function Board(buttonInputs) {
        this.currentPlayer = Players.Player1;
        this.movesBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
        this.buttonInputs = buttonInputs;
    }
    Board.prototype.listenForClicks = function () {
        var _this = this;
        buttonInputs.forEach(function (elem, index) {
            elem.addEventListener("click", function (event) {
                _this.movesBoard[index] = _this.currentPlayer;
                elem.value = _this.currentPlayer;
                elem.disabled = true;
                _this.updateCurrentPlayer();
                console.log(_this.movesBoard);
            });
        });
    };
    Board.prototype.updateCurrentPlayer = function () {
        if (this.currentPlayer === Players.Player1) {
            this.currentPlayer = Players.Player2;
        }
        else if (this.currentPlayer === Players.Player2) {
            this.currentPlayer = Players.Player1;
        }
    };
    return Board;
}());
var Game = /** @class */ (function () {
    function Game(buttonInputs) {
        var board = new Board(buttonInputs);
        board.listenForClicks();
    }
    return Game;
}());
var buttonInputs = document.querySelectorAll(".inputButton");
var game = new Game(buttonInputs);
