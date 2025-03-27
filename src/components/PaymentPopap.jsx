import { useEffect } from "react";

function PaymentPopap({ cart, toggleModal, deleteOnCart }) {
  useEffect(() => {
    if (cart.length == 0) {
      toggleModal();
    }
  }, [cart]);

  return (
    <div>
      <div className="bg-gray-400/20 fixed w-full top-0 left-0 bottom-0 flex justify-center items-center z-999 backdrop-blur-sm">
        <div className="block w-[60%] h-[50%] rounded-2xl bg-white p-6">
          <div className="h-64 overflow-y-auto ">
            {cart.map((item, i) => {
              return (
                <div
                  key={i}
                  className=" grid grid-cols-4 text-center mb-6 gap-4"
                >
                  <div className="flex">
                    <p className="mr-6">{i + 1}</p>
                    <p className="">{item.title}</p>
                  </div>
                  <p className="">{item.quantity}</p>
                  <p className="text-right">{item.price * item.quantity}</p>
                  <button
                    className="cursor-pointer text-right"
                    onClick={() => deleteOnCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
          <div className="flex justify-between">
            <button className="my-4 cursor-pointer bg-amber-300 flex items-center px-8 py-7 rounded-xl">
              결제하기
            </button>
            <button className="my-4 cursor-pointer bg-amber-300 flex items-center px-14 py-7 rounded-xl">
              쿠폰 입력
            </button>
            <button className="my-4 cursor-pointer bg-amber-300 flex items-center px-14 py-7 rounded-xl">
              전화번호 등록
            </button>
            <button
              className="my-4 cursor-pointer bg-amber-300 flex items-center px-14 py-7 rounded-xl"
              onClick={toggleModal}
            >
              취소
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentPopap;
