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
    const calcDislikes = (post) => {
        //calculates the new number of likes depending on whether the tweet is already liked
        if(post.disliked){
            return post.stats.dislikes -1
        }
        else{
            return post.stats.dislikes + 1
        }

    }


    const handleLike = () => {
        if (post.disliked) {
            updatePost(dispatch, {
                ...post,
                stats: {
                    ...post.stats,
                    likes: post.stats.likes + 1,
                    dislikes: post.stats.dislikes - 1
                },
                liked: !post.liked,
                disliked: !post.disliked
            });
        } else {
            updatePost(dispatch, {
                ...post,
                stats: {
                    ...post.stats,
                    likes: calcLikes(post)
                },
                liked: !post.liked
            });
        }
    }

    const handleDislike = () => {
        // if user liked the post, dislike should dec likes by 1 and inc dislikes by 1
        // if otherwise inc dislikes by 1 if not disliked and dec by 1 if already disliked
        if (post.liked) {
            updatePost(dispatch, {
                ...post,
                stats: {
                    ...post.stats,
                    dislikes: post.stats.dislikes + 1,
                    likes: post.stats.likes - 1
                },
                disliked: !post.disliked,
                liked: !post.liked
            });
        } else {
            updatePost(dispatch, {
                ...post,
                stats: {
                    ...post.stats,
                    dislikes: calcDislikes(post)
                },
                disliked: !post.disliked
            });
        }
    }

    const handleBookmark = () => {
        updatePost(dispatch, {
            ...post,
            bookmarked: !post.bookmarked
        });
    }


    return (
        <div className="d-flex justify-content-around">
            <i className="far fa-comment mx-1"> { post.stats && post.stats.comments} </i>
            <span onClick={handleDislike} className="align-text-top">
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
                      post.bookmarked &&
                      <i className="fa fa-bookmark d-flex float-start"
                         style={{color: 'white'}}>
                      </i>
                  }
                {
                    !post.bookmarked &&
                    <i className="far fa-bookmark  float-start">

                    </i>
                }

            </span>
        </div>


    );
}
export default PostStats;

