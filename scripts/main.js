import { BoardTetris } from '/scripts/BoardTetris.js'
import { Tetromino, TetrominoTypes } from '/scripts/tetromino.js'

const canvasTetris = document.getElementById("canvas-tetris");
const rows = 20;
const cols = 10;
const cellSize = 26;
const space = 2;

const board = new BoardTetris(canvasTetris, rows, cols, cellSize, space);

const tetrominoType = TetrominoTypes.T;
const tetromino = new Tetromino(canvasTetris, cellSize, tetrominoType.shapes, tetrominoType.initPosition, tetrominoType.id);

function update() {

    board.draw();
    tetromino.draw(board);
    requestAnimationFrame(update);

}

update();