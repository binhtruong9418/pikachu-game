import { pokemonImages } from "../constants";

const Square = ({ value, selected, onClick}) => {
    return (
        <>
            <button
                className={
                    value > 0
                        ? selected
                            ? "square selected"
                            : "square"
                        : "non-square"
                }
                onClick={onClick}
            >
                <img
                    src={value > 0 ? pokemonImages[value] : undefined}
                    alt=""
                    style={value === 0 ? { display: "none" } : undefined}
                />
            </button>
        </>
    );
};

export default Square;
