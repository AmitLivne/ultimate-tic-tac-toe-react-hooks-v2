import styled from "styled-components";

export const StyledHighScoresModalTableRow = styled.tr`
  background: ${({isNew}) => isNew ? "#63b7f6" : "transparent"};
`;