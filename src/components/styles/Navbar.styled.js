import styled from "styled-components";

export const Wrapper = styled.div`
  hr {
    border-color: ${({ theme }) => theme.colors.hr};
  }
`;

export const StyledHeader = styled.header`
  height: 10vh;
  background-color: ${({ theme }) => theme.colors.header};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Navbar = styled.nav`
  width: 90%;
  height: 80%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const Logo = styled.div`
  width: 100%;
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
  }
`;
