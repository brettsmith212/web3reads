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
  const [showSearch, setShowSearch] = useState(false);
  const ctx = useContext(AuthContext);

  const openModal = () => {
    setShowModal((prev) => !prev);
    console.log(showModal);
  };

  const onChangeHandler = (e) => {
    ctx.setSearch(e.target.value);
  };

  const orderByDateHandler = () => {
    ctx.setOrderBy("publishedDate");
  };

  const orderByPopularHandler = () => {
    ctx.setOrderBy("upVote");
  };

  return (
    <RibbonSection>
      <RibbonMenu>
        <SearchIcon showSearch={showSearch} setShowSearch={setShowSearch} />
        {showSearch ? (
          <input
            type="text"
            placeholder="Search"
            onChange={onChangeHandler}
          ></input>
        ) : null}
        {!showSearch ? (
          <>
            <RibbonButton onClick={orderByDateHandler}>
              Most Recent
            </RibbonButton>
            <RibbonButton onClick={orderByPopularHandler}>Popular</RibbonButton>
            {ctx.isAdmin ? (
              <RibbonButton onClick={openModal}>Add Article</RibbonButton>
            ) : null}{" "}
          </>
        ) : null}
        <AddArticleModal showModal={showModal} setShowModal={setShowModal} />
      </RibbonMenu>
    </RibbonSection>
  );
}

export default Ribbon;
