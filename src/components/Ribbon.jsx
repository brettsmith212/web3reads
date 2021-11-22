import React from "react";
import { RibbonSection, RibbonMenu } from "./styles/Ribbon.styled";
import SearchIcon from "./assets/search.jsx";

function Ribbon() {
  return (
    <RibbonSection>
      <RibbonMenu>
        <SearchIcon />
        <a href="#">Popular</a>
      </RibbonMenu>
    </RibbonSection>
  );
}

export default Ribbon;
