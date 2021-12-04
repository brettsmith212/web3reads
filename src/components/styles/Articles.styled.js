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
  height: 35rem;
  padding: 1%;
  background-color: ${({ theme }) => theme.colors.card};
  display: flex;
  justify-content: center;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  text-align: center;
  cursor: pointer;

  :hover {
    transform: scale(1.05);
  }
`;

export const ContentDiv = styled.div`
  height: 100%;
  display: flex;

  h3 {
    font-size: ${({ theme }) => theme.fontSize.h3};
    text-overflow: ellipsis;
  }

  p {
    margin-top: 3%;
    font-size: 1.4rem;
    text-overflow: ellipsis;
  }

  a {
    margin-top: 5%;
    font-size: ${({ theme }) => theme.fontSize.h4};
    text-overflow: ellipsis;
  }

  img {
    margin-top: 5%;
    width: 80%;
    max-height: 14rem;
    /* width: 20rem; */
    /* height: 10rem; */
    border-radius: 10px;
  }
`;

export const VoteDiv = styled.div`
  width: 100%;
  padding: 0 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  h4 {
    font-size: ${({ theme }) => theme.fontSize.h4};
  }
`;
