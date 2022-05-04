import React from 'react'
import {useParams} from "react-router-dom";
import PostList from "../PostList";


import Tag from "./Tag";
import './game.css'
import parse from "html-react-parser";
import RatingComponent from "./RatingComponent";
import {useProfile} from "../../contexts/profile-context";
import {
    useFollowGameMutation,
    useGetGameQuery,
    useGetPostsByGameIdQuery,
    useGetUserGamesFollowedQuery, useGetUserQuery
} from "../reducers/api";
import {Spinner} from "react-bootstrap";


const GameDetails = () => {
    const {profile} = useProfile();

    let { id } = useParams();
    const {
        data: posts,
        isLoading,
        isSuccess,
        isError,
        error
    } = useGetPostsByGameIdQuery(id)

    const {
        data: gameInfo,
        isLoading: isLoadingGame,
        isSuccess: isSuccessGame,
        isError: isErrorGame,
        error: errorGame
    } = useGetGameQuery(id)


    const gameDetails = gameInfo?.gameDetails;
    const game_search_result = gameInfo?.gameSearchResult;

    const [updateUser] = useFollowGameMutation()

    const game = gameInfo

    const userId = profile?._id || "62615f8352e1b898edf51bc6"

    const {
        data: userInfo,
        isSuccess: isSuccessUser
    } = useGetUserQuery(userId)

    const {
        data: userGames,
        isSuccess: gamesSuccess
    } = useGetUserGamesFollowedQuery(userId)


    const user = {...userInfo, games: userGames, curUser: profile?._id}

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


        if (profile && isSuccessUser && gamesSuccess) {
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

    const handleFollow = async () => {
        if (profile && id) {
            console.log(id)
            await updateUser(id).unwrap()
        }
    }

    let content

    if (isLoading) {
        content = <Spinner text="Loading..." />
    } else if (isSuccess) {
        content = <PostList posts={posts}/>
    } else if (isError) {
        content = <div>{error.error}</div>
    }

    let gameContent

    if (isLoadingGame) {
        gameContent = <Spinner text="Loading..." />
    } else if (isSuccessGame) {
        console.log("here we are")
        gameContent = <div>
            <img src={gameDetails ? gameDetails.header_image : ""} className="w-100 wd-game-header "/>
            <div className="wd-paragraph-border my-3">
                <div className="d-flex justify-content-between  mb-3">
                    <h2 className="w-75 h-auto p-0 pe-1 mb-0"> {game_search_result.name}</h2>

                    <button className=" align-self-end btn btn-primary btn-block rounded-pill w-25 h-50  mx-auto "
                            disabled={isSuccessUser && gamesSuccess && !(followButtonString(profile)==="Follow")}
                            onClick={handleFollow}>
                        {
                            followButtonString(profile)
                        }

                    </button>

                </div>


                <span hidden={!gameDetails}>
                    <h6>
                        Developers:  {gameDetails && gameDetails.developers.map(dev => <Tag type={"secondary"} text={dev}/>)}
                    </h6>
                    <h6>
                        Genres:  {gameDetails && gameDetails.genres.map(genre => <Tag type={"info"} text={genre.description}/>)}
                    </h6>
                </span>
                <RatingComponent game={game_search_result} numberOfPosts={(!isLoading && posts.length) || 0}/>
                <p className="wd-post-text mt-3 pt-3 border-top border-1 wd-html-container  ">
                    { (gameDetails && parse(gameDetails.detailed_description)) || (game_search_result.summary)}
                </p>
            </div>
        </div>
    } else if (isErrorGame) {
        gameContent = <div>{errorGame.error}</div>
    }


    if (game === null) {
        return <></>
    }

    return(


        <div>

            {/*TODO: figure out fields tht give you header_image genre for igdb and add here (only works for steam right now)*/}
            {gameContent}


            <h1>Posts</h1>
            <div className="wd-post-list-border">
                {content}
            </div>

        </div>
    )
}

export default GameDetails;