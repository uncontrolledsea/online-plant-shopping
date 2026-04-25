import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";

function App() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  useEffect(() => {
    const handleCartUpdate = () => {
      setCartItems(JSON.parse(localStorage.getItem("cart")) || []);
    };
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    window.location.href = "/";
  };

  return (
    <Router>
      <nav className="bg-green-700 text-white p-4 shadow-md flex justify-between items-center">
        <h1 className="text-xl font-bold">
          <Link to="/">🌿 Nursery</Link>
        </h1>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-green-200 transition">Home</Link>
          <Link to="/cart" className="hover:text-green-200 transition relative">
            Cart
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">{cartCount}</span>
            )}
          </Link>
          {token ? (
            <>
              <Link to="/orders" className="hover:text-green-200 transition">My Orders</Link>
              <span className="font-medium">Hi, {userName || "User"}</span>
              <button onClick={handleLogout} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition font-medium">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-green-200 transition">Login</Link>
              <Link to="/register" className="bg-white text-green-700 px-3 py-1 rounded hover:bg-green-100 transition font-medium">Register</Link>
            </>
          )}
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
}

export default App;