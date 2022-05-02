import {useDispatch} from "react-redux";
import React from "react";
import { updatePost } from "../../actions/posts-actions";
import { useProfile } from '../../contexts/profile-context';
import {useNavigate} from "react-router-dom";
import {useToggleBookmarkMutation} from "../reducers/api";

const PostStats = ({post}) => {
    const dispatch = useDispatch();
    const { profile } = useProfile();
    const navigate = useNavigate();
    const [toggleBookmark] = useToggleBookmarkMutation()


    const calcLikes = async (post) => {
        //calculates the new number of likes depending on whether the tweet is already liked
        const userLikedPosts = await findUserLikedPosts(profile._id);
        const userDislikedPosts = await findUserDislikedPosts(profile._id);
        if(userLikedPosts.includes(post._id)){
            return post.stats.likes -1
        }
        else if (userDislikedPosts.includes(post._id)) {
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


    const handleLike = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }

        const userLikedPosts = await findUserLikedPosts(profile._id);
        const userDislikedPosts = await findUserDislikedPosts(profile._id);
        let likeChange = 0;
        let dislikeChange = 0;

        if(userLikedPosts.includes(post._id)){
            likeChange = -1;
        }
        else if (userDislikedPosts.includes(post._id)) {
            likeChange = 1;
            dislikeChange = -1;
        } else {
            likeChange = 1;
        }

        updatePost(dispatch, {
            ...post,
            stats: {
                ...post.stats,
                likes: post.stats.likes + likeChange,
                dislikes: post.stats.dislikes + dislikeChange
            }
        });
        userToggleLikePost(post._id);
    }
    const handleDisLike = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }

        const userLikedPosts = await findUserLikedPosts(profile._id);
        const userDislikedPosts = await findUserDislikedPosts(profile._id);
        let likeChange = 0;
        let dislikeChange = 0;

        if(userDislikedPosts.includes(post._id)){
            dislikeChange = -1;
        }
        else if (userLikedPosts.includes(post._id)) {
            dislikeChange = 1;
            likeChange = -1;
        } else {
            dislikeChange = 1;
        }
        updatePost(dispatch, {
            ...post,
            stats: {
                ...post.stats,
                likes: post.stats.likes + likeChange,
                dislikes: post.stats.dislikes + dislikeChange
            }
        });
        userToggleDislikePost(post._id);
    }

    const handleBookmark = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }
        await toggleBookmark(post._id).unwrap()
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

