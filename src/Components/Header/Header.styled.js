import styled from "styled-components";

export const OuterContainer = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  background: #0f70b8;
  padding: 1em;
  top: 0;
  width: 100%;
  position: relative;

  @media (min-width: 620px) {
    font-size: 26px;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (min-width: 620px) {
    width: 800px;
  }
`;
export const NextPlayer = styled.div`
  display: flex;
  font-size: inherit;
  color: #ffffff;

  span {
    position: relative;
    margin-left: 0.4em;
  }
`;