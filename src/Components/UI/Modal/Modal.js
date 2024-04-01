import {React, useState} from "react";
import {
    StyledModal,
    ModalHeader,
    Backdrop,
    ModalTitle,
    ModalBody,
    ModalFooter,
    ModalInputLabel,
    ModalInput,
    ModalBodyForm
} from "./Modal.styled";
import ReactDom from "react-dom";
import Button from "../Button/Button";
import {HighScoresModal} from "../../Modals/HighScoresModal/HighScoresModal";

const ModalOverlay = (props) => {
    const [playerName, setPlayerName] = useState("");
    const [playerScore, setPlayerScore] = useState();

    const nameChangeHandler = event => {
        setPlayerName(event.target.value);
    };
    const submitHandler = event => {
        event.preventDefault();
        const playerToAdd = {name: playerName, score: props.modal.score};
        setPlayerScore(props.modal.score);
        props.onSubmitName(playerToAdd);
    };

    const isValidInput = () => {
        return playerName.trim().length !== 0;
    };

    return (
        <StyledModal>
            <ModalHeader>
                <ModalTitle hs={props.modal.type === "hs"}>{props.modal.header}</ModalTitle>
                {props.modal.type === "hs" && (
                    <Button type="button" onClick={props.onClick}>
                        X
                    </Button>
                )}
            </ModalHeader>
            {props.modal.type === "hs" && (
                <HighScoresModal rows={props.modal.body} newPlayer={{name: playerName, score: playerScore}}/>
            )}
            {props.modal.type === "d" && (
                <ModalBody>{props.modal.body}</ModalBody>
            )}
            {props.modal.type === "w" && (
                <ModalBody>
                    <ModalBodyForm onSubmit={submitHandler}>
                        <ModalInputLabel htmlFor="name">Your name:</ModalInputLabel>
                        <ModalInput
                            id="name"
                            type="text"
                            value={playerName}
                            onChange={nameChangeHandler}
                        />
                        <Button
                            type="submit"
                            styles={{color: "#0f70b8"}}
                            disabled={!isValidInput()}
                        >
                            Submit
                        </Button>
                    </ModalBodyForm>
                </ModalBody>
            )}
            {(props.modal.type === "d" || props.modal.type === "w") && (
                <ModalFooter>
                    <Button
                        type="button"
                        onClick={props.onNewGameClick}
                        styles={{bg: "#0f70b8"}}
                    >
                        New Game
                    </Button>
                </ModalFooter>
            )}
        </StyledModal>
    );
};
const Modal = props => {
    return (
        <>
            {ReactDom.createPortal(
                <Backdrop></Backdrop>,
                document.getElementById("backdrop-root")
            )}
            {ReactDom.createPortal(
                <ModalOverlay
                    modal={props.modal}
                    onClick={props.onClick}
                    onNewGameClick={props.onNewGameClick}
                    onSubmitName={(player) => props.onSubmitName(player)}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
};

export default Modal;
