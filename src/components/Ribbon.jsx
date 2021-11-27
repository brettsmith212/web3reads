import React, { useState } from "react";
import { RibbonSection, RibbonMenu } from "./styles/Ribbon.styled";
import SearchIcon from "./assets/search.jsx";
import AddArticleModal from "./AddArticleModal";

function Ribbon() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(showModal);
  };

  return (
    <RibbonSection>
      <RibbonMenu>
        <SearchIcon />
        <a href="#">Popular</a>
        <button onClick={openModal}>Add Article</button>
        <AddArticleModal showModal={showModal} setShowModal={setShowModal} />
      </RibbonMenu>
    </RibbonSection>
  );
}

export default Ribbon;
