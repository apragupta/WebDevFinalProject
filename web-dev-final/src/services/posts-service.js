// import sample_posts from "../sample_data/posts.js"
import axios from "axios";
// let my_posts = sample_posts;


// UNCOMMENT COMMENTED STUFF WHEN SERVER IS READY
//const API_BASE = process.env.REACT_APP_API_BASE;



//const POSTS_API = `${API_BASE}/posts`;
const API_BASE = process.env.API_URL || "http://localhost:4000/api";
const POSTS_API = `${API_BASE}/posts`;
const USER_API = `${API_BASE}/users`;
const GAME_API = `${API_BASE}/game`;




export const createPost = async (post) => {
    
    
    const newPost = post;
    const response = await axios.post(POSTS_API, newPost)
    return response.data;

}
export const findAllPosts = async () => {
    const response = await axios.get(POSTS_API);
    const posts = response.data;
    return posts;

    // const get_posts = await my_posts
    // return get_posts;
}
export const deletePost = async (post) => {
    const response = await axios.delete(`${POSTS_API}/${post._id}`);
    return response.data;

    // const postIdToDelete = post._id;
    // my_posts = my_posts.filter(p=> p._id !== postIdToDelete);
}
export const updatePost = async (post) => {
    const response = await axios.put(`${POSTS_API}/${post._id}`,post);
    return response.data;

    // const postIdToUpdate = post._id;
    // const updatePost = post;
    // my_posts = my_posts.map(p => p._id === postIdToUpdate? updatePost: p);

}

export const findPostsByGameId = async (gid) => {
    const response = await axios.get(`${GAME_API}/${encodeURIComponent(gid)}/posts`);
    return response.data;
}

export const getPostsByUserId = async (userId) => {
    const response = await axios.get(`${USER_API}/${userId}/posts`);
    const posts = response.data;
    return posts;
}

export const getLikedPostsByUserId = async (userId) => {
    const response = await axios.get(`${USER_API}/${userId}/likes`);
    const posts = response.data;
    return posts;
}

export const getDislikedPostsByUserId = async (userId) => {
    const response = await axios.get(`${USER_API}/${userId}/dislikes`);
    const posts = response.data;
    return posts;
}

export const getBookmarkedPostsByUserId = async (userId) => {
    const response = await axios.get(`${USER_API}/${userId}/bookmarks`);
    const posts = response.data;
    return posts;
}
