import {useDispatch} from "react-redux";
import React, {useEffect, useState} from "react";
import {
    updatePost,
    userToggleBookmarkPost,
    userToggleDislikePost,
    userToggleLikePost,
    refreshPost
} from "../../actions/posts-actions";
import {userLikedPost,userDisLikedPost,userBookmarkedPost} from "../../services/users-service";
import { useProfile } from '../../contexts/profile-context';
import {useNavigate} from "react-router-dom";

const PostStats = ({post}) => {
    const dispatch = useDispatch();
    let { checkLoggedIn, profile } = useProfile();
    const navigate = useNavigate();

    const [statsBool, setStatsBool] = useState({
       bookmarked: false, liked: false, disliked: false
    })

    const [thisPost,setThisPost] = useState(post)
    console.log("statsBool")
    console.log(statsBool)
    console.log(thisPost)

    useEffect(()=>{
        const getPostStats = async () =>{
            const bookmarked = profile && await userBookmarkedPost(profile._id, thisPost._id)
            const liked = profile && await userLikedPost(profile._id, thisPost._id)
            const disliked = profile && await userDisLikedPost(profile._id, thisPost._id)
            const my_post = await refreshPost(dispatch,thisPost._id)
            console.log("post")
            console.log(my_post)
            setStatsBool({bookmarked,liked,disliked  })
            setThisPost(my_post)
            console.log(thisPost)
        };
        getPostStats();

    },[dispatch,profile, thisPost._id,statsBool.liked, statsBool.disliked,statsBool.bookmarked])

    const calcLikes = (post) => {
        //calculates the new number of likes depending on whether the tweet is already liked
        if(statsBool.liked){
            return post.stats.likes +1
        }
        else{
            return post.stats.likes - 1
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
    // const handleLike = () => { updatePost(dispatch, {
    //     ...post, stats: {...post.stats,
    //                 likes: calcLikes(post)},
    //                 liked: !post.liked})}
    // const handleDisLike = () => { updatePost(dispatch, {
    //     ...post, stats: {...post.stats,
    //         dislikes: calcDisLikes(post)},
    //     disliked: !post.disliked})}


    const handleLike = async () => {
        console.log("liked")
        console.log(statsBool.liked)
        if (!profile) {
            navigate('/login');
            return;
        }


        await userToggleLikePost(thisPost._id);
        const liked = profile && ( await userLikedPost(profile._id, thisPost._id))
        const my_post = await refreshPost(dispatch,thisPost._id)
        setThisPost(my_post)
        console.log(thisPost)


        setStatsBool({
            ...statsBool, liked})
        console.log(statsBool.liked)


    }
    const handleDislike = async () => {
        console.log("disliked")
        console.log(statsBool.disliked)
        if (!profile) {
            navigate('/login');
            return;
        }


        await userToggleDislikePost(thisPost._id);
        const disliked = profile && (await userDisLikedPost(profile._id, thisPost._id))
        const my_post = await refreshPost(dispatch,thisPost._id)
        setThisPost(my_post)

        setStatsBool({
            ...statsBool, disliked})
        console.log(statsBool.disliked)

    }
    const handleBookmark = async () => {
        console.log("bookmarked")
        console.log(statsBool.bookmarked)
        if (!profile) {
            navigate('/login');
            return;
        }


        await userToggleBookmarkPost(thisPost._id);
        const bookmarked = profile && (await userBookmarkedPost(profile._id, thisPost._id))
        const my_post = await refreshPost(dispatch,thisPost._id)
        setThisPost(my_post)


        setStatsBool({
            ...statsBool, bookmarked})
        console.log(statsBool.bookmarked)

    }


    return (
        <div className="d-flex justify-content-around">
            {/*<i className="far fa-comment mx-1"> { thisPost.stats && thisPost.stats.comments} </i>*/}
            <span onClick={handleDislike} className="align-text-top">
                  {
                      statsBool.disliked &&
                      <i className="fas fa-thumbs-down d-flex float-start"
                         style={{color: 'white'}}>
                          {/*<span className="mx-1">{thisPost.stats && thisPost.stats.dislikes}</span>*/}
                      </i>
                  }
                {
                    !statsBool.disliked &&
                    <i className="far fa-thumbs-down  float-start">
                        {/*<span className="mx-1">{thisPost.stats && thisPost.stats.dislikes}</span>*/}
                    </i>
                }

            </span>
            <span onClick={handleLike} className="align-text-top">
                  {
                      statsBool.liked &&
                      <i className="fas fa-heart d-flex float-start"
                         style={{color: 'white'}}>
                          {/*<span className="mx-1">{thisPost.stats && thisPost.stats.likes}</span>*/}
                      </i>
                  }
                {
                    !statsBool.liked &&
                    <i className="far fa-heart  float-start">
                        {/*<span className="mx-1">{thisPost.stats && thisPost.stats.likes}</span>*/}
                    </i>
                }

            </span>
            <span onClick={handleBookmark} className="align-text-top">
                {
                    statsBool.bookmarked &&
                    <i className="fa fa-bookmark d-flex float-start"
                        style={{color: 'white'}}>
                    </i>
                }
                {
                    !statsBool.bookmarked &&
                    <i className="far fa-bookmark  float-start"></i>
                }
            </span>
        </div>


    );
}
export default PostStats;

