import React, {useEffect} from 'react'
import PostList from "../PostList";
import MakePost from "./MakePost";
import SearchComponent from "../SearchGames/searchComponent";
import {useDispatch} from "react-redux";
import './home.css'
import SecureContent from "../secure-content";
import {useProfile} from "../../contexts/profile-context";
import {useGetFollowedPostsByUserIdQuery, useGetPostsQuery} from '../reducers/api'
import {Spinner} from "react-bootstrap";

const HomeScreen = () => {
    const allPosts = useGetPostsQuery()
    const dispatch = useDispatch();
    const {profile} = useProfile()
    let userId = profile?._id || "62615f8352e1b898edf51bc6"

    const userPosts = useGetFollowedPostsByUserIdQuery(userId)
    let res

    if (profile && profile._id) {
        res = userPosts
    } else {
        res = allPosts
    }

    const {
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

    const updateNav = () => {
        dispatch({type: 'nav-change', value:'home'});};

    useEffect(() => {
        updateNav();
    },[dispatch])




    //const posts = useSelector(selectAllPosts)

    return(
        <div>
            <h1>Steam Games Forum</h1>
            <SearchComponent/>

            <SecureContent>
                <MakePost/>
                {/*//TODO figure out why this currentUser is not getting updated :(*/}
            </SecureContent>
            <div className="wd-post-list-border">
                {content}
            </div>
        </div>
    )
}

export default HomeScreen;