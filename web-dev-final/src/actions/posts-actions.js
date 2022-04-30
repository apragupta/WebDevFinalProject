import * as service from '../services/posts-service'
import {USER_POSTS} from "./users-actions";

export const CREATE_POST = 'CREATE_POST';
export const FIND_POSTS = 'FIND_ALL_POSTS';
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



