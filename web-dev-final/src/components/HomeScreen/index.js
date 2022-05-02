import react, {useEffect, useState} from 'react'
import PostList from "../PostList";
import MakePost from "./MakePost";
import SearchComponent from "../SearchGames/searchComponent";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts, findGamesFollowedPosts} from "../../actions/posts-actions";
import './home.css'
import SecureContent from "../secure-content";
import {useProfile} from "../../contexts/profile-context";
import {findUser, getUserGames} from "../../actions/users-actions";
import {useParams} from "react-router-dom";

const HomeScreen = () => {

    const dispatch = useDispatch();
    const {profile} = useProfile()



    const updateNav = () => {
        dispatch({type: 'nav-change', value:'home'});};

    useEffect(() => {
        updateNav();
        //if user is loggedin
        if(profile && profile._id){
            const userId = profile._id
            findGamesFollowedPosts(dispatch,userId)
        }
        else{
            findAllPosts(dispatch);
        }
    },[dispatch,profile])




    const posts = useSelector(
        state => state.posts)

    return(
        <div>
            <h1>Steam Games Forum</h1>
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