import react, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import PostList from "../PostList";
import {useDispatch, useSelector} from "react-redux";
import {findGamePosts} from "../../actions/posts-actions";
import user from '../../sample_data/user'

import Tag from "./Tag";
import './game.css'
import parse from "html-react-parser";
import RatingComponent from "./RatingComponent";
import React from "react";
import {findGame} from "../../actions/games-actions";

const GameDetails = () => {

    const dispatch = useDispatch();

    let { id } = useParams();
    useEffect(() => {findGame(dispatch, id)}, [dispatch, id]);

    useEffect(() => {findGamePosts(dispatch, id)}, [dispatch]);


    const posts = useSelector(
        state => state.posts);
    const game = useSelector(
        state => state.game);

    if (game === null) {
        return <></>
    }
    console.log(game);
    const gameDetails = game.gameDetails;
    const game_search_result = game.gameSearchResult



    let this_user = user[0]

    const getGamePosts = () => posts.filter(post=> parseInt(post.game._id) == parseInt(id));
    const user_follows_game = () => this_user.games.find(games=> games._id == id)



    const game_posts = getGamePosts()
    const game_followed = user_follows_game()
    console.log(gameDetails);

    return(


        <div>

            {/*TODO: figure out fields tht give you header_image genre for igdb and add here (only works for steam right now)*/}

            <img src={gameDetails ? gameDetails.header_image : ""} className="w-100 wd-game-header "/>
            <div className="wd-paragraph-border my-3">
            <div className="d-flex justify-content-between  mb-3">
                <h2 className="w-75 h-auto p-0 pe-1 mb-0"> {game_search_result.name}</h2>
                <button className=" align-self-end btn btn-primary btn-block rounded-pill w-25 h-50  mx-auto "
                disabled={game_followed}>
                    {game_followed? "Followed!":"Follow"}

                </button>
            </div>


                <span hidden={!gameDetails}>
                <h6>Developers:  {gameDetails && gameDetails.developers.map(dev => <Tag type={"secondary"} text={dev}/>)}
                </h6>
                <h6>Genres:  {gameDetails && gameDetails.genres.map(genre => <Tag type={"info"} text={genre.description}/>)}
                </h6>

                </span>
            <RatingComponent game={game_search_result} />
            <p className="wd-post-text mt-3 pt-3 border-top border-1">{ (gameDetails && parse(gameDetails.detailed_description)) || (game_search_result.summary)}</p>


            </div>

            <h1>Posts</h1>
            <div className="wd-post-list-border">
            <PostList posts={game_posts}/>
            </div>

        </div>
    )
}

export default GameDetails;