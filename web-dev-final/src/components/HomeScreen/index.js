import react, {useEffect} from 'react'
import PostList from "../PostList";
import MakePost from "./MakePost";
import SearchComponent from "../SearchGames/searchComponent";
import {useDispatch, useSelector} from "react-redux";
import {findAllPosts} from "../../actions/posts-actions";

const HomeScreen = () => {
    const posts = useSelector(
        state => state.posts);

    const dispatch = useDispatch();


    useEffect(() => {findAllPosts(dispatch)} ); //useEffect is kinda like componentDidMount = it is called when the component first renders
    return(
        <div>
            <SearchComponent/>
            <MakePost/>
            <PostList posts={posts}/>
        </div>
    )
}

export default HomeScreen;