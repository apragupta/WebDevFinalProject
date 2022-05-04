import {useProfile} from "../../contexts/profile-context";
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import React, {useEffect} from "react";
import Profile from "../Profile";
import {Spinner} from "react-bootstrap";
import {useGetUserGamesFollowedQuery, useGetUserQuery} from "../reducers/api";

const ProfileWrapper = () => {
    console.log("in profile wrapper")
    const dispatch = useDispatch();
    const {profile} = useProfile()

    let {userId} = useParams();

    if(!userId) {
        userId = profile._id;
    }


    let {
        data: user,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetUserQuery(userId)


    let {
        data: games,
        isLoading: gamesLoading,
        isSuccess: gamesSuccess,
        isError: gamesError,
        error: gError
    } = useGetUserGamesFollowedQuery(userId)


    const u2 = {...user, games, curUser: profile?._id}

    let content

    if (isLoading || gamesLoading) {
        content = <Spinner text="Loading..." />
    } else if (isSuccess && gamesSuccess) {
        content = <Profile profile={u2}/>
    } else if (isError || gamesError) {
        content = <div>{error.error}{gError.error}</div>
    }


    const updateNav = () => {
        dispatch({type: 'nav-change', value: 'profile'});
    };
    useEffect(updateNav, [dispatch]);


    return content

}

export default ProfileWrapper;