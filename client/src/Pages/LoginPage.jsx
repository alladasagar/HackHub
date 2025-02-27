import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apis/auth"; // Import API function
import { ToastContainer, toast } from 'react-toastify';
const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    if (!formData.email || !formData.password) {
        setError("Please fill in all required fields.");
        return;
    }

    try {
        console.log(response); 

        if (response.token) {
            localStorage.setItem("token", response.token); 
            
            if (response.role) { 
                if (response.role === "manufacturer") {
                    navigate("/manufacturerdashboard");
                } else if (response.role === "logistics") {
                    navigate("/logisticsdashboard");
                } else {
                    navigate("/userdashboard");
                }
            } else {
                setError("Role not found in response.");
            }
        } else {
            setError(response.message);
        }
    } catch (err) {
        setError(err.response?.data?.message || "Login failed.");
    }
};


  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')" }}>
        <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div>
      </div>

      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>

        {error && <p className="text-red-600 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Login
          </button>
        </form>

        <div className="text-center mt-4">
          <Link to="#" className="text-blue-600 hover:underline">
            Forgot Password?
          </Link>
        </div>
        <div className="text-center mt-2 text-gray-600">
          Don't have an account?  
          <Link to="/register" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </Link>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
