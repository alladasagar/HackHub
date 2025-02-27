import axios from "axios";
const BASE_URL = "http://localhost:5000"; 

export const signup = async (userData) => {
    try {
        const response = await axios.post("/auth/signup", userData);
        return response.data;
    }
    catch(error){
        throw error;
    }
}