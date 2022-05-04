import React from 'react';
import "./game-bar.css"
import {Link} from "react-router-dom";

const GameSidebarItem = ({game}) => {



    return (
        <li className="list-group-item d-flex  align-items-stretch wd-body-bkg-color wd-game-item " >
            <div className="col-xxl-3 col-xl-3 col-lg-3  ratio-1x1 me-2" >

                <img src={game && game.headerImage} className = "img-fluid wd-game-image  h-100 w-auto" />
            </div>

            <div className="col-xxl-6 col-xl-5 col-lg-5 mr-auto align-self-center wd-font-color  ">
                <p className="fw-bold m-0"> {game && game.name}</p>
            </div>

            <div className="col-xxl-3 col-xl-4 col-lg-4 pe-2 ">
                <Link to={`/game/${game.id}`} className="btn btn-outline-info wd-details-button h-100 w-100 p-3  ">
                    Details
                </Link>



            </div>
        </li>
    );
};

export default GameSidebarItem;