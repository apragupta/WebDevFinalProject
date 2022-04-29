import axios from "axios";

const API_BASE = process.env.SERVER_APP_API_BASE;
const SEARCH_API = `${API_BASE}/search`;


export const search = async (term) => {
    const response = await axios.get(`${SEARCH_API}?term=${encodeURIComponent(term)}`);
    return response.data;
}