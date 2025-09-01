import axios from 'axios';

interface DoneOrderBtnProps {
  orderId: string;
}

const DoneOrderBtn = ({ orderId }: DoneOrderBtnProps) => {
  const host = import.meta.env.VITE_HOST;

  const handleDoneOrder = () => {
    axios.delete(`${host}/orders/${orderId}`).catch((error) => {
      console.error('Error deleting order:', error);
    });
  };

  return (
    <div className="m-4  ">
      <button
        className="p-4 bg-amber-300 rounded-md px-8 cursor-pointer"
        onClick={handleDoneOrder}
      >
        delete
      </button>
    </div>
  );
};

export default DoneOrderBtn;
