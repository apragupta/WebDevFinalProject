import react, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import game_details from '../../sample_data/game.json'
import game_search from '../../sample_data/games_search.json'
import sample_posts from '../../sample_data/posts.js'
import PostList from "../PostList";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";
import './game.css'
import parse from "html-react-parser";
import RatingComponent from "./RatingComponent";

let posts = sample_posts
const GameDetails = () => {
    //
    let { id } = useParams();


    const getGameSearchResult = () => game_search.find(game=> game.id == id)
    const game_search_result = getGameSearchResult()


    const findSteamAppid = () =>  {
        return game_search_result.external_games.find(games => games.category ==1)?
            game_search_result.external_games.find(games => games.category ==1).uid:false;
    }
    const steam_appid = findSteamAppid()

    const getGameDetails = () => game_details.find(game=> game.steam_appid == steam_appid);
    const getGamePosts = () => posts.filter(post=> parseInt(post.game._id) == parseInt(id));


    const gameDetails = getGameDetails();
    const game_posts = getGamePosts()

    return(


        <div>

            <img src={gameDetails.header_image} className="w-100 wd-game-header "/>
            <div className="wd-paragraph-border my-3">
            <h1 > {gameDetails.name}</h1>
            <RatingComponent game={game_search_result} />
            <p className="wd-post-text mt-3 pt-3 border-top border-1">{ (steam_appid && parse(gameDetails.detailed_description)) || (game_search_result.summary)}</p>
            </div>
            <PostList posts={game_posts}/>

        </div>
    )
}

export default GameDetails;