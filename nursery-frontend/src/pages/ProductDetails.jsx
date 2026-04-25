import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../services/api";

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
    alert("Added to cart");
    navigate("/cart");
  };

  if (loading) return <div className="text-center py-20 text-gray-500">Loading product...</div>;
  if (!product) return <div className="text-center py-20 text-red-500">Product not found.</div>;

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-96 w-full object-cover"
            />
          </div>
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <div className="uppercase tracking-wide text-sm text-green-600 font-semibold mb-1">
              {product.category || "Plant"}
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
            <p className="text-2xl text-green-700 font-bold mb-6">₹{product.price}</p>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description || "A beautiful plant for your home or garden."}
            </p>

            <div className="flex flex-col gap-2 mb-8">
              {product.sunlight && (
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold w-24">Sunlight:</span> 
                  <span>{product.sunlight}</span>
                </div>
              )}
              {product.water && (
                <div className="flex items-center text-sm text-gray-600">
                  <span className="font-semibold w-24">Watering:</span> 
                  <span>{product.water}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-4 mb-6 border-t pt-6">
              <span className="font-medium text-gray-700">Quantity:</span>
              <div className="flex items-center border rounded-md">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold"
                >
                  -
                </button>
                <span className="px-4 py-1 font-semibold">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold"
                >
                  +
                </button>
              </div>
            </div>

            <button 
              onClick={addToCart}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition font-bold text-lg shadow-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
