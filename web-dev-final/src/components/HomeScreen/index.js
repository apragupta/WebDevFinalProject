import react, {useEffect, useState} from 'react'
import PostList from "../PostList";
import MakePost from "./MakePost";
import SearchComponent from "../SearchGames/searchComponent";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";
import './home.css'
import SecureContent from "../secure-content";
import {useProfile} from "../../contexts/profile-context";
import {findUser, getUserGames} from "../../actions/users-actions";

const HomeScreen = () => {















    const dispatch = useDispatch();
    const updateNav = () => {
        dispatch({type: 'nav-change', value:'home'});};
    useEffect(() => {
        updateNav();
        findAllPosts(dispatch)},[dispatch])


    const posts = useSelector(
        state => state.posts)

    return(
        <div>
            <SearchComponent/>

            <SecureContent>
                <MakePost/>
                {/*//TODO figure out why this currentUser is not getting updated :(*/}
            </SecureContent>
            <div className="wd-post-list-border">
            <PostList posts={posts}/>
            </div>
        </div>
    )
}

export default HomeScreen;