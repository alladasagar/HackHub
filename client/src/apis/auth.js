import axios from "axios";

const BASE_URL = "http://localhost:5000/auth"; // Change to your backend URL

// ✅ Login API Request
export const login = async (userData) => {
    console.log(userData);
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// ✅ Signup API Request
export const signup = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
