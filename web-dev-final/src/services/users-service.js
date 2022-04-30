import axios from "axios";

const API_BASE = process.env.API_URL  ||  "http://localhost:4000/api";
const USER_API = `${API_BASE}/users`;
const api = axios.create({withCredentials: true})

export const getUser = async (userId) => {
    const response = await api.get(`${USER_API}/${userId}`);
    const user = response.data;
    return user;

}

// TODO: change this so that only the current user can update their profile, use session - move to auth service changes
export const updateUser = async (user) => {
    const response = await api.put(`${USER_API}/${user._id}`,user);
    return response.data;

}

