import {useDispatch} from "react-redux";
import React from "react";
import {updatePost} from "../../actions/posts-actions";

const PostStats = ({post}) => {
    const dispatch = useDispatch();
    const calcLikes = (post) => {
        //calculates the new number of likes depending on whether the tweet is already liked
        if(post.liked){
            return post.stats.likes -1
        }
        else{
            return post.stats.likes + 1
        }

    }

    return (
        <div className="d-flex justify-content-around">
            <i className="far fa-comment me-1"> { post.stats && post.stats.comments} </i>
            <i className="far fa-thumbs-down me-1"> { post.stats && post.stats.reposts} </i>
            <span onClick={() => updatePost(dispatch, {
                ...post, stats: {...post.stats, likes: calcLikes(post)}, liked: !post.liked}
            )}>
                  {
                      post.liked &&
                      <i className="fas fa-heart me-1"
                         style={{color: 'red'}}></i>
                  }
                {
                    !post.liked &&
                    <i className="far fa-heart me-1"></i>
                }
                {post.stats && post.stats.likes}
            </span>
            <i className="far fa-bookmark"></i>
        </div>


    );
}
export default PostStats;

