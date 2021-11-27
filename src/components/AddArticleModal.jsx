import React, { useRef, useState } from "react";
import {
  ModalBackground,
  ModalWrapper,
  FormWrapper,
} from "./styles/AddArticleModal.styled";

function AddArticleModal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const urlInputRef = useRef();
  const [url, setUrl] = useState("");

  const [siteInfo, setSiteInfo] = useState({
    title: "",
    description: "",
    image: "",
    url: "",
  });

  const [information, setInformation] = useState("");

  const urlData = async () => {
    try {
      //   const res = await fetch(
      //     `http://api.linkpreview.net/?key=${
      //       import.meta.env.VITE_URL_PREVIEW_KEY_TEST
      //     }&q=${url}`
      //   );

      const res = await fetch(
        `http://api.linkpreview.net/?key=${
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
      setInformation(data);
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
              <form>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" defaultValue={siteInfo.title} />
                <label htmlFor="desc">Description:</label>
                <input
                  type="text"
                  id="desc"
                  defaultValue={siteInfo.description}
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
