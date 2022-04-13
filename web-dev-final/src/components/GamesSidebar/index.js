import React from 'react';
import {useSelector} from "react-redux";
import GameSidebarItem from "./GameItem";
import './game-bar.css'

const GameSidebar = () => {
    const user = useSelector(state => state.user);
    const user_games = user.games
    return (
        <ul className="list-group ">
            <li className=" list-group-item rounded-top p-2  wd-body-bkg-color wd-game-item" key = {0}>
                <strong>My Games</strong>
            </li>

            {
                user_games.map((game,index) => {
                    return(<GameSidebarItem game= {game} key = {index}/>);})}
        </ul>
    );
};

export default GameSidebar;