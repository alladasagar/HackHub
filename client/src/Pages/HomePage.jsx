import React from "react";
import { Link } from "react-router-dom";
import { Truck, Package, Users, Map, Search, Phone, Mail, Globe } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 🚀 Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center text-white">
  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center" 
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1920&q=80')"
    }}
  >
    {/* Overlay with decreased opacity */}
    <div className="absolute inset-0 bg-blue-600 bg-opacity-50"></div>
  </div>

  {/* Hero Content */}
  <div className="relative z-10 text-center px-6 md:px-12">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
      Streamline Your Logistics Operations
    </h1>
    <p className="text-xl mb-8 max-w-2xl mx-auto">
      Real-time tracking, efficient management, and seamless coordination for manufacturers, logistics providers, and customers.
    </p>

    {/* Buttons */}
    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
      <Link to="/register" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50">
        Get Started
      </Link>
      <Link to="/login" className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
        Login
      </Link>
    </div>
  </div>
</section>


      {/* ⭐ Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {[ 
              { Icon: Truck, title: "Real-time Tracking", desc: "Monitor your shipments in real-time with GPS tracking." },
              { Icon: Package, title: "Shipment Management", desc: "Efficiently manage all shipments from one dashboard." },
              { Icon: Users, title: "Multi-user Platform", desc: "Connect manufacturers, logistics providers, and customers." },
              { Icon: Map, title: "Route Optimization", desc: "Optimize delivery routes for faster, more efficient deliveries." }
            ].map(({ Icon, title, desc }, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 💬 Testimonials Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {[ 
              { name: "John Doe", review: "Fantastic service! Tracking was smooth and accurate.", role: "Manufacturer" },
              { name: "Emily Smith", review: "Reliable and efficient. Made my logistics workflow easy.", role: "Logistics Provider" },
              { name: "David Lee", review: "Loved the real-time tracking feature. Highly recommended!", role: "Customer" }
            ].map(({ name, review, role }, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-600 italic">"{review}"</p>
                <h4 className="text-lg font-semibold mt-4">{name}</h4>
                <p className="text-sm text-blue-600">{role}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      

      {/* 🏁 Footer */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <Link to="#" className="hover:text-blue-400"><Phone /> +1 234 567 890</Link>
            <Link to="#" className="hover:text-blue-400"><Mail /> support@logistics.com</Link>
            <Link to="#" className="hover:text-blue-400"><Globe /> www.logistics.com</Link>
          </div>
          <p className="text-gray-400">© {new Date().getFullYear()} Logistics Management. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
};

export default HomePage;
