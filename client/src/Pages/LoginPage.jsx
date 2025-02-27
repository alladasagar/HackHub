import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Data:", formData);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      {/* 🔹 Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1597931920019-df56bb8dd46e?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        {/* 🔹 Overlay for better readability */}
        <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div>
      </div>

      {/* 🔹 Login Card */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* 🔹 Logo & Heading */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Welcome Back!
        </h2>
        
        {/* 🔹 Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Email Input */}
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

          {/* Password Input */}
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

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* 🔹 Forgot Password & Signup Links */}
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
    </div>
  );
};

export default Login;
