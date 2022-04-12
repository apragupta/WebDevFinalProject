import react from 'react'
import PostList from "../PostList";
import MakePost from "./MakePost";
const HomeScreen = () => {
    return(
        <div>
            <MakePost/>
            <PostList/>
        </div>
    )
}

export default HomeScreen;