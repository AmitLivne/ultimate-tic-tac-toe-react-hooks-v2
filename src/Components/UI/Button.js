import React from "react";
import { StyledButton } from "../Styles/Button.styled"

const Button = props => {
  return (
    <StyledButton
      styles={props.styles}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled || false}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;