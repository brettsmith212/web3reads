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
  const [showMyArticles, setShowMyArticles] = useState(false);
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

  const escPressed = (e) => {
    if (e.key === "Escape") {
      ctx.setSearch("");
      setShowSearch(false);
    }
  };

  const myArticlesToggleHandler = () => {
    setShowMyArticles((prev) => !prev);
    console.log("ARTICLE: ", showMyArticles);
  };

  const myArticlesTabSelected = () => {
    if (showMyArticles) {
      return (
        <>
          <RibbonButton onClick={orderByDateHandler}>Most Recent</RibbonButton>
          <RibbonButton onClick={orderByPopularHandler}>Popular</RibbonButton>
          <RibbonButton onClick={myArticlesToggleHandler} active>
            My Upvoted Articles
          </RibbonButton>
        </>
      );
    }
  };

  return (
    <RibbonSection onKeyDown={escPressed} tabIndex="1">
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
            {ctx.orderBy === "publishedDate" ? (
              <>
                <RibbonButton onClick={orderByDateHandler} active>
                  Most Recent
                </RibbonButton>
                <RibbonButton onClick={orderByPopularHandler}>
                  Popular
                </RibbonButton>
              </>
            ) : (
              <>
                <RibbonButton onClick={orderByDateHandler}>
                  Most Recent
                </RibbonButton>
                <RibbonButton onClick={orderByPopularHandler} active>
                  Popular
                </RibbonButton>
              </>
            )}
            {ctx.isAdmin ? (
              <RibbonButton onClick={openModal}>Add Article</RibbonButton>
            ) : null}
          </>
        ) : null}
        <AddArticleModal showModal={showModal} setShowModal={setShowModal} />
      </RibbonMenu>
    </RibbonSection>
  );
}

export default Ribbon;
