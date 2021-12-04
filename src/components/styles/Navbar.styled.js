import styled from "styled-components";

export const Wrapper = styled.div`
  hr {
    border-color: ${({ theme }) => theme.colors.hr};
  }
`;

export const StyledHeader = styled.header`
  height: 8rem;
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navbar = styled.nav`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 35rem;
  height: 100%;
  display: flex;
  align-items: center;

  img {
    border-radius: 10px;
    height: 4rem;
    margin-right: 1%;
    cursor: pointer;
  }

  a {
    font-size: ${({ theme }) => theme.fontSize.h2};
    // Change to pointer when it is a real link
    cursor: default;
  }
`;

export const Logger = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

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
