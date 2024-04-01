import styled from "styled-components";

export const StyledButton = styled.button`
  font-size: inherit;
  line-height: inherit;
  border: none;
  padding: 0.5em;
  background: ${({ styles }) => styles && styles.bg ? styles.bg : "transparent"};
  color: ${({ disabled, styles }) => disabled ? "#7e7c7c" : (styles && styles.color ? styles.color : "#ffffff")};
  
  cursor: pointer;
  &:focus {
      outline: none;
  }
  &:hover, &:active  {
    opacity: ${({ disabled }) => disabled ? 1 : 0.7};
  }
`;