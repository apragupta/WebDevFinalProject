import {useDispatch} from "react-redux";
import React from "react";
import { useProfile } from '../../contexts/profile-context';
import {useNavigate} from "react-router-dom";
import {
    useGetUserGamesFollowedQuery,
    useGetUserQuery,
    useToggleBookmarkMutation,
    useToggleDislikeMutation,
    useToggleLikeMutation
} from "../reducers/api";
import {Spinner} from "react-bootstrap";
import Profile from "../Profile";

const PostStats = ({post}) => {
    const { profile } = useProfile();
    const navigate = useNavigate();
    const [toggleBookmark] = useToggleBookmarkMutation()
    const [toggleLike] = useToggleLikeMutation()
    const [toggleDislike] = useToggleDislikeMutation()


    const handleLike = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }

        await toggleLike({post: post._id, user: profile._id}).unwrap();
    }
    const handleDisLike = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }

        await toggleDislike({post: post._id, user: profile._id}).unwrap();
    }

    const handleBookmark = async () => {
        if (!profile) {
            navigate('/login');
            return;
        }
        await toggleBookmark({post: post._id, user: profile._id}).unwrap()
    }
    const userId = profile?._id || "62615f8352e1b898edf51bc6"

    const {
        data: user,
        isSuccess
    } = useGetUserQuery(userId)


    const bookmarked = profile && isSuccess && user.bookmarks?.includes(post._id)
    const liked = profile && isSuccess && user.liked?.includes(post._id)
    const disliked = profile && isSuccess && user.disliked?.includes(post._id)


    return (
        <div className="d-flex justify-content-around">
            <i className="far fa-comment mx-1"> { post.stats && post.stats.comments} </i>
            <span onClick={handleDisLike} className="align-text-top">
                  {
                      disliked &&
                      <i className="fas fa-thumbs-down d-flex float-start">
                          <span className="mx-1">{post.stats && post.stats.dislikes}</span>
                      </i>
                  }
                {
                    !disliked &&
                    <i className="far fa-thumbs-down  float-start">
                        <span className="mx-1">{post.stats && post.stats.dislikes}</span>
                    </i>
                }

            </span>
            <span onClick={handleLike} className="align-text-top">
                  {
                      liked &&
                      <i className="fas fa-heart d-flex float-start"
                         style={{color: 'white'}}>
                          <span className="mx-1">{post.stats && post.stats.likes}</span>
                      </i>
                  }
                {
                    !liked &&
                    <i className="far fa-heart  float-start">
                        <span className="mx-1">{post.stats && post.stats.likes}</span>
                    </i>
                }

            </span>
            <span onClick={handleBookmark} className="align-text-top">
                {
                    bookmarked &&
                    <i className="fa fa-bookmark d-flex float-start"
                        style={{color: 'white'}}>
                    </i>
                }
                {
                    (!bookmarked) &&
                    <i className="far fa-bookmark  float-start"></i>
                }
            </span>
        </div>


    );
}
export default PostStats;

