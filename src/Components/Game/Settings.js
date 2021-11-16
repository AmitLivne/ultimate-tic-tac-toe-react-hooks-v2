import React from "react";
import styled from "styled-components";
import Button from "../UI/Button";

const OuterContainer = styled.div`
  font-size: 26px;
  display: flex;
  justify-content: center;
  background: #0f70b8;
  padding: 1em;
  position: fixed;
  top: 0;
  width: 100vw;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  width: 31.1538em;
`;
const NextPlayer = styled.div`
  display: flex;
  font-size: inherit;
  color: #ffffff;

  span {
    position: relative;
    left: 0.4em;
    width: 0.8077em;
  }
`;

const Settings = props => {
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
          Next Player:<span>{props.player}</span>
        </NextPlayer>
      </InnerContainer>
    </OuterContainer>
  );
};

export default Settings;
