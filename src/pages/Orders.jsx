import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import DoneOrderBtn from "../components/DoneOrderBtn";
import NotificationAudio from "../images/order.mp3";
import Navbar from "../components/Navbar";

const Orders = () => {
  const host = import.meta.env.VITE_HOST;
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    axios
      .get(`${host}/orders`)
      .then((res) => {
        setOrders(res.data);
        playNotificationSound();
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [host]);
  console.log(orders);

  const playNotificationSound = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .catch((err) => console.log("Ошибка воспроизведения звука:", err));
    }
  };

  return (
    <div>
      {/* <audio ref={audioRef} src={NotificationAudio} preload="auto"></audio> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <Navbar />
          <h1 className="text-center text-2xl font-bold my-3">Orders</h1>
          <div className="grid grid-cols-3">
            {orders.map((order) => (
              <div
                key={order.id}
                className="border-dashed border-2 border-amber-300 rounded-2xl h-96 m-2"
              >
                <div className="block text-center items-end gap-4">
                  <p>주문 번호:</p>
                  <p className="text-3xl font-bold">{order.id}</p>
                </div>
                {order.items.map((item) => (
                  <div key={item.id} className="grid grid-cols-2">
                    <div className="ed">
                      <h1>{item.title}</h1>
                      <p>Цена: {item.price}</p>
                      <p>Количество: {item.quantity}</p>
                    </div>
                    <div className="flex justify-end">
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </div>
                  </div>
                ))}
                <DoneOrderBtn orderId={order.id} orders={orders} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
