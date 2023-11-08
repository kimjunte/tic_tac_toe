import React from "react";
import PropTypes from 'prop-types';
import "./styles.css"

/**
 * A square in the game of tic tac toe.   Can be clicked or the square can contain a value.
 */

const Square = ({ value, onClick, isWinningSquare }) => {
    const className = `square ${isWinningSquare ? 'square--winning' : ''}`; // if winning square, add a className 'square--winning'

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

Square.propTypes = {
    /**
     *  The handler for when a square is clicked
     */
    value: PropTypes.string,
    /**
     *  The value to put in the square
     */
    onClick: PropTypes.func.isRequired,
    // The boolean that states if the square is a winning sqaure. True if winning square.
    isWinningSquare: PropTypes.bool
};

export default Square;