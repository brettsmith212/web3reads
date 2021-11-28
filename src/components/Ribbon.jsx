import React, { useState, useContext } from "react";
import AuthContext from "../auth-context";
import { RibbonSection, RibbonMenu } from "./styles/Ribbon.styled";
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
        <a href="#">Popular</a>
        {ctx.isAdmin ? <button onClick={openModal}>Add Article</button> : null}
        <AddArticleModal showModal={showModal} setShowModal={setShowModal} />
      </RibbonMenu>
    </RibbonSection>
  );
}

export default Ribbon;
