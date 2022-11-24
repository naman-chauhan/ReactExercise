import React from "react";
import PostItem from "./postItem";
const Post = ({ post, index, addPosts }) => {
    return (
        <div>
            <PostItem />
            <PostItem />
        </div>
    );
};

export default Post;
