import "./styles.css"

const Square = ({ value, onClick, isWinningSquare }) => {
    const className = `square ${isWinningSquare ? 'square--winning' : ''}`; // if winning square, add a className 'square--winning'

    return (
        <button className={className} onClick={onClick}>
            {value}
        </button>
    );
};

Square.propTypes = {
    value: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isWinningSquare: PropTypes.bool
};

export default Square;