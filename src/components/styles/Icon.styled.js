import styled from "styled-components";

export const Icon = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${(props) =>
    props.voted
      ? ({ theme }) => theme.colors.voted
      : ({ theme }) => theme.colors.footer};

  :hover {
    transform: scale(1.1);
  }
`;
