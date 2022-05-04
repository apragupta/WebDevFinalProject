import axios from "axios";

const API_BASE = process.env.API_URL  ||  "http://localhost:4000/api";
const USER_API = `${API_BASE}/users`;

const api = axios.create({withCredentials: true})

export const getUser = async (userId) => {
    const response = await api.get(`${USER_API}/${userId}`);
    const user = response.data;
    return user;

}

export const getUserGamesFollowed = async (userId) =>{
    const response = await api.get(`${USER_API}/${userId}/followed`);
    const games = response.data;
    return games;
}

// TODO: change this so that only the current user can update their profile, use session - move to auth service changes
export const updateUser = async (user) => {
    const response = await api.put(`${USER_API}/${user._id}`,user);
    return response.data;

}

export const currentUserFollowGame = async (gid) =>{
    const response = await api.post(`${USER_API}/follow-game/${encodeURIComponent(gid)}`);
    return response.data;

}

export const userLikedPost = async (userId,postId)=>{
    const liked = await api.get(`${USER_API}/${encodeURIComponent(userId)}/liked/post/${encodeURIComponent(postId)}`);
    console.log("liked service")
    console.log(liked.data)
    return liked.data

}
export const userDisLikedPost = async (userId,postId)=>{
    const disliked = await api.get(`${USER_API}/${encodeURIComponent(userId)}/disliked/post/${encodeURIComponent(postId)}`);
    console.log("dislike service")
    console.log(disliked.data)
    return disliked.data
}
export const userBookmarkedPost = async (userId,postId)=>{
    const bookmarked = await api.get(`${USER_API}/${encodeURIComponent(userId)}/bookmarked/post/${encodeURIComponent(postId)}`);
    console.log("bookmark service")
    console.log(bookmarked.data)
    return bookmarked.data
}