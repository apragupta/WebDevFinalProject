import React from "react"
import {useDispatch} from "react-redux";
import PostStats from "./PostStats.js";
import {deletePost} from "../../actions/posts-actions";
import "./post-list.css"

const PostListItem = ({post}) => {
    const dispatch = useDispatch();


    return(
        <div className="list-group-item d-flex   my-2 py-2 wd-inherit-bkg wd-post-list">
            <div className="col-xl-1 col-2 h-auto pe-3 ratio-1x1" >

                <img src={post.postedBy.avatar_image} className = "img-fluid  rounded-circle " />
            </div>

            <div className="col-xl-9 col-lg-7 col-6 mr-auto p-0 ">
                <div className="d-flex justify-content-between ">
                    <div>
                        <p>
                    <span className="fw-bold m-0"> {post.postedBy && post.postedBy.name}</span>
                            <span className="m-0 wd-username-color" >@{post.postedBy.username && post.postedBy.username}</span>
                        </p>

                        <p><strong>{post.title}</strong></p>
                    </div>


                    <button onClick={() => deletePost(dispatch,post)} className="btn-sm btn-close p-2">

                    </button>


                </div>

                <p className="wd-post-text">
                    {post.text}
                </p>
                <PostStats post = {post}/>





            </div>
            <div className="col-xl-2 col-lg-3 col-4 mx-1  text-center align-self-center wd-post-game">
                <img src={post.game.header_image} className = "img-fluid w-auto h-auto wd-post-game-image" />
                <h6 className="my-auto ">{post.game.name}</h6>
            </div>
            {/*Todo - image/embedding-*/}




        </div>);
};

export default PostListItem;