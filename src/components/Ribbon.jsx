import React, { useState, useContext } from "react";
import AuthContext from "../auth-context";
import {
  RibbonSection,
  RibbonMenu,
  RibbonButton,
} from "./styles/Ribbon.styled";
import SearchIcon from "./assets/search.jsx";
import AddArticleModal from "./AddArticleModal";

function Ribbon() {
  const [showModal, setShowModal] = useState(false);
  const ctx = useContext(AuthContext);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(showModal);
  };

  return (
    <RibbonSection>
      <RibbonMenu>
        <SearchIcon />
        <RibbonButton>Date</RibbonButton>
        <RibbonButton>Popular</RibbonButton>
        {ctx.isAdmin ? (
          <RibbonButton onClick={openModal}>Add Article</RibbonButton>
        ) : null}
        <AddArticleModal showModal={showModal} setShowModal={setShowModal} />
      </RibbonMenu>
    </RibbonSection>
  );
}

export default Ribbon;
