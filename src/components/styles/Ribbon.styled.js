import styled from "styled-components";

export const RibbonSection = styled.section`
  height: 6rem;
  margin-top: 2rem;
  background-color: ${({ theme }) => theme.colors.body};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const RibbonMenu = styled.div`
  width: 100%;
  margin-left: 4%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 2%;

  a {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fontSize.h4};
  }

  a:hover {
    transform: scale(1.1);
  }

  input {
    font-size: ${({ theme }) => theme.fontSize.h4};
    height: 4rem;
    width: 88%;
    padding: 1%;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.fontColor};

    ::placeholder {
      color: ${({ theme }) => theme.colors.body};
    }
  }
`;

export const RibbonButton = styled.button`
  font-size: ${({ theme }) => theme.fontSize.h4};
  background-color: ${({ theme }) => theme.colors.body};
  color: ${({ theme }) => theme.colors.fontColor};
  border: none;
  cursor: pointer;

  :hover {
    transform: scale(1.1);
  }
`;
