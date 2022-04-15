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
    const calcDisLikes = (post) => {
        //calculates the new number of likes depending on whether the tweet is already liked
        if(post.disliked){
            return post.stats.dislikes -1
        }
        else{
            return post.stats.dislikes + 1
        }

    }


    const handleLike = () => { updatePost(dispatch, {
        ...post, stats: {...post.stats,
                    likes: calcLikes(post)},
                    liked: !post.liked})}
    const handleDisLike = () => { updatePost(dispatch, {
        ...post, stats: {...post.stats,
            disliked: calcDisLikes(post)},
        disliked: !post.disliked})}


    return (
        <div className="d-flex justify-content-around">
            <i className="far fa-comment mx-1"> { post.stats && post.stats.comments} </i>
            <span onClick={handleDisLike} className="align-text-top">
                  {
                      post.disliked &&
                      <i className="fas fa-thumbs-down d-flex float-start"
                         style={{color: 'white'}}>
                          <span className="mx-1">{post.stats && post.stats.dislikes}</span>
                      </i>
                  }
                {
                    !post.disliked &&
                    <i className="far fa-thumbs-down  float-start">
                        <span className="mx-1">{post.stats && post.stats.dislikes}</span>
                    </i>
                }

            </span>
            <span onClick={handleLike} className="align-text-top">
                  {
                      post.liked &&
                      <i className="fas fa-heart d-flex float-start"
                         style={{color: 'white'}}>
                          <span className="mx-1">{post.stats && post.stats.likes}</span>
                      </i>
                  }
                {
                    !post.liked &&
                    <i className="far fa-heart  float-start">
                        <span className="mx-1">{post.stats && post.stats.likes}</span>
                    </i>
                }

            </span>
            <i className="far fa-bookmark"></i>
        </div>


    );
}
export default PostStats;
