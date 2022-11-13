import { useEffect, useState } from "react";
import { getBoard, updateBoard } from "../functions/getBoard";
import Board from "./Board";

const Game = () => {
    const row = 10;
    const col = 20;
    const amount = 36;
    const [board, setBoard] = useState(getBoard(row, col, amount));
    const [square1, setSquare1] = useState(null);
    const [square2, setSquare2] = useState(null);

    const checkPoint = (p1, p2) => {
        if (checkLineX(p1, p2)) {
            const data = updateBoard(p1, p2, board);
            setBoard(data);
        }
        if (checkLineY(p1, p2)) {
            const data = updateBoard(p1, p2, board);
            setBoard(data);
        }
        if(checkTriangle(p1, p2)) {
            const data = updateBoard(p1, p2, board);
            setBoard(data);
        }
    };

    const checkLineX = (p1, p2) => {
        let pmin = p1.y > p2.y ? p2 : p1;
        let pmax = p1.y > p2.y ? p1 : p2;
        console.log(pmin, pmax);
        if (
            board[pmin.x][pmin.y] === board[pmax.x][pmax.y] &&
            pmin.x === pmax.x && !(pmin.x === pmax.x && pmin.y === pmax.y)
        ) {
            for (let i = pmin.y + 1; i < pmax.y; i++) {
                if (board[pmin.x][i] !== 0) {
                    console.log("checked false");
                    return false;
                }
            }
            return true;
        }
        console.log("checked false");
        return false;
    };

    const checkLineY = (p1, p2) => {
        let pmin = p1.x > p2.x ? p2 : p1;
        let pmax = p1.x > p2.x ? p1 : p2;
        console.log(pmin, pmax);
        if (
            board[pmin.x][pmin.y] === board[pmax.x][pmax.y] &&
            pmin.y === pmax.y && !(pmin.x === pmax.x && pmin.y === pmax.y)
        ) {
            for (let i = pmin.x + 1; i < pmax.x; i++) {
                if (board[i][pmin.y] !== 0) {
                    console.log("checked false");
                    return false;
                }
            }
            return true;
        }
        console.log("checked false");
        return false;
    };

    const checkTriangle = (p1, p2) => {
        let pmin = p1.x > p2.x ? p2 : p1;
        let pmax = p1.x > p2.x ? p1 : p2;
        if (board[pmin.x][pmin.y] === board[pmax.x][pmax.y]) {
            // check triangle bottom
            let pCheck1 = { x: pmin.x, y: pmax.y };
            if (checkLineX(pmin, pCheck1) && checkLineY(pCheck1, pmax)) {
                return true;
            }
            // check triangle 2
            let pCheck2 = { x: pmax.x, y: pmin.y };
            if (checkLineX(pCheck2, pmax) && checkLineY(pmin, pCheck2)) {
                return true;
            }

            return false;
        }
        return false;
    };

    const handleClick = (x, y) => {
        // check if item is out of board
        if (board[x][y] === 0) return;

        // check if item is already clicked
        if (!square1) {
            setSquare1({ x, y });
            return;
        }
        setSquare2({ x, y });
    };

    useEffect(() => {
        if (square1 && square2) {
            checkPoint(square1, square2);
            setSquare1(null);
            setSquare2(null);
        }
    }, [square1, square2]);

    return (
        <div>
            <Board
                squares={board}
                square1={square1}
                square2={square2}
                onClick={handleClick}
            />
        </div>
    );
};

export default Game;
