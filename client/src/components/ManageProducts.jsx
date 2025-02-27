import { useEffect, useState } from "react";
import { fetchProducts, addProduct } from "../apis/products";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [productData, setProductData] = useState({
    name: "",
    price: "",
    quantity: "",
    description: ""
  });
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  // Fetch products on component mount
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const productList = await fetchProducts();
        setProducts(productList);
      } catch (error) {
        setMessage("Failed to load products.");
      }
    };

    loadProducts();
  }, []);

  // Handle adding new product
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const user = JSON.parse(localStorage.getItem("user"));
        const manufacturerId = user?.id || "";
        const response = await addProduct(productData, manufacturerId);

      setMessage(response.message);
      setProductData({ name: "", price: "", quantity: "", description: "" });
      setShowForm(false);

      // Refresh product list
      setProducts([...products, response.product]);
    } catch (error) {
      setMessage("Failed to add product.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-semibold mb-4">Manage Products</h2>

      {message && <p className="text-green-600 mb-2">{message}</p>}

      {/* Add Product Button */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {showForm ? "Close Form" : "Add New Product"}
      </button>

      {/* Add Product Form */}
      {showForm && (
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-100 p-4 rounded">
          <input
            type="text"
            placeholder="Product Name"
            className="w-full px-4 py-2 border rounded"
            value={productData.name}
            onChange={(e) => setProductData({ ...productData, name: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Price"
            className="w-full px-4 py-2 border rounded"
            value={productData.price}
            onChange={(e) => setProductData({ ...productData, price: e.target.value })}
            required
          />
          <input
            type="number"
            placeholder="Quantity"
            className="w-full px-4 py-2 border rounded"
            value={productData.quantity}
            onChange={(e) => setProductData({ ...productData, quantity: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            className="w-full px-4 py-2 border rounded"
            value={productData.description}
            onChange={(e) => setProductData({ ...productData, description: e.target.value })}
            required
          />
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Save Product
          </button>
        </form>
      )}

      {/* Display Product List */}
      <h3 className="text-xl font-semibold mt-6">Product List</h3>
      <table className="w-full border-collapse border mt-4">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Quantity</th>
            <th className="border px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id} className="text-center">
                <td className="border px-4 py-2">{product.name}</td>
                <td className="border px-4 py-2">${product.price}</td>
                <td className="border px-4 py-2">{product.quantity}</td>
                <td className="border px-4 py-2">{product.description}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center py-4">No products available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
