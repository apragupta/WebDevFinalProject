import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import GameSidebarItem from "./GameItem";
import './game-bar.css'
import GamesList from "./GamesList";
import {useProfile} from "../../contexts/profile-context";
import {findUser, getUserGames} from "../../actions/users-actions";

const GameSidebar = () => {
    const {profile} = useProfile();
    const dispatch = useDispatch();
    useEffect(() => {
        findUser(dispatch,profile._id)
        getUserGames(dispatch,profile._id)}, [dispatch, profile._id]);



    const user = useSelector(state => state.user);
    if (user && user.games){
        const user_games = user.games
        return (
            <div>
                <div className=" list-group-item rounded-top p-2  wd-body-bkg-color wd-game-item" key = {0}>
                    <strong>My Games</strong>
                </div>
                <GamesList user_games={user_games}/>
            </div>

        );
    }
    else {
        return(<div></div>)
    }

};

export default GameSidebar;