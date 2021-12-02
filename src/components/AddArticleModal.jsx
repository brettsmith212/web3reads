import React, { useRef, useState, useContext } from "react";
import {
  ModalBackground,
  ModalWrapper,
  FormWrapper,
} from "./styles/AddArticleModal.styled";

// Firebase Requirements
import AuthContext from "../auth-context";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
const firestore = firebase.firestore();

function AddArticleModal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const urlInputRef = useRef();
  const [url, setUrl] = useState("");
  const ctx = useContext(AuthContext);

  const [siteInfo, setSiteInfo] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
    publishedDate: "",
  });

  const urlData = async () => {
    try {
      // DEV SERVER TEST API ACCESS
      //   const res = await fetch(
      //     `http://api.linkpreview.net/?key=${
      //       import.meta.env.VITE_URL_PREVIEW_KEY_TEST
      //     }&q=${url}`
      //   );

      // DEV SERVER API ACCESS
      // const res = await fetch(
      //   `https://api.linkpreview.net/?key=${
      //     import.meta.env.VITE_URL_PREVIEW_KEY
      //   }&q=${url}`
      // );

      // NETLIFY API ACCESS
      const res = await fetch(
        `https://api.linkpreview.net/?key=${
          import.meta.env.VITE_URL_PREVIEW_KEY
        }&q=${url}`
      );

      const data = await res.json();
      setSiteInfo({
        title: data.title,
        description: data.description,
        image: data.image,
        url: data.url,
      });
    } catch (err) {
      console.log("ERROR: ", err);
    }
  };

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    const enteredUrl = urlInputRef.current.value;
    setUrl(enteredUrl);
    console.log("SUBMITTING: ", enteredUrl);
    urlData();
  };

  // Firebase handling
  const articlesRef = firestore.collection("articles");
  const handleFirebaseSubmit = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = ctx.auth.currentUser;
    const { serverTimestamp } = firebase.firestore.FieldValue;

    await articlesRef.add({
      title: siteInfo.title,
      description: siteInfo.description,
      image: siteInfo.image,
      url: siteInfo.url,
      createdAt: serverTimestamp(),
      publishedDate: siteInfo.publishedDate,
      uid,
      photoURL,
    });
  };

  return (
    <>
      {showModal ? (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <FormWrapper>
              <form onSubmit={handleUrlSubmit}>
                <label htmlFor="url">URL:</label>
                <input ref={urlInputRef} type="text" id="url" required />
                <button>Submit for Data</button>
              </form>
            </FormWrapper>
            <FormWrapper>
              <form onSubmit={handleFirebaseSubmit}>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" defaultValue={siteInfo.title} />
                <label htmlFor="desc">Description:</label>
                <input
                  type="text"
                  id="desc"
                  defaultValue={siteInfo.description}
                />
                <label htmlFor="date">Published Date:</label>
                <input
                  type="date"
                  id="date"
                  defaultValue={siteInfo.publishedDate}
                  onChange={(e) =>
                    setSiteInfo({
                      ...siteInfo,
                      publishedDate: e.target.value,
                    })
                  }
                />
                <label htmlFor="img">Image:</label>
                <input type="text" id="img" defaultValue={siteInfo.image} />
                <label htmlFor="url">Url:</label>
                <input type="text" id="url" defaultValue={siteInfo.url} />
                <img src={siteInfo.image} alt="" />
                <button>Add to Firebase</button>
              </form>
            </FormWrapper>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </>
  );
}

export default AddArticleModal;
