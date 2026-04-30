import { useEffect, useState } from "react";
import API from "../services/api";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "../components/Spinner";

function Home() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    API.get("/products")
      .then(res => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
      });
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
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] bg-emerald-900 flex items-center justify-center overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466692476877-6d1522f18625?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-emerald-900/90"></div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto transform translate-y-4 animate-fade-in-up">
          <span className="text-emerald-300 font-semibold tracking-wider uppercase text-sm mb-4 block">Premium Plant Collection</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Bring Nature <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-100">Indoors</span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-100/90 font-light max-w-2xl mx-auto mb-8">
            Discover our curated selection of beautiful, healthy plants to breathe life into your space.
          </p>
          <a href="#products" className="inline-block bg-white text-emerald-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-50 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:-translate-y-1">
            Shop Collection
          </a>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Our Best Sellers</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto rounded-full"></div>
        </div>

        {isLoading ? (
          <Spinner />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map(p => {
              return (
                <Link
                  to={`/product/${p._id}`}
                  key={p._id}
                  className="group flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Image Container */}
                  <div className="relative aspect-square overflow-hidden bg-gray-50 p-6 flex items-center justify-center">
                    <div className="absolute inset-0 bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                      src={p.image || "https://placehold.co/400x400?text=Plant+Image"}
                      alt={p.name}
                      onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x400?text=Plant+Image"; }}
                      className="w-full h-full object-contain rounded-xl relative z-10 group-hover:scale-110 transition-transform duration-500 drop-shadow-md"
                    />
                    {/* Category Badge */}
                    {p.category && (
                      <span className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {p.category}
                      </span>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1 line-clamp-1 group-hover:text-emerald-700 transition-colors">{p.name}</h3>
                    <div className="flex justify-between items-center mb-4 mt-auto pt-4">
                      <p className="text-2xl text-emerald-600 font-extrabold tracking-tight">₹{p.price}</p>
                    </div>

                    {/* Add to Cart Button */}
                    <button
                      className="w-full bg-gray-900 text-white font-semibold py-3 rounded-xl hover:bg-emerald-600 transition-colors duration-300 shadow-md flex justify-center items-center gap-2 group/btn"
                      onClick={(e) => addToCart(e, p)}
                    >
                      <span>Add to Cart</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover/btn:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </Link>)
            })}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;