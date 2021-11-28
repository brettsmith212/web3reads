import React from "react";
import {
  Wrapper,
  StyledHeader,
  Navbar,
  Logo,
  Logger,
} from "./styles/Navbar.styled";

function NavBar({ user, signInWithGoogle, signOut }) {
  return (
    <Wrapper>
      <StyledHeader>
        <Navbar>
          <Logo>
            <img src="./src/assets/astronaut.png" alt="astronaut" />
            <a href="#">Web3 Reads</a>
          </Logo>
          <Logger>
            {user ? (
              <button onClick={signOut}>Logout</button>
            ) : (
              <button onClick={signInWithGoogle}>Log In</button>
            )}
          </Logger>
        </Navbar>
      </StyledHeader>
      <hr />
    </Wrapper>
  );
}

export default NavBar;
