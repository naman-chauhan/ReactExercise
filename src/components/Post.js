import React from "react";
import PostItem from "./postItem";
const Post = ({post}) => {
  return (

    <div>
      <PostItem title={post} />
    </div>
  );
};

export default Post;
