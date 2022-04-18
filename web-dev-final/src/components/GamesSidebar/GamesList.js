import React from 'react';
import GameSidebarItem from "./GameItem";

const GamesList = ({user_games}) => {
    return (
        <div>
            <ul className="list-group ">


                {
                    user_games.map((game,index) => {
                        return(<GameSidebarItem game= {game} key = {index}/>);})}
            </ul>
        </div>
    );
};

export default GamesList;