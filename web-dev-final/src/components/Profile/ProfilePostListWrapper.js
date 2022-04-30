import React from 'react';
import PostList from "../PostList";
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {
    findUserBookmarkedPosts,
    findUserDislikedPosts,
    findUserLikedPosts,
    findUserPosts
} from "../../actions/posts-actions";
import {useSelector} from "react-redux";
export const  ALL_POSTS = 'ALL_POSTS';
export const LIKED_POSTS = 'LIKED_POSTS';
export const DISLIKED_POSTS = 'DISLIKED_POSTS';
export const BOOKMARKED_POSTS = 'BOOKMARKED_POSTS';



const ProfilePostListWrapper = ({type, userId}) => {
    console.log("type")
    console.log(type)
    console.log(userId)
    const dispatch = useDispatch();
    useEffect(() => {
        switch(type) {
            case ALL_POSTS:
                findUserPosts(dispatch, userId);
                break;
            case LIKED_POSTS:
                findUserLikedPosts(dispatch, userId);
                break;
            case DISLIKED_POSTS:
                findUserDislikedPosts(dispatch, userId);
                break;
            case BOOKMARKED_POSTS:
                findUserBookmarkedPosts(dispatch, userId);
                break;
            default:
                findUserPosts(dispatch, userId);
        }},[dispatch,type,userId]);




    const posts = useSelector(
        state => state.posts);

    return (

            <PostList posts={posts}/>

    );
};

export default ProfilePostListWrapper;