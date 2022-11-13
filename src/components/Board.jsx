import React from "react";
import { getBoard } from "../functions/getBoard";
import Square from "./Square";

const Board = ({ squares, square1, square2, onClick }) => {
    const renderSquare = (x, y, selected) => {
        return (
            <Square
                onClick={() => onClick(x, y)}
                selected={selected}
                key={`${x}_${y}`}
                value={squares[x][y]}
            />
        );
    };

    const boardGame = squares.map((row, i) => (
        <div className="board-row" key={i}>
            {row.map((col, j) => {
                let selected = false;

                if (square1 && square1.x === i && square1.y === j) {
                    selected = true;
                } else if (square2 && square2.x === i && square2.y === j) {
                    selected = true;
                }
                return renderSquare(i, j, selected);
            })}
        </div>
    ));

    return boardGame.map((item) => item);
};

export default Board;
