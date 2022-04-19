import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;


const GAME_API = `${API_BASE}/apps`;


export const findGame = async (gid) => {
    const response = await axios.get(`${GAME_API}?appid=${encodeURIComponent(gid)}`);
    return response.data;

}