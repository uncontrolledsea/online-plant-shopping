import { useEffect, useState } from "react";
import API from "../services/api";

import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/products")
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  const addToCart = (e, product) => {
    e.preventDefault(); // Prevent navigating to the product details page
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item._id === product._id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    alert("Added to cart");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-green-800 mb-8 text-center">🌿 Nursery Plants</h1>

      <div className="flex gap-6 flex-wrap justify-center">
        {products.map(p => (
          <Link to={`/product/${p._id}`} key={p._id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-200 p-4 w-64 flex flex-col items-center cursor-pointer group">
            <img src={p.image} alt={p.name} className="w-40 h-40 object-cover rounded-md mb-4 group-hover:scale-105 transition-transform" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{p.name}</h3>
            <p className="text-lg text-green-600 font-bold mb-4">₹{p.price}</p>
            <button className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-200 w-full" onClick={(e) => addToCart(e, p)}>Add to Cart</button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;