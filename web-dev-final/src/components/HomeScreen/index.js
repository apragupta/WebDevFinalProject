import react, {useEffect} from 'react'
import PostList from "../PostList";
import MakePost from "./MakePost";
import SearchComponent from "../SearchGames/searchComponent";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";
import './home.css'

const HomeScreen = () => {
    const posts = useSelector(
        state => state.posts);

    const dispatch = useDispatch();


    useEffect(() => {findAllPosts(dispatch)} ); //useEffect is kinda like componentDidMount = it is called when the component first renders
    return(
        <div>
            <SearchComponent/>

            <MakePost/>
            <div className="wd-post-list-border">
            <PostList posts={posts}/>
            </div>
        </div>
    )
}

export default HomeScreen;