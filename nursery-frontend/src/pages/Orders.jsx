import { useEffect, useState } from "react";
import API from "../services/api";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await API.get("/orders/my");
        setOrders(res.data);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-green-800 mb-6 border-b pb-2">My Orders</h2>

        {loading ? (
          <p className="text-center text-gray-500 py-4">Loading your orders...</p>
        ) : orders.length === 0 ? (
          <p className="text-gray-500 text-center py-4">You have not placed any orders yet.</p>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div key={order._id} className="border rounded-md p-4 bg-gray-50">
                <div className="flex justify-between items-center mb-4 pb-2 border-b">
                  <div>
                    <span className="text-sm text-gray-500">Order ID: {order._id}</span>
                    <p className="text-sm font-medium text-gray-700">Date: {new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${order.status === "Placed" ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"}`}>
                      {order.status}
                    </span>
                    <p className="font-bold text-green-700 mt-1">Total: ₹{order.totalAmount}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {order.items.map((item, idx) => (
                    <div key={idx} className="flex justify-between text-sm text-gray-700">
                      <span>{item.quantity} x {item.name || (item.product ? item.product.name : "Unknown Plant")}</span>
                      <span>₹{item.price * item.quantity}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Orders;
