import React from "react";
import { StyledLocalSqaure } from "../Styles/Game.styled";

const LocalBoard = props => {
  const value = props.value ? (props.value === "X" ? "X" : "O") : "";
  return (
    <StyledLocalSqaure
      val={value}
      isClickable={props.isClickable}
      {...(props.isClickable && !props.value && { onClick: props.onClick })}
    >
      {props.value}
    </StyledLocalSqaure>
  );
};

export default LocalBoard;
