import React from "react";
import { ArticleSection, Cards, Card } from "./styles/Articles.styled";

function Articles() {
  const urlPreview = async () => {
    // const response = await fetch(
    //   "http://api.linkpreview.net/?key=09ed415a6cc37c0bed1afd30f97ae8ea&q=https://www.google.com"
    // );
    const response = await fetch("https://www.google.com");

    console.log(response);
    return response;
  };

  const res = urlPreview();
  console.log(res.title);

  return (
    <ArticleSection>
      <Cards>
        <Card>
          <h3>How to Become an Ethereum Developer</h3>
          <p>11-22-2021</p>
          <a
            href="https://www.freecodecamp.org/news/breaking-into-ethereum-crypto-web3-as-a-developer/"
            target="_blank"
          >
            Website
          </a>
        </Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
        <Card>Card</Card>
      </Cards>
    </ArticleSection>
  );
}

export default Articles;
