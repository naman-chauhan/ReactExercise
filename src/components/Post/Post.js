import React from "react";
import PostItem from "./postItem";
const Post = ({ post, index, setPostData }) => {
  return (
    <div>
      <PostItem title={post} indexdel={index} setPostDataItem={setPostData} />
    </div>
  );
};

export default Post;
