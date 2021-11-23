import styled from "styled-components";

export const ArticleSection = styled.section`
  /* height: 20rem; */
  width: 95%;
  margin: 2rem;
  background-color: ${({ theme }) => theme.colors.body};
`;

export const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  gap: 5rem;
`;

export const Card = styled.div`
  width: 30rem;
  height: 30rem;
  padding: 2.5%;
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  justify-content: center;
  border-radius: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
  }

  p {
    margin-top: 3%;
    font-size: 1.4rem;
  }
`;
