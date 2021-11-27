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

  button {
    height: 3rem;
    width: 10rem;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.card};
    color: ${({ theme }) => theme.colors.fontColor};
  }

  button:hover {
    background-color: ${({ theme }) => theme.colors.header};
  }
`;
