import styled from "styled-components";

export const ModalBackground = styled.section`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.modal};
  position: fixed;
  top: 0rem;
  right: 0rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 50%;
  height: 75%;
  background: ${({ theme }) => theme.colors.card};
  padding-top: 3rem;
  display: flex;
  justify-content: center;

  label {
    margin: 1rem;
  }

  input {
    margin: 1rem;
    width: 30rem;
  }

  button {
    margin: 1rem;
  }
`;
