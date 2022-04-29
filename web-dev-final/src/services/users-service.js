import axios from "axios";

const API_BASE = process.env.API_URL  ||   'https://webdev-final-server-1.herokuapp.com/api';
const POSTS_API = `${API_BASE}/users`;


export const getUser = async (userId) => {
    const response = await axios.get(`${POSTS_API}/users/${userId}`);
    const posts = response.data;
    return posts;

}
export const updateUser = async (user) => {
    const response = await axios.put(`${POSTS_API}/users/${user._id}`,user);
    return response.data;

}