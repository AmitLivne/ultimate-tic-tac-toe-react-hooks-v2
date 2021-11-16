import styled from "styled-components";

export const StyledModal = styled.div`
  font-size: 20px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 0.5em;
  position: relative;
  width: 35em;
  z-index: 100;
  overflow: hidden;
`;

export const ModalHeader = styled.header`
  font-size: 26px;
  padding: 0.4em 0.7692em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.077em;
  line-height: 3.077em;
  background: #0f70b8;
`;
export const ModalBody = styled.section`
  font-weight: bold;
  padding: 1em;
`;
export const ModalFooter = styled.footer`
  padding: 0 1em 1em 1em;
  display: flex;
  justify-content: flex-end;
`;
export const ModalTitle = styled.div`
  text-transform: ${({ hs }) => (hs ? "uppercase" : "")};
  margin: 0;
  color: white;
  font-weight: bold;
`;
export const ModalInputLabel = styled.label`
  font-weight: bold;
  margin-right: 1em;
`;
export const ModalInput = styled.input`
  font-size: inherit;
  padding: 0.25em;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;

export const ModalBodyForm = styled.form`
  display: flex;
  align-items: center;
`;