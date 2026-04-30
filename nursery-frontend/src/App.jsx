import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import ProductDetails from "./pages/ProductDetails";
import AdminDashboard from "./pages/AdminDashboard";
import Chatbot from "./components/Chatbot/Chatbot";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const token = localStorage.getItem("token");
  const userName = localStorage.getItem("userName");
  const isAdmin = localStorage.getItem("isAdmin") === "true";
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
      <ScrollToTop />
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-col min-h-screen">
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-100 shadow-sm transition-all duration-300">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link to="/" className="flex items-center gap-2 group">
                <span className="text-3xl transition-transform group-hover:scale-110 duration-300">🌿</span>
                <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent tracking-tight">FloraNursery</span>
              </Link>

              {/* Navigation Links */}
              <div className="flex items-center gap-6">
                <Link to="/" className="text-gray-600 font-medium hover:text-emerald-600 transition-colors">Home</Link>
                
                <Link to="/cart" className="relative p-2 text-gray-600 hover:text-emerald-600 transition-colors flex items-center gap-1 font-medium">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  Cart
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 transform translate-x-1 -translate-y-1 bg-emerald-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center shadow-md animate-pulse-slow">
                      {cartCount}
                    </span>
                  )}
                </Link>

                {/* Auth & User */}
                <div className="flex items-center gap-4 border-l border-gray-200 pl-6 ml-2">
                  {token ? (
                    <>
                      {isAdmin && (
                        <Link to="/admin" className="text-gray-600 font-medium hover:text-emerald-600 transition-colors">Admin</Link>
                      )}
                      <Link to="/orders" className="text-gray-600 font-medium hover:text-emerald-600 transition-colors">Orders</Link>
                      <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-full border border-emerald-100">
                        <span className="text-sm font-semibold text-emerald-800 tracking-wide">Hi, {userName || "User"}</span>
                      </div>
                      <button onClick={handleLogout} className="text-sm font-medium text-gray-500 hover:text-red-500 transition-colors">Logout</button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" className="text-gray-600 font-medium hover:text-emerald-600 transition-colors">Log In</Link>
                      <Link to="/register" className="bg-emerald-600 text-white px-5 py-2 rounded-full font-medium shadow-md shadow-emerald-200 hover:bg-emerald-700 hover:shadow-lg transition-all active:scale-95">Sign Up</Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/admin" element={isAdmin ? <AdminDashboard /> : <Navigate to="/" replace />} />
          </Routes>
        </main>
        
        <Chatbot />

        {/* Simple Footer */}
        <footer className="bg-white border-t border-gray-100 mt-12 py-8">
          <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} FloraNursery. Bringing nature indoors.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;