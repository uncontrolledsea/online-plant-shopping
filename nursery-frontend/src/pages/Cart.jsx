import { useEffect, useState } from "react";
import API from "../services/api";

function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  const updateCart = (newCart) => {
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const updateQuantity = (index, amount) => {
    const newCart = [...cart];
    newCart[index].quantity += amount;
    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }
    updateCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    updateCart(newCart);
  };

  const placeOrder = async () => {
    const totalAmount = cart.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );

    try {
      await API.post("/orders", {
        items: cart.map(item => ({
          product: item._id,
          name: item.name,
          price: item.price,
          quantity: item.quantity
        })),
        totalAmount
      });

      alert("Order placed!");
      updateCart([]);
    } catch (error) {
      alert("Error placing order. Make sure you are logged in!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 border-b pb-2">Your Cart</h2>

        {cart.length === 0 ? (
          <p className="text-gray-500 text-center py-4">Your cart is empty.</p>
        ) : (
          <div className="space-y-4 mb-6">
            {cart.map((item, i) => (
              <div key={i} className="flex justify-between items-center border-b pb-2">
                <div className="flex-1">
                  <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
                  <p className="text-green-600 font-semibold">₹{item.price} x {item.quantity}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => updateQuantity(i, -1)} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">-</button>
                  <span className="font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(i, 1)} className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300">+</button>
                  <button onClick={() => removeItem(i)} className="text-red-500 hover:text-red-700 ml-4 font-medium">Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {cart.length > 0 && (
          <div className="flex justify-between items-center mt-4">
            <h3 className="text-xl font-bold text-gray-800">
              Total: <span className="text-green-600">₹{cart.reduce((sum, item) => sum + item.price * item.quantity, 0)}</span>
            </h3>
            <button className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition duration-200 font-bold" onClick={placeOrder}>Checkout</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;