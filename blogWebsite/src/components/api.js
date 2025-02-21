import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/auth/login`, { email, password });
    return response.data; // This contains the JWT token
  } catch (error) {
    console.error("Login error:", error.response?.data || error.message);
    throw error;
  }
};
