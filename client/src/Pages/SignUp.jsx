import { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "user",
    company: "",
    address: { street: "", city: "", state: "", zipCode: "", country: "" },
    phone: "",
    licenseNumber: "",
    vehicle: { type: "", licensePlate: "", capacity: "" }
  });

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Address & Vehicle Changes
  const handleNestedChange = (e, field) => {
    setFormData({
      ...formData,
      [field]: { ...formData[field], [e.target.name]: e.target.value }
    });
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1597931920019-df56bb8dd46e?auto=format&fit=crop&w=1920&q=80')"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div>
      </div>

      {/* Signup Card */}
      <div className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* Name Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Role</label>
            <select
              name="role"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            >
              <option value="user">User</option>
              <option value="manufacturer">Manufacturer</option>
              <option value="logistics">Logistics Provider</option>
              <option value="driver">Driver</option>
            </select>
          </div>

          {/* Company Field (Only for Manufacturer & Logistics) */}
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

          {/* Phone Input */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>

          {/* Driver Fields */}
          {formData.role === "driver" && (
            <>
              <div>
                <label className="block text-gray-700 font-medium mb-2">License Number</label>
                <input
                  type="text"
                  name="licenseNumber"
                  placeholder="Enter license number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">Vehicle Type</label>
                <select
                  name="type"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => handleNestedChange(e, "vehicle")}
                  required
                >
                  <option value="">Select Vehicle</option>
                  <option value="truck">Truck</option>
                  <option value="van">Van</option>
                  <option value="car">Car</option>
                  <option value="motorcycle">Motorcycle</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">License Plate</label>
                <input
                  type="text"
                  name="licensePlate"
                  placeholder="Enter license plate number"
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  onChange={(e) => handleNestedChange(e, "vehicle")}
                  required
                />
              </div>
            </>
          )}

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Login Link */}
        <div className="text-center mt-4 text-gray-600">
          Already have an account?  
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
