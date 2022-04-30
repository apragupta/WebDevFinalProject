import axios from "axios";
const api = axios.create({withCredentials: true})

// const API_BASE = process.env.REACT_APP_API_BASE;

const API_BASE = process.env.API_URL || "http://localhost:4000/api";
const GAME_API = `${API_BASE}/game`;


export const findGame = async (gid) => {
    const response = await api.get(`${GAME_API}/${encodeURIComponent(gid)}`);
    return response.data;

}

