import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import PostListItem from "./PostListItem";
import {findAllPosts} from "../../actions/posts-actions";

const PostList = () => {
    const posts = useSelector(
        state => state.posts);

    const dispatch = useDispatch();


    useEffect(() => {findAllPosts(dispatch)} ); //useEffect is kinda like componentDidMount = it is called when the component first renders

    return (
        <ul className="p-0  list-group">
            {
                posts.map && posts.map(post =>
                    <PostListItem key={post._id}
                                  post={post}/>)
            }
        </ul>
    );
}

export default PostList;

