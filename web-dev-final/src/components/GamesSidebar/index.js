import React from 'react';
import './game-bar.css'
import GamesList from "./GamesList";
import {useProfile} from "../../contexts/profile-context";
import {useGetUserGamesFollowedQuery} from "../reducers/api";

const GameSidebar = () => {
    const {profile} = useProfile();

    const {
        data: games,
        isSuccess: gamesSuccess
    } = useGetUserGamesFollowedQuery(profile._id || "62615f8352e1b898edf51bc6")


    if (profile && gamesSuccess){
        return (
            <div>
                <div className=" list-group-item rounded-top p-2  wd-body-bkg-color wd-game-item" key = {0}>
                    <strong>My Games</strong>
                </div>
                <GamesList user_games={games}/>
            </div>

        );
    }
    else {
        return(<div></div>)
    }

};

export default GameSidebar;