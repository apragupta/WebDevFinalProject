import axios from "axios";

const API_BASE = process.env.SERVER_APP_API_BASE || 'http://localhost:4000/api';

const GAME_API = `${API_BASE}/apps`;


export const findGame = async (gid) => {
    const response = await axios.get(`${GAME_API}?appid=${encodeURIComponent(gid)}`);
    return response.data;

}