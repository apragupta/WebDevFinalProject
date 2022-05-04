import React from "react"
import PostStats from "./PostStats.js";
import "./post-list.css"
import {Link} from "react-router-dom";
import {useProfile} from "../../contexts/profile-context";
import {useDeletePostMutation, useGetUserQuery} from "../reducers/api";

const PostListItem = ({post}) => {

    const [deletePost] = useDeletePostMutation()

    const profile = useProfile();
    console.log(profile)
    console.log(post.postedBy._id)
    console.log(profile?.profile && post.postedBy._id === profile?.profile?._id)

    const {
        data: userInfo,
        isSuccess: isSuccessUser
    } = useGetUserQuery(profile?.profile?._id || "62615f8352e1b898edf51bc6")


    function permitedToDelete() {
        return profile?.profile && isSuccessUser && (userInfo?.user_role === "admin"  || post.postedBy._id === profile?.profile?._id);
    }

    return(
        <div className="list-group-item d-flex my-2  wd-inherit-bkg wd-post-list">
            <div className="col-lg-2 col-sm-3 col-4  h-auto  p-0 ratio-1x1 pe-4  pt-1" >
                <Link to={`../profile/${post.postedBy._id}`} id="profile-link">
                <img src={post.postedBy.avatar_image || "https://i.imgur.com/Lsi7bXT.jpg"} className = "img-fluid   rounded-circle wd-avatar-border " />
                </Link>
            </div>

            <div className="col-lg-7 col-sm-6 col-5 mr-auto p-0 ">
                <div className="d-flex justify-content-between ">
                    <div>

                        <div className="d-flex justify-content-start mb-1">
                            <Link to={`../profile/${post.postedBy._id}`} id="profile-link">
                            <div className="fw-bold me-1 "> {post.postedBy && post.postedBy.name}</div>
                            </Link>
                            <div className="me-1 wd-username-color" >@{post.postedBy.username && post.postedBy.username}</div>

                        </div>

                        <p><strong>{post.title}</strong></p>
                    </div>


                    {permitedToDelete() ? <button onClick={async () => await deletePost(post).unwrap()} className="btn-sm btn-close p-2"></button> : <></>}


                </div>

                <p className="wd-post-text">
                    {post.text}
                </p>
                <PostStats post = {post}/>





            </div>

            <div className="col-lg-3 col-sm-3 d-sm-block d-none ms-1  p-0 pb-1 text-center align-self-center wd-post-game">
                <Link to={`../game/${post.game._id}`} id="game-link" >
                    <img src={post.game.header_image} className = "img-fluid w-auto h-auto wd-post-game-image " />
                    <h6 className="my-auto wd-font-color">{post.game.name}</h6>
                </Link>
            </div>

            {/*Todo - image/embedding-*/}




        </div>);
};

export default PostListItem;