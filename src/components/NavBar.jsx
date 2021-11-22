import React from "react";
import { Wrapper, StyledHeader, Navbar, Logo } from "./styles/Navbar.styled";

function NavBar() {
  return (
    <Wrapper>
      <StyledHeader>
        <Navbar>
          <Logo>
            <img src="./src/assets/astronaut.png" alt="astronaut" />
            <a href="#">Web3 Reads</a>
          </Logo>
        </Navbar>
      </StyledHeader>
      <hr />
    </Wrapper>
  );
}

export default NavBar;
