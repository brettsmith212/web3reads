import React, { useContext } from "react";
import AuthContext from "../auth-context";
import {
  Wrapper,
  StyledHeader,
  Navbar,
  Logo,
  Logger,
} from "./styles/Navbar.styled";

function NavBar() {
  const ctx = useContext(AuthContext);

  return (
    <Wrapper>
      <StyledHeader>
        <Navbar>
          <Logo>
            <img src="./src/assets/astronaut.png" alt="astronaut" />
            <a href="#">Web3 Reads</a>
          </Logo>
          <Logger>
            {ctx.isLoggedIn ? (
              <button onClick={() => ctx.signOut()}>Logout</button>
            ) : (
              <button onClick={() => ctx.signIn()}>Log In</button>
            )}
          </Logger>
        </Navbar>
      </StyledHeader>
      <hr />
    </Wrapper>
  );
}

export default NavBar;
