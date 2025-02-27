import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

// Fetch all products
export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.products;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Add a new product
export const addProduct = async (productData, manufacturerId) => {
  try {
    const response = await axios.post(`${API_URL}/add`, {
      ...productData,
      manufacturerId
    });
    return response.data;
  } catch (error) {
    console.error("Error adding product:", error);
    throw error;
  }
};
