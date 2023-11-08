import React from "react";
import PropTypes from 'prop-types';

import Square from '../Square';
import Namebox from "../Namebox";
/**
 * A board for the game of tic-tac-toe.  A 3x3 square.
 */
const Board = ({ squares, onClick, winningLine }) => {
    const renderSquare = (i) => {
        // Set WinningSquare to true it part of the winningLine
        const isWinningSquare = winningLine.includes(i);

        return (
            <Square
                value={squares[i]}
                onClick={() => onClick(i)}
                isWinningSquare={isWinningSquare} // Pass true, if winning square, pass false if not included in winning square
            />
        );
    };

    return (
        <>
            <div>
                <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
                </div>
                <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
                </div>
                <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
                </div>
            </div>


            <div>
                <Namebox/>
            </div>
        </>
    )
};

Board.propTypes = {
    /**
     *  The 1..9 array of squares to display
     */
    squares: PropTypes.array.isRequired,
    /**
     *  The handler for when a square is clicked
     */
    onClick: PropTypes.func,
    // The array that contains the winning line information. For example [0, 1, 2]
    winningLine: PropTypes.array 
};

export default Board;
