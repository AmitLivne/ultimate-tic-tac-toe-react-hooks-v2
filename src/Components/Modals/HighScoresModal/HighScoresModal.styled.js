import styled from "styled-components";

export const HighScoresModalTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5em;

  thead {
    text-align: left;
    height: 1.5em;
    color: #0084e6;
    font-size: 14px;

    tr th:first-child {
      padding-left: 0.8em;
    }
    tr th:last-child {
      text-align: center;
    }

    @media (min-width: 620px) {
    font-size: 22px;
}
  }
  tbody {
    tr {
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
      line-height: 2em;
      border-radius: 0.7em;
      
      td:first-child {
        padding-left: 0.8em;
        border-top-left-radius: 0.7em;
        border-bottom-left-radius: 0.7em;
      }
      td:last-child {
        text-align: center;
        border-top-right-radius: 0.7em;
        border-bottom-right-radius: 0.7em;
      }
    }
  }
`;