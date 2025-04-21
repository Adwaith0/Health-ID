import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api/auth";

export const loginUser = async (userData) => {
    const response = await axios.post(`${API_BASE_URL}/login`, userData);
    return response.data;
};