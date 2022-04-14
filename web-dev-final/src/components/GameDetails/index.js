import react, {useEffect} from 'react'
import {useParams} from "react-router-dom";
import games from '../../sample_data/game.json'
import sample_posts from '../../sample_data/posts.js'
import PostList from "../PostList";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";
import '../PostList/post-list.css'
let posts = sample_posts
const GameDetails = ({match}) => {
    let { id } = useParams();
    const getGameDetails = () => games.find(game=> game.steam_appid == id);
    const getGamePosts = () => posts.filter(post=> parseInt(post.game._id) == parseInt(id));
    const gameDetails = getGameDetails();
    const game_posts = getGamePosts()

    return(


        <div>

            <img src={gameDetails.header_image} className="w-100"/>
            <h1> {gameDetails.name}</h1>
            <p className="wd-post-text">{gameDetails.detailed_description}</p>

            <PostList posts={game_posts}/>

        </div>
    )
}

export default GameDetails;