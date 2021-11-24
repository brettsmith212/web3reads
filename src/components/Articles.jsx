import React, { useState, useEffect } from "react";
import { ArticleSection, Cards, Card } from "./styles/Articles.styled";

function Articles() {
  const [siteInfo, setSiteInfo] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  const [information, setInformation] = useState("");

  const urlPreview = async () => {
    try {
      const res = await fetch(
        `http://api.linkpreview.net/?key=${
          import.meta.env.VITE_URL_PREVIEW_KEY_TEST
        }&q=https://www.google.com`
      );
      // const res = await fetch(
      //   `http://api.linkpreview.net/?key=${
      //     import.meta.env.VITE_URL_PREVIEW_KEY
      //   }&q=https://www.freecodecamp.org/news/breaking-into-ethereum-crypto-web3-as-a-developer/`
      // );
      const data = await res.json();
      setSiteInfo({
        title: data.title,
        description: data.description,
        image: data.image,
        url: data.url,
      });
      setInformation(data);
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  useEffect(() => {
    urlPreview();
  }, []);

  setTimeout(() => {
    console.log("RETURNED: ", information);
  }, 5000);

  return (
    <ArticleSection>
      <Cards>
        <Card>
          <h3>How to Break into Ethereum, Crypto, and Web3 as a Developer</h3>
          <p>11-22-2021</p>
          <a
            href="https://www.freecodecamp.org/news/breaking-into-ethereum-crypto-web3-as-a-developer/"
            target="_blank"
          >
            How to Break into Ethereum, Crypto, and Web3 as a Developer
          </a>
          {/* <img src="./assets/testimg.jpeg" alt="" /> */}
        </Card>
        <Card>
          <h3>{siteInfo.title}</h3>
          <a href={siteInfo.url} target="_blank">
            {siteInfo.title}
          </a>
          <img src={siteInfo.image} alt="" />
        </Card>
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
