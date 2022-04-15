import React from "react"
import {useDispatch} from "react-redux";
import PostStats from "./PostStats.js";
import {deletePost} from "../../actions/posts-actions";
import "./post-list.css"

const PostListItem = ({post}) => {
    const dispatch = useDispatch();


    return(
        <div className="list-group-item d-flex my-2 p-3 wd-inherit-bkg wd-post-list">
            <div className="col-lg-2 col-sm-3 col-4  h-auto  p-0 ratio-1x1 pe-4  pt-1" >

                <img src={post.postedBy.avatar_image} className = "img-fluid   rounded-circle wd-avatar-border " />
            </div>

            <div className="col-lg-7 col-sm-6 col-5 mr-auto p-0 ">
                <div className="d-flex justify-content-between ">
                    <div>
                        <div className="d-flex justify-content-start mb-1">
                            <div className="fw-bold me-1 "> {post.postedBy && post.postedBy.name}</div>
                            <div className="me-1 wd-username-color" >@{post.postedBy.username && post.postedBy.username}</div>
                        </div>

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
            <div className="col-lg-3 col-sm-3 d-sm-block d-none ms-1  p-0 text-center align-self-center wd-post-game">
                <img src={post.game.header_image} className = "img-fluid w-auto h-auto wd-post-game-image" />
                <h6 className="my-auto ">{post.game.name}</h6>
            </div>
            {/*Todo - image/embedding-*/}




        </div>);
};

export default PostListItem;