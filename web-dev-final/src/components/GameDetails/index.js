import react, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import PostList from "../PostList";
import {useDispatch, useSelector} from "react-redux";
import {findGamePosts, findGamesFollowedPosts} from "../../actions/posts-actions";


import Tag from "./Tag";
import './game.css'
import parse from "html-react-parser";
import RatingComponent from "./RatingComponent";
import React from "react";
import {findGame} from "../../actions/games-actions";
import {useProfile} from "../../contexts/profile-context";
import {curUserFollowGame, findUser, getUserGames} from "../../actions/users-actions";


const GameDetails = () => {
    const dispatch = useDispatch();
    const {profile} = useProfile();

    let { id } = useParams();
    const posts = useSelector(
        state => state.posts);
    const game = useSelector(
        state => state.game)
    const user = useSelector(
        state => state.user
    )

    const user_follows_game = (profile) => {
        if(profile) {
            console.log("USER peofj GAMES")
            console.log((user.games.find(game=> (game.id==parseInt(id)) || game==parseInt(id))))
            console.log(profile && (user.games.find(game=> (game.id==parseInt(id)) || game==parseInt(id))))
            console.log(profile)
            return (profile && (user.games.find(game=> (game.id==parseInt(id)) || game==parseInt(id))))
        }
        else{
            return false
        }


    }
    const followButtonString =  (profile) => {


        if (profile) {
            if(user_follows_game(profile)) {
                console.log("n")
                return "Followed!"
            }
            else{
                return "Follow"
            }

        }
        else {
            return "Login to Follow"
        }

    }

    useEffect(() => {

        if(profile){
            findUser(dispatch, profile._id)
            getUserGames(dispatch,profile._id)}
    }, [dispatch, id,profile]);
    useEffect(() => {findGame(dispatch, id)}, [dispatch, id]);

    useEffect(() => {findGamePosts(dispatch, id)}, [dispatch, id]);



    const handleFollow = () => {
        if (profile && id) {
            console.log(id)
            curUserFollowGame(dispatch, id, profile._id)
        }
    }



    if (game === null) {
        return <></>
    }
    const gameDetails = game.gameDetails;
    const game_search_result = game.gameSearchResult













    return(


        <div>

            {/*TODO: figure out fields tht give you header_image genre for igdb and add here (only works for steam right now)*/}

            <img src={gameDetails ? gameDetails.header_image : ""} className="w-100 wd-game-header "/>
            <div className="wd-paragraph-border my-3">
            <div className="d-flex justify-content-between  mb-3">
                <h2 className="w-75 h-auto p-0 pe-1 mb-0"> {game_search_result.name}</h2>

                <button className=" align-self-end btn btn-primary btn-block rounded-pill w-25 h-50  mx-auto "
                disabled={!(followButtonString(profile)==="Follow")}
                onClick={handleFollow}>
                    {
                        followButtonString(profile)
                    }

                </button>

            </div>


                <span hidden={!gameDetails}>
                <h6>Developers:  {gameDetails && gameDetails.developers.map(dev => <Tag type={"secondary"} text={dev}/>)}
                </h6>
                <h6>Genres:  {gameDetails && gameDetails.genres.map(genre => <Tag type={"info"} text={genre.description}/>)}
                </h6>

                </span>

                <RatingComponent game={game_search_result} numberOfPosts={posts.length}/>
            <p className="wd-post-text mt-3 pt-3 border-top border-1">{ (gameDetails && parse(gameDetails.detailed_description)) || (game_search_result.summary)}</p>



            </div>

            <h1>Posts</h1>
            <div className="wd-post-list-border">
            <PostList posts={posts}/>
            </div>

        </div>
    )
}

export default GameDetails;