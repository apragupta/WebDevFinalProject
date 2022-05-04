import React from 'react';
import PostList from "../PostList";
import {
    useGetBookmarkedPostsByUserIdQuery,
    useGetDislikedPostsByUserIdQuery,
    useGetLikedPostsByUserIdQuery,
    useGetPostsByUserIdQuery
} from "../reducers/api";
import {Spinner} from "react-bootstrap";
export const  ALL_POSTS = 'ALL_POSTS';
export const LIKED_POSTS = 'LIKED_POSTS';
export const DISLIKED_POSTS = 'DISLIKED_POSTS';
export const BOOKMARKED_POSTS = 'BOOKMARKED_POSTS';



const ProfilePostListWrapper = ({type, userId}) => {
    let allPosts = useGetPostsByUserIdQuery(userId, {pollingInterval: 3000})
    let likedPosts = useGetLikedPostsByUserIdQuery(userId, {pollingInterval: 3000})
    let dislikedPosts = useGetDislikedPostsByUserIdQuery(userId, {pollingInterval: 3000})
    let bookmarkedPosts = useGetBookmarkedPostsByUserIdQuery(userId, {pollingInterval: 3000})


    let res

    switch(type) {
        case ALL_POSTS:
            res = allPosts
            break;
        case LIKED_POSTS:
            res = likedPosts
            break;
        case DISLIKED_POSTS:
            res = dislikedPosts
            break;
        case BOOKMARKED_POSTS:
            res = bookmarkedPosts
            break;
        default:
            res = allPosts
            break;
    }

    let {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = res




    let content

    if (isLoading) {
        content = <Spinner text="Loading..." />
    } else if (isSuccess) {
        content = <PostList posts={posts}/>
    } else if (isError) {
        content = <div>{error.error}</div>
    }

    return (

        content

    );
};

export default ProfilePostListWrapper;