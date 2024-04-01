import Button from "../UI/Button/Button";
import { OuterContainer, InnerContainer, NextPlayer } from "./Header.styled";

export default function Header(props) {
  return (
    <OuterContainer>
      <InnerContainer>
        <Button onClick={props.onNewGameClick}>
          New Game
        </Button>
        <Button onClick={props.onHighScoresClick}>
          High Scores
        </Button>
        <NextPlayer>
          Player:<span>{props.player}</span>
        </NextPlayer>
      </InnerContainer>
    </OuterContainer>
  );
};