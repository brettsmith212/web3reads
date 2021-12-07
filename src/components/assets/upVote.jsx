import React, { useState, useContext } from "react";
import { Icon } from "../styles/Icon.styled";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import AuthContext from "../../auth-context";
const firestore = firebase.firestore();

function upVote(props) {
  const articlesRef = firestore.collection("articles");
  const ctx = useContext(AuthContext);
  let userId = "Not Logged In";
  if (ctx.user !== null) {
    userId = ctx.user.uid;
  }

  let newVotedArr = [...props.voted];
  let newUpvote = props.upVote;

  const addUpVoteHandler = () => {
    // IDENTIFY DOCID FOR CORRECTING VOTES
    // console.log(props.id);
    // console.log("VOTED ARR: ", props.voted);
    // console.log("CURRENT UID: ", userId);
    if (ctx.user !== null) {
      if (!props.voted.includes(userId)) {
        newVotedArr.push(userId);
        newUpvote += 1;
        articlesRef.doc(props.id).update({
          upVote: newUpvote,
          voted: newVotedArr,
        });
      }
    } else {
      return alert("Please log in to upvote an article!");
    }
  };

  return (
    <>
      {props.voted.includes(userId) ? (
        <Icon onClick={addUpVoteHandler} voted>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z"
              fill="currentColor"
            />
          </svg>
        </Icon>
      ) : (
        <Icon onClick={addUpVoteHandler}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.8285 11.9481L16.2427 10.5339L12 6.29122L7.7574 10.5339L9.17161 11.9481L11 10.1196V17.6568H13V10.1196L14.8285 11.9481Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M19.7782 4.22183C15.4824 -0.0739415 8.51759 -0.0739422 4.22183 4.22183C-0.0739415 8.51759 -0.0739422 15.4824 4.22183 19.7782C8.51759 24.0739 15.4824 24.0739 19.7782 19.7782C24.0739 15.4824 24.0739 8.51759 19.7782 4.22183ZM18.364 5.63604C14.8492 2.12132 9.15076 2.12132 5.63604 5.63604C2.12132 9.15076 2.12132 14.8492 5.63604 18.364C9.15076 21.8787 14.8492 21.8787 18.364 18.364C21.8787 14.8492 21.8787 9.15076 18.364 5.63604Z"
              fill="currentColor"
            />
          </svg>
        </Icon>
      )}
    </>
  );
}

export default upVote;
