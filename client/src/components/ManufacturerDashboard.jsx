import { Link } from "react-router-dom";

const ManufacturerDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-green-600 text-white p-4">
        <h2 className="text-2xl font-semibold mb-6">Manufacturer Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/manufacturerdashboard/products" className="block py-2 px-4 rounded hover:bg-green-500">Manage Products</Link>
          </li>
          <li>
            <Link to="/dashboard/orders" className="block py-2 px-4 rounded hover:bg-green-500">Order Requests</Link>
          </li>
          <li>
            <Link to="/dashboard/analytics" className="block py-2 px-4 rounded hover:bg-green-500">Analytics</Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="block py-2 px-4 rounded hover:bg-green-500">Profile</Link>
          </li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold">Welcome, Manufacturer</h1>
        <p className="mt-2 text-gray-600">Manage your products, orders, and analytics efficiently.</p>
      </div>
    </div>
  );
};

export default ManufacturerDashboard;