import React from 'react';
import '../GamesSidebar/game-bar.css'
import '../PostList/post-list.css'
import {Link} from "react-router-dom";
import './search.css'
import SearchComponent from "./searchComponent";
import RatingComponent from "../GameDetails/RatingComponent";

const SearchItem = ({game}) => {

    const id = game.id

    return (
        <Link to={`/game/${id}`} className="list-group-item  list-group-item-action flex-column align-items-start wd-body-bkg-color wd-font-color">
            <div className="d-flex w-100 justify-content-between mb-1">
                <h5 className="mb-1">{game.name}</h5>

            </div>
            <p className=" wd-post-text ">
                {game.summary}
            </p>
            <RatingComponent game={game}/>

        </Link>
    );
};

export default SearchItem;