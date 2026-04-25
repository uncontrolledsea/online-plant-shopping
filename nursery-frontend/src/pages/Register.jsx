import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully");
      navigate("/login");
    } catch {
      alert("Error registering");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Register</h2>

        <div className="mb-4">
          <input className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Name"
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
        </div>

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

        <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-200" onClick={handleRegister}>Register</button>
      </div>
    </div>
  );
}

export default Register;