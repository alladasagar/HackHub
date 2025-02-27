import { Link } from "react-router-dom";

const LogisticsDashboard = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar Navigation */}
      <nav className="w-64 bg-purple-600 text-white p-4">
        <h2 className="text-2xl font-semibold mb-6">Logistics Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link to="/dashboard/shipments" className="block py-2 px-4 rounded hover:bg-purple-500">Manage Shipments</Link>
          </li>
          <li>
            <Link to="/dashboard/orders" className="block py-2 px-4 rounded hover:bg-purple-500">Order Tracking</Link>
          </li>
          <li>
            <Link to="/dashboard/analytics" className="block py-2 px-4 rounded hover:bg-purple-500">Analytics</Link>
          </li>
          <li>
            <Link to="/dashboard/profile" className="block py-2 px-4 rounded hover:bg-purple-500">Profile</Link>
          </li>
        </ul>
      </nav>
      
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-semibold">Welcome, Logistics Manager</h1>
        <p className="mt-2 text-gray-600">Manage your shipments, track orders, and analyze logistics performance.</p>
      </div>
    </div>
  );
};

export default LogisticsDashboard;