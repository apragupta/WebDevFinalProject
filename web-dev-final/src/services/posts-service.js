import sample_posts from "../sample_data/posts.js"
let my_posts = sample_posts;


// UNCOMMENT COMMENTED STUFF WHEN SERVER IS READY
//import axios from "axios";
//const API_BASE = process.env.REACT_APP_API_BASE;



//const POSTS_API = `${API_BASE}/posts`;
//const POSTS_API = 'https://web-dev-node-a8-ag.herokuapp.com/api/posts'




export const createPost = async (post) => {
    //const response = await axios.post(POSTS_API, post)
    //return response.data;
    const newPost =   post;
    newPost._id =  (new Date()).getTime() + '';
    newPost.stats  = {"likes":0, "comments":0, "dislikes": 0}
    //default username and image is: Apra Gupta
    newPost.postedBy = {
        "_id": 1,
        "name": "Apra Gupta",
        "username": "apragupta",
        "avatar_image": "https://i.imgur.com/xdq1OiK.jpg"

    }
    console.log("my_posts")
    console.log(my_posts)
    my_posts.unshift(newPost);
    console.log("my_posts2")
    console.log(my_posts)

    return newPost;

}
export const findAllPosts = async () => {
    //const response = await axios.get(POSTS_API);
    //const posts = response.data;
    //return posts;

    const get_posts = await my_posts
    return get_posts;
}
export const deletePost = async (post) => {
    //const response = await axios.delete(`${POSTS_API}/${post._id}`);
    //return response.data;

    const postIdToDelete = post._id;
    my_posts = my_posts.filter(p=> p._id !== postIdToDelete);
}
export const updatePost = async (post) => {
    // const response = await axios.put(
    //     `${POSTS_API}/${post._id}`,post);
    // return response.data;

    const postIdToUpdate = post._id;
    const updatePost = post;
    my_posts = my_posts.map(p => p._id === postIdToUpdate? updatePost: p);

}


