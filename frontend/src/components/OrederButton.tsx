import PaymentPopap from './PaymentPopap.js';
import type { CartItem } from '../pages/Home';

interface OrederButtonProps {
  cart: CartItem[];
  toggleModal: () => void;
  deleteOnCart: (productId: string) => void;
}

function OrederButton({ cart, toggleModal, deleteOnCart }: OrederButtonProps) {
  return (
    <div className="w-1/2 grid grid-cols-3 text-2xl items-center max-w-screen-xl p-4 gap-2 max-xl:grid-cols-3 max-sm:grid-cols-1 overflow-scroll">
      <button
        onClick={() => toggleModal()}
        className="bg-amber-300 rounded-2xl cursor-pointer py-10"
      >
        결제하기
      </button>
      <button className="text-gray-300 cursor-pointer border-2 py-10 border-dashed rounded-2xl">
        쿠펀 등록
      </button>
      <button
        onClick={() => {
          cart.forEach((item) => {
            deleteOnCart(item.id);
          });
        }}
        className="bg-black rounded-2xl py-10 text-white cursor-pointer"
      >
        취소
      </button>
    </div>
  );
}

export default OrederButton;
