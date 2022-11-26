import React from "react";
import PostItem from "./postItem";
const Post = ({ post, index }) => {
  return (
    <div>
      <PostItem title={post} indexdel={index} />
    </div>
  );
};

export default Post;
