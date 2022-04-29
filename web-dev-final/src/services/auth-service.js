
import axios from "axios";
const API_BASE = process.env.SERVER_APP_API_BASE;
const api = axios.create({ withCredentials: true });

export const signup = async (email, password) => {
    const response = await api.post(`${API_BASE}/signup`, { email, password });
    return response.data;
}

export const signin = async (email, password) => {
    const response = await api.post(`${API_BASE}/signin`, { email, password });
    return response.data;
}

export const profile = async () => {
    const response = await api.post(`${API_BASE}/profile`);
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${API_BASE}/logout`);
    return response.data;
}