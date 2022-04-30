import axios from "axios";

const API_BASE = process.env.API_URL  ||  "http://localhost:4000/api";
const USER_API = `${API_BASE}/users`;


export const getUser = async (userId) => {
    const response = await axios.get(`${USER_API}/${userId}`);
    const user = response.data;
    return user;

}

// TODO: change this so that only the current user can update their profile, use session
export const updateUser = async (user) => {
    const response = await axios.put(`${USER_API}/${user._id}`,user);
    return response.data;

}

