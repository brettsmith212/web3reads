import React from "react";
import {
  Wrapper,
  StyledHeader,
  Navbar,
  Logo,
  Logger,
} from "./styles/Navbar.styled";

function NavBar() {
  return (
    <Wrapper>
      <StyledHeader>
        <Navbar>
          <Logo>
            <img src="./src/assets/astronaut.png" alt="astronaut" />
            <a href="#">Web3 Reads</a>
          </Logo>
          <Logger>
            <button>Log In</button>
          </Logger>
        </Navbar>
      </StyledHeader>
      <hr />
    </Wrapper>
  );
}

export default NavBar;
