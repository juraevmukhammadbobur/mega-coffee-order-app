import axios from "axios";

const DoneOrderBtn = ({ orderId }) => {
  const host = import.meta.env.VITE_HOST;

  const handleDoneOrder = () => {
    console.log(orderId);
    axios
      .delete(`${host}/orders/${orderId}`)
      .then((res) => {
        console.log("Order deleted:", res.data);
      })
      .catch((error) => {
        console.error("Error deleting order:", error);
      });
  };

  return (
    <div>
      <button onClick={handleDoneOrder}>delete</button>
    </div>
  );
};

export default DoneOrderBtn;
