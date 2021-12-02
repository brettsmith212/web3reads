import React, { useContext } from "react";
import { ArticleSection, Cards, Card } from "./styles/Articles.styled";
import AuthContext from "../auth-context";

// Firebase Requirements
import firebase from "../Firebase";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

function Articles() {
  const loadedArticles = [];
  let articlesList = [];
  const ctx = useContext(AuthContext);
  console.log(ctx.search);

  // Pull Dashes for Current User from Firebase
  const articlesRef = firestore.collection("articles");
  const query = articlesRef.orderBy("publishedDate", "desc");
  const [firebaseArticles] = useCollectionData(query, { idField: "id" });

  if (firebaseArticles) {
    const filteredArticles = firebaseArticles.filter((article) => {
      return article.title.toLowerCase().includes(ctx.search.toLowerCase());
    });

    for (let i = 0; i < filteredArticles.length; i++) {
      loadedArticles.push({
        title: filteredArticles[i].title,
        description: filteredArticles[i].description,
        image: filteredArticles[i].image,
        url: filteredArticles[i].url,
        createdAt: filteredArticles[i].createdAt,
        publishedDate: filteredArticles[i].publishedDate,
        uid: filteredArticles[i].uid,
      });
    }
  }

  articlesList = loadedArticles.map((article) => {
    return (
      <Card
        onClick={() => {
          window.open(article.url);
        }}
        key={article.createdAt}
      >
        <a href={article.url} target="_blank">
          <h3>{article.title}</h3>
          <p>{article.publishedDate}</p>
          <img src={article.image} alt="" />
        </a>
      </Card>
    );
  });

  return (
    <ArticleSection>
      <Cards>{articlesList}</Cards>
    </ArticleSection>
  );
}

export default Articles;
