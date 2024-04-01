import {LocalBoardCell} from "./LocalBoard.styled";

export default function LocalBoard(props) {
    const value = props.value ? (props.value === "X" ? "X" : "O") : "";
    return (
        <LocalBoardCell
            val={value}
            isClickable={props.isClickable}
            className={`local-board`}
            {...(props.isClickable && !props.value && {onClick: props.onClick})}
        >
            {props.value}
        </LocalBoardCell>
    );
};