import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {
    updatePost,
    userToggleBookmarkPost,
    userToggleDislikePost,
    userToggleLikePost
} from "../../actions/posts-actions";
import { useProfile } from '../../contexts/profile-context';
import {useNavigate} from "react-router-dom";
import {getPostStats, getUserPostInteractions} from "../../services/posts-service";
import {UPDATE_POST_FIELDS} from "../reducers/posts-reducer";
const PostStats = ({post}) => {
    const dispatch = useDispatch();
    const { checkLoggedIn, profile } = useProfile();
    const navigate = useNavigate();

    const fetchUserPostInteractions = async () =>  {
        if(profile){
            const postInteractions = await getUserPostInteractions(profile._id, post._id)
            postInteractions._id = post._id
            dispatch({
                type:UPDATE_POST_FIELDS,
                post: postInteractions

            })
        }
    }
    const fetchPostStats = async () =>  {
        const postStats = await getPostStats(post._id)
        console.log(postStats)
        dispatch({
            type:UPDATE_POST_FIELDS,
            post: postStats

        })
    }

    useEffect(() => {
        fetchPostStats();
        fetchUserPostInteractions()
    }, [dispatch,post._id,profile,post])




    const handleLike = async () => {
        if (!profile) {
                    navigate('/login');
                    return;
        }
        await userToggleLikePost(post._id).then(res => {
            fetchPostStats();
            fetchUserPostInteractions()
        });
    }
    const handleDislike = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }
        await userToggleDislikePost(post._id).then(res => {
            fetchPostStats();
            fetchUserPostInteractions()
        });
    }
    const handleBookMark = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }
        await userToggleBookmarkPost(post._id).then(res => {
            fetchUserPostInteractions()
        });
    }





    return (
        <div className="d-flex justify-content-around">
            <i className="far fa-comment mx-1"> { post.stats && post.stats.comments} </i>
            <span onClick={handleDislike} className="align-text-top">
                  {
                      post.dislike &&
                      <i className="fas fa-thumbs-down d-flex float-start"
                         style={{color: 'white'}}>
                          <span className="mx-1">{post.stats && post.stats.dislikes}</span>
                      </i>
                  }
                {
                    !post.dislike &&
                    <i className="far fa-thumbs-down  float-start">
                        <span className="mx-1">{post.stats && post.stats.dislikes}</span>
                    </i>
                }

            </span>
            <span onClick={handleLike} className="align-text-top">
                  {
                      post.like &&
                      <i className="fas fa-heart d-flex float-start"
                         style={{color: 'white'}}>
                          <span className="mx-1">{post.stats && post.stats.likes}</span>
                      </i>
                  }
                {
                    !post.like &&
                    <i className="far fa-heart  float-start">
                        <span className="mx-1">{post.stats && post.stats.likes}</span>
                    </i>
                }

            </span>
            <span onClick={handleBookMark} className="align-text-top">
                {
                    post.bookmarked &&
                    <i className="fa fa-bookmark d-flex float-start"
                        style={{color: 'white'}}>
                    </i>
                }
                {
                    (!post.bookmarked ) &&
                    <i className="far fa-bookmark  float-start"></i>
                }
            </span>
        </div>


    );
}
export default PostStats;

