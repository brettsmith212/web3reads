import React, { useRef } from "react";
import { ModalBackground, ModalWrapper } from "./styles/AddArticleModal.styled";

function AddArticleModal({ showModal, setShowModal }) {
  const modalRef = useRef();
  const urlInputRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const handleUrlSubmit = async (e) => {
    e.preventDefault();
    const enteredUrl = urlInputRef.current.value;
    console.log("SUBMITTING: ", enteredUrl);
  };

  return (
    <>
      {showModal ? (
        <ModalBackground ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            <form onSubmit={handleUrlSubmit}>
              <label htmlFor="url">URL:</label>
              <input ref={urlInputRef} type="text" id="url" required />
              <button>Submit</button>
            </form>
          </ModalWrapper>
        </ModalBackground>
      ) : null}
    </>
  );
}

export default AddArticleModal;
