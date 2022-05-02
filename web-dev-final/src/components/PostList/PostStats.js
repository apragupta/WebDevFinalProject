import {useDispatch} from "react-redux";
import React from "react";
import { updatePost, userToggleBookmarkPost } from "../../actions/posts-actions";
import { useProfile } from '../../contexts/profile-context';
import {useNavigate} from "react-router-dom";

const PostStats = ({post}) => {
    const dispatch = useDispatch();
    const { checkLoggedIn, profile } = useProfile();
    const navigate = useNavigate();

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
            dislikes: calcDisLikes(post)},
        disliked: !post.disliked})}

    const handleBookmark = () => {
        if (!checkLoggedIn()) {
            navigate('/login');
            return;
        }
        userToggleBookmarkPost(post._id);
    }


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
            <span onClick={handleBookmark} className="align-text-top">
                {
                    profile &&
                    profile.bookmarks?.includes(post._id) &&
                    <i className="fa fa-bookmark d-flex float-start"
                        style={{color: 'white'}}>
                    </i>
                }
                {
                    (!profile || !profile.bookmarks?.includes(post._id)) &&
                    <i className="far fa-bookmark  float-start"></i>
                }
            </span>
        </div>


    );
}
export default PostStats;

