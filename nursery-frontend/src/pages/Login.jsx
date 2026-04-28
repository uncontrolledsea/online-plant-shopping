import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "", isAdmin: false });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("userName", res.data.name);
      localStorage.setItem("isAdmin", res.data.isAdmin);
      alert("Login successful");
      window.location.href = "/";
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Login</h2>

        <div className="mb-4">
          <input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Email"
            onChange={e => setForm({ ...form, email: e.target.value })}
          />
        </div>

        <div className="mb-6">
          <input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" type="password" placeholder="Password"
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <div className="mb-6 flex items-center">
          <input type="checkbox" id="isAdminLogin" className="mr-2"
            onChange={e => setForm({ ...form, isAdmin: e.target.checked })}
          />
          <label htmlFor="isAdminLogin" className="text-gray-700 text-sm">Login as Nursery Owner (Admin)</label>
        </div>

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200" onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Login;