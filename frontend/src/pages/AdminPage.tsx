import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';
import type { Order } from '../types';

function AdminPage() {
  const [orders, setOrders] = useState<Order[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const API_URL = import.meta.env.VITE_HOST;

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(`${API_URL}/orders`)
        setOrders(response.data)
      } catch (error) {
        setError("Failed to fetch orders...")
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    fetchOrders()

    const intervalId = setInterval(fetchOrders, 15000);
    return () => clearInterval(intervalId);
  }, [])
  console.log(orders);

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-8">Orders:</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Order # {order.shortId}</h2>
              <span
                className={`px-3 py-1 text-sm font-semibold rounded-full ${order.status === 'new' ? 'bg-amber-100 text-amber-300' : 'bg-green-200 text-green-800'
                  }`}
              >
                {order.status}
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4">
              {new Date(order.createdAt).toLocaleString()}
            </p>
            <hr />
            <h3 className="font-semibold mt-4 mb-2">Order items:</h3>
            <ul>
              {order.items.map((item) => (
                <li key={item.id} className="flex justify-between text-gray-700">
                  <span>{item.title}</span>
                  <span>x {item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AdminPage