import PaymentPopap from "./PaymentPopap";

function OrederButton({ toggleModal, deleteOnCart, cart }) {
  return (
    <div className="w-1/2 grid grid-cols-3 text-2xl items-center h-full max-w-screen-xl p-4 gap-2">
      {/* {showPaymentModal && <PaymentPopap />} */}
      <button
        onClick={() => toggleModal()}
        className="bg-amber-300  h-full rounded-2xl cursor-pointer "
      >
        결제하기
      </button>
      <button className="text-gray-300 h-full cursor-pointer border-2 border-dashed py-5 px-20 rounded-2xl">
        쿠펀 등록
      </button>
      <button
        onClick={() => deleteOnCart(cart)}
        className="bg-emerald-500 h-full rounded-2xl text-white cursor-pointer"
      >
        취소
      </button>
    </div>
  );
}

export default OrederButton;
