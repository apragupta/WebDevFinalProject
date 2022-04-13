import React from 'react';
import '../GamesSidebar/game-bar.css'
import '../PostList/post-list.css'
import {Link} from "react-router-dom";

const SearchItem = ({game}) => {
    const rating_string = () => game.total_rating? Math.round(game.total_rating *100)/100 + "%": "unavailable";
    const steam_appid = () =>  game.external_games.find(games => games.category ===1)?game.external_games.find(games => games.category ===1).uid:false;

    return (
        <Link to={`/game/${steam_appid()}`} className="list-group-item list-group-item-action flex-column align-items-start wd-body-bkg-color wd-font-color">
            <div className="d-flex w-100 justify-content-between mb-1">
                <h5 className="mb-1">{game.name}</h5>
                <small>{game.total_rating_count? game.total_rating_count :0} {" Ratings"}</small>
            </div>
            <p className=" wd-post-text">
                {game.summary}
            </p>
            <div className="d-flex w-100 justify-content-lg-start mb-1">
                <small className="pe-2">
                    {"Rating: " + rating_string() }
                </small>
                <div className="progress w-50 align-self-center"
                     style={{height: ".5rem"}}>
                    <div className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                         role="progressbar"
                         aria-valuenow={game.total_rating}
                         aria-valuemin="0"
                         aria-valuemax="100"
                         style={{width: `${game.total_rating}%`}}>

                    </div>

                </div>

            </div>
        </Link>
    );
};

export default SearchItem;