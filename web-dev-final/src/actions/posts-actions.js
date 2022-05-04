import * as service from '../services/posts-service'


export const CREATE_POST = 'CREATE_POST';
export const FIND_POSTS = 'FIND_POSTS';
export const UPDATE_POST = 'UPDATE_POST';
export const DELETE_POST = 'DELETE_POST';


export const createPost = async (dispatch, post) => {
    const newPost = await service.createPost(post);

    dispatch({
        type: CREATE_POST,
        newPost
    });
}
export const findAllPosts = async (dispatch) => {
    const posts = await service.findAllPosts();
    dispatch({
        type: FIND_POSTS,
        posts
    });
}
export const updatePost = async (dispatch, post) => {
    const status = await service.updatePost(post);
    dispatch({
        type: UPDATE_POST,
        post
    });
}

export const refreshPost = async (dispatch, post_id) => {
    const post = await service.findPostById(post_id);
    dispatch({
        type: UPDATE_POST,
        post
    });
    return post
}

export const deletePost = async (dispatch, post) => {
    const response = await service.deletePost(post);
    dispatch({
        type: DELETE_POST,
        post
    });
}

export const findGamePosts = async (dispatch, gid) => {
    const posts = await service.findPostsByGameId(gid);
    dispatch({
        type: FIND_POSTS,
        posts
    });

}

export const findUserPosts = async (dispatch, userId) => {
    const posts = await service.getPostsByUserId(userId);
    dispatch({
        type: FIND_POSTS,
        posts
    });

}

export const findUserLikedPosts = async (dispatch, userId) => {
    const posts = await service.getLikedPostsByUserId(userId);
    dispatch({
        type: FIND_POSTS,
        posts
    });

}

export const findUserDislikedPosts = async (dispatch, userId) => {
    const posts = await service.getDislikedPostsByUserId(userId);
    dispatch({
        type: FIND_POSTS,
        posts
    });

}

export const findUserBookmarkedPosts = async (dispatch, userId) => {
    const posts = await service.getBookmarkedPostsByUserId(userId);
    dispatch({
        type: FIND_POSTS,
        posts
    });

}

export const userToggleBookmarkPost = async (postId) => {
    const status = await service.toggleUserBookmarkPost(postId);
}
export const userToggleLikePost = async (postId) => {
    const status = await service.toggleUserLikePost(postId);
}
export const userToggleDislikePost = async (postId) => {
    const status = await service.toggleUserDislikePost(postId);
}
export const findGamesFollowedPosts = async (dispatch,userId) => {
    const posts = await service.getFollowedPostsByUserId(userId);
    console.log("posts of games followed")
    console.log(posts)
    dispatch({
        type: FIND_POSTS,
        posts
    });

}



