import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import Login from "./Pages/LoginPage";
import Signup from "./Pages/SignUp";
import UserDashboard from "./components/UserDashBoard";
import ManufacturerDashboard from "./components/ManufacturerDashboard";
import LogisticsDashboard from "./components/LogisticDashboard";
import ManageProducts from "./components/ManageProducts";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Signup />} />
                <Route path="/userdashboard" element={<UserDashboard />} />
                <Route path="/manufacturerdashboard" element={<ManufacturerDashboard />} />
                <Route path="/logisticsdashboard" element={<LogisticsDashboard />} />
                <Route path="/manufacturerdashboard/*" element={<ManufacturerDashboard />}>
                    <Route path="products" element={<ManageProducts />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
