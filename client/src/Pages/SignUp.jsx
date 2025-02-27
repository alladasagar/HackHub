import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../apis/auth";
import { ToastContainer, toast } from 'react-toastify';

const Signup = () => {
  const navigate = useNavigate(); // ✅ To redirect after successful signup

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    company: "",
    address: { street: "", city: "", state: "", zipCode: "", country: "" },
    phone: ""
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    
    // Basic Validation
    if (!formData.name || !formData.email || !formData.password || !formData.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await signup(formData); // ✅ Call the API function

      if (response) {
        toast.success("Signup successful!");
        navigate("/login"); 
      }
    } catch (error) {
      console.error("Signup failed:", error.response?.data || error.message);
    }
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1597931920019-df56bb8dd46e?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div>
      </div>

      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
        
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">Role</label>
            <select
              name="role"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
             
            >
              <option value="user">User</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="logistics">Logistics Provider</option>
            </select>
          </div>

          {(formData.role === "manufacturer" || formData.role === "logistics") && (
            <div>
              <label className="block text-gray-700 font-medium mb-2">Company Name</label>
              <input
                type="text"
                name="company"
                placeholder="Enter company name"
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center mt-4 text-gray-600">
          Already have an account?  
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
      <ToastContainer/>
    </div>
  );
};

export default Signup;
