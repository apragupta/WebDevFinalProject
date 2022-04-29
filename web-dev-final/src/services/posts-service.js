// import sample_posts from "../sample_data/posts.js"
import axios from "axios";
// let my_posts = sample_posts;

const API_BASE = process.env.SERVER_APP_API_BASE || 'https://webdev-final-server-1.herokuapp.com/api';
const POSTS_API = `${API_BASE}/posts`;
console.log(POSTS_API);

export const createPost = async (post) => {
    const newPost = post;
    // newPost._id =  (new Date()).getTime() + '';
    newPost.stats  = {"likes":0, "comments":0, "dislikes": 0}
    // default username and image is: Apra Gupta
    newPost.postedBy = {
        "_id": 1,
        "name": "Apra Gupta",
        "username": "apragupta",
        "avatar_image": "https://i.imgur.com/xdq1OiK.jpg"
    };
    
    const response = await axios.post(POSTS_API, newPost);

    // my_posts.unshift(newPost);

    // return newPost;
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