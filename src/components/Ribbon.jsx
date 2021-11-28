import React, { useState } from "react";
import { RibbonSection, RibbonMenu } from "./styles/Ribbon.styled";
import SearchIcon from "./assets/search.jsx";
import AddArticleModal from "./AddArticleModal";

function Ribbon({ user }) {
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
        {user ? <button onClick={openModal}>Add Article</button> : null}
        <AddArticleModal showModal={showModal} setShowModal={setShowModal} />
      </RibbonMenu>
    </RibbonSection>
  );
}

export default Ribbon;
