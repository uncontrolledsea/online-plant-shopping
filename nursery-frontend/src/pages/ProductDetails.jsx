import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await API.get(`/products/${id}`);
        setProduct(res.data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const addToCart = () => {
    if (!product) return;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item._id === product._id);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
    toast.success(`${quantity}x ${product.name} added to cart!`);
    
    // Optional: wait a moment before navigating, or don't navigate if you want them to stay on page
    // navigate("/cart"); 
  };

  if (loading) return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center bg-gray-50">
      <Spinner />
    </div>
  );
  
  if (!product) return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 flex-col">
      <div className="text-6xl mb-4">🥀</div>
      <h2 className="text-2xl font-bold text-gray-800">Product not found.</h2>
      <button onClick={() => navigate('/')} className="mt-6 text-emerald-600 hover:text-emerald-700 font-medium">← Back to shop</button>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto w-full bg-white rounded-3xl shadow-xl shadow-emerald-900/5 overflow-hidden border border-gray-100">
        <div className="lg:flex">
          
          {/* Image Section */}
          <div className="lg:w-1/2 bg-emerald-50 p-8 lg:p-16 flex items-center justify-center relative">
            {/* Decorative blob */}
            <div className="absolute inset-0 overflow-hidden">
              <svg className="absolute left-0 top-0 text-emerald-100 w-full h-full transform scale-150" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.6,-46.1C91.4,-33.1,98,-16.6,97.7,-0.2C97.4,16.2,90.2,32.4,80.1,45.5C70,58.6,57,68.6,42.7,75.1C28.4,81.6,14.2,84.6,-0.6,85.6C-15.4,86.6,-30.8,85.5,-44.6,78.7C-58.4,71.9,-70.6,59.4,-79.3,44.9C-88,30.4,-93.2,15.2,-93.5,-0.2C-93.8,-15.6,-89.2,-31.2,-80.6,-44.6C-72,-58,-59.4,-69.2,-45.3,-76.4C-31.2,-83.6,-15.6,-86.8,0.2,-87.2C16,-87.6,30.6,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
              </svg>
            </div>
            
            <button onClick={() => navigate(-1)} className="absolute top-6 left-6 text-gray-500 hover:text-gray-900 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-sm hover:shadow-md transition-all z-20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>

            <img
              src={product.image || "https://placehold.co/600x600?text=Plant+Image"}
              alt={product.name}
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/600x600?text=Plant+Image"; }}
              className="w-full max-w-md object-contain relative z-10 drop-shadow-2xl mix-blend-multiply"
            />
          </div>

          {/* Details Section */}
          <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
            
            <div className="mb-8">
              <div className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 text-sm font-bold uppercase tracking-widest rounded-full mb-4">
                {product.category || "Plant"}
              </div>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">{product.name}</h2>
              <p className="text-3xl text-emerald-600 font-black">₹{product.price}</p>
            </div>

            <p className="text-lg text-gray-600 mb-10 leading-relaxed font-light">
              {product.description || "A beautiful plant for your home or garden, known for its elegant foliage and air-purifying qualities."}
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {product.sunlight && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="text-yellow-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Sunlight</span>
                  <span className="font-bold text-gray-800">{product.sunlight}</span>
                </div>
              )}
              {product.water && (
                <div className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                  <div className="text-blue-500 mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <span className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1">Watering</span>
                  <span className="font-bold text-gray-800">{product.water}</span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 mt-auto">
              {/* Quantity Selector */}
              <div className="flex items-center bg-gray-100 rounded-full p-1 border border-gray-200">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-600 hover:text-emerald-600 hover:shadow-sm font-bold text-xl transition-all"
                >
                  -
                </button>
                <span className="w-12 text-center font-bold text-xl text-gray-900">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-gray-600 hover:text-emerald-600 hover:shadow-sm font-bold text-xl transition-all"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="flex-grow w-full bg-gray-900 text-white py-4 px-8 rounded-full hover:bg-emerald-600 shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 font-bold text-lg flex justify-center items-center gap-3 transform hover:-translate-y-1"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to Cart
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
