import React from "react";
import PostListItem from "./PostListItem";

const PostList = ({posts}) => {


    return (
        <ul className="p-0  list-group ">
            {
                posts.map && posts.map(post =>
                    <PostListItem key={post._id}
                                  post={post}/>)
            }
        </ul>
    );
}

export default PostList;

