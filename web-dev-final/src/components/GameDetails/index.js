import react, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import game_details from '../../sample_data/game.json'
import game_search from '../../sample_data/games_search.json'
import sample_posts from '../../sample_data/posts.js'
import PostList from "../PostList";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";
import user from '../../sample_data/user'

import Tag from "./Tag";
import './game.css'
import parse from "html-react-parser";
import RatingComponent from "./RatingComponent";
import React from "react";

let posts = sample_posts
const GameDetails = () => {
    //
    let { id } = useParams();
    let this_user = user[0]

    const getGameSearchResult = () => game_search.find(game=> game.id == id)
    const game_search_result = getGameSearchResult()


    const findSteamAppid = () =>  {
        return game_search_result.external_games.find(games => games.category ==1)?
            game_search_result.external_games.find(games => games.category ==1).uid:false;
    }
    const steam_appid = findSteamAppid()

    const getGameDetails = () => game_details.find(game=> game.steam_appid == steam_appid);
    const getGamePosts = () => posts.filter(post=> parseInt(post.game._id) == parseInt(id));
    const user_follows_game = () => this_user.games.find(games=> games._id == id)



    const gameDetails = getGameDetails();
    const game_posts = getGamePosts()
    const game_followed = user_follows_game()

    return(


        <div>

            {/*TODO: figure out fields tht give you header_image genre for igdb and add here (only works for steam right now)*/}

            <img src={gameDetails.header_image} className="w-100 wd-game-header "/>
            <div className="wd-paragraph-border my-3">
            <div className="d-flex justify-content-between  mb-3">
                <h2 className="w-75 h-auto p-0 pe-1 mb-0"> {game_search_result.name}</h2>
                <button className=" align-self-end btn btn-primary btn-block rounded-pill w-25 h-50  mx-auto "
                disabled={game_followed}>
                    {game_followed? "Followed!":"Follow"}

                </button>
            </div>


                <span hidden={!steam_appid}>
                <h6>Developers:  {gameDetails.developers.map(dev => <Tag type={"secondary"} text={dev}/>)}
                </h6>
                <h6>Genres:  {gameDetails.genres.map(genre => <Tag type={"info"} text={genre.description}/>)}
                </h6>

                </span>
            <RatingComponent game={game_search_result} />
            <p className="wd-post-text mt-3 pt-3 border-top border-1">{ (steam_appid && parse(gameDetails.detailed_description)) || (game_search_result.summary)}</p>


            </div>

            <h1>Posts</h1>
            <PostList posts={game_posts}/>

        </div>
    )
}

export default GameDetails;