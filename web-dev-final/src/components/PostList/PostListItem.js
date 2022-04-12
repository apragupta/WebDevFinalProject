import React from "react"
import {useDispatch} from "react-redux";
import PostStats from "./PostStats.js";
import {deletePost} from "../../actions/posts-actions";


const PostListItem = ({post}) => {
    const dispatch = useDispatch();


    return(
        <div className="list-group-item d-flex   m-0 py-2 "style={{
            backgroundColor: "inherit"
        }}>
            <div className="col-2 h-auto pe-2" >

                <img src={post.postedBy.avatar_image} className = "img-fluid w-100 h-auto rounded-circle my-auto px-2 py-1" />
            </div>

            <div className="col-10 mr-auto p-0 ">
                <div className="d-flex justify-content-between ">
                    <div>
                        <p>
                    <span className="fw-bold m-0"> {post.postedBy && post.postedBy.name}
                        <span> </span>
                    </span>
                            <span className="m-0" style={{color: "rgb(82, 88, 92)"}}>@{post.postedBy.username && post.postedBy.username}</span>
                        </p>
                    </div>


                    <button onClick={() =>
                        deletePost(dispatch,post)} className="btn btn-danger align-self-center fa-pull-right rounded-pill p-0"
                            style={{"backgroundColor":"transparent", "border": "0"}}>
                        x
                    </button>


                </div>

                <p>
                    {post.text}
                </p>
                <PostStats post = {post}/>





            </div>
            {/*Todo - image/embedding-*/}




        </div>);
};

export default PostListItem;