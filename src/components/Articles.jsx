import React from "react";
import { ArticleSection, Cards, Card } from "./styles/Articles.styled";
// import AuthContext from "../auth-context";

// Firebase Requirements
import firebase from "../Firebase";
import "firebase/compat/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";
const firestore = firebase.firestore();

function Articles() {
  const loadedArticles = [];
  let articlesList = [];

  // Pull Dashes for Current User from Firebase
  const articlesRef = firestore.collection("articles");
  const query = articlesRef.orderBy("publishedDate", "desc");
  const [firebaseArticles] = useCollectionData(query, { idField: "id" });

  if (firebaseArticles) {
    for (let i = 0; i < firebaseArticles.length; i++) {
      loadedArticles.push({
        title: firebaseArticles[i].title,
        description: firebaseArticles[i].description,
        image: firebaseArticles[i].image,
        url: firebaseArticles[i].url,
        createdAt: firebaseArticles[i].createdAt,
        publishedDate: firebaseArticles[i].publishedDate,
        uid: firebaseArticles[i].uid,
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
