import React from 'react';
import {useSelector} from "react-redux";
import GameSidebarItem from "./GameItem";
import './game-bar.css'
import GamesList from "./GamesList";

const GameSidebar = () => {
    const user = useSelector(state => state.user);
    const user_games = user.games
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