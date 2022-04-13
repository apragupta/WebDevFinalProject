import React from 'react';
import {useSelector} from "react-redux";
import "./game-bar.css"

const GameSidebarItem = ({game}) => {



    return (
        <li className="list-group-item d-flex  align-items-stretch wd-body-bkg-color wd-game-item " >
            <div className="col-xxl-3 col-xl-3 col-lg-3  ratio-1x1 me-2" >

                <img src={game && game.header_image} className = "img-fluid wd-game-image  " />
            </div>

            <div className="col-xxl-6 col-xl-5 col-lg-5 mr-auto align-self-center wd-font-color  ">
                <p className="fw-bold m-0"> {game && game.name}</p>
            </div>

            <div className="col-xxl-3 col-xl-4 col-lg-4 pe-2">
                <button className="btn btn-outline-info wd-details-button h-100 w-100 ">
                    Details
                </button>

                {/*if user is not logged in*/}
                <button className="btn btn-outline-info wd-details-button h-100 w-100 d-none ">
                    Details
                </button>


            </div>
        </li>
    );
};

export default GameSidebarItem;