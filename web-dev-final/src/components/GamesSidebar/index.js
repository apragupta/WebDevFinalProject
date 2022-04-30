import React from 'react';
import {useSelector} from "react-redux";
import GameSidebarItem from "./GameItem";
import './game-bar.css'
import GamesList from "./GamesList";
import {useProfile} from "../../contexts/profile-context";

const GameSidebar = () => {
    const {profile} = useProfile();
    const user_games = profile.games
    return (
        <div>
            <div className=" list-group-item rounded-top p-2  wd-body-bkg-color wd-game-item" key = {0}>
                <strong>My Games</strong>
            </div>
            <GamesList user_games={user_games}/>
        </div>

    );
};

export default GameSidebar;