import React, { useState } from "react";
import Board from "../Board";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
    const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null) }]);
    const [stepNumber, setStepNumber] = useState(0);
    const [xIsNext, setXisNext] = useState(true);
    const [winningLine, setWinningLine] = useState([]);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return { winner: squares[a], line: lines[i] }; // Return the winner and the winning line information
            }
        }

        return { winner: null, line: [] };
    };

    const handleClick = (i) => {
        const history = gameHistory.slice(0, stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const winnerInfo = calculateWinner(squares);

        if (winnerInfo.winner || squares[i]) {
            return;
        }

        squares[i] = xIsNext ? "X" : "O";
        const newWinnerInfo = calculateWinner(squares);

        setGameHistory([...history, { squares }]);
        setStepNumber(history.length);
        setXisNext(!xIsNext);
        setWinningLine(newWinnerInfo.line); // Update the winning line
    };

    const jumpTo = (step) => {
        setStepNumber(step);
        setXisNext(step % 2 === 0);
        setWinningLine([]);
    };

    const current = gameHistory[stepNumber];
    const winnerInfo = calculateWinner(current.squares);

    const moves = gameHistory.map((step, move) => {
        const desc = move ? 'Go to move #' + move : 'Go to game start';
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{desc}</button>
            </li>
        );
    });

    let status;
    if (winnerInfo.winner) {
        status = "Winner: " + winnerInfo.winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board
                    squares={current.squares}
                    onClick={i => handleClick(i)}
                    winningLine={winningLine}
                />
            </div>
            <div className="game-info">
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
        </div>
    );
};

export default Game;