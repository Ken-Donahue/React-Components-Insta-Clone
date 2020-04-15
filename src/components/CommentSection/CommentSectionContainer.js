// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";
import dummyData from '../../dummy-data'

console.log(dummyData)
const CommentSection = props => {
  // Add state for the comments
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {
        props.comments.map((comment, index) => <Comment comment={comment} key ={index}/>)
      }
      <CommentInput />
    </div>
  );
};

export default CommentSection;
