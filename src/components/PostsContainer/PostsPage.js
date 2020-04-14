//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
// import data

const PostsPage = props => {
  // set up state for your data
  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}

      {props.data.map((i) => {
        return (
          
          <div>
            <Post post={i}/>
          </div>

        );
      })}
    </div>
  );
};

export default PostsPage;

