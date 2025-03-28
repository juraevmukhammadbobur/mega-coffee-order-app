import { useEffect } from "react";

function PaymentPopap({ cart, toggleModal, deleteOnCart }) {
  useEffect(() => {
    if (cart.length == 0) {
      toggleModal();
    }
  }, [cart, toggleModal]);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <div className="bg-gray-400/20 fixed w-full top-0 left-0 bottom-0 flex justify-center items-center z-999 backdrop-blur-sm">
        <div className="block w-[60%] h-[60%] rounded-2xl bg-white p-6">
          <div className="h-72 overflow-y-auto mb-4 ">
            {cart.map((item, i) => {
              return (
                <div
                  key={i}
                  className="grid grid-cols-4 text-center mb-6 gap-4"
                >
                  <div className="flex">
                    <p className="mr-6">{i + 1}</p>
                    <p className="">{item.title}</p>
                  </div>
                  <p className="">{item.quantity}</p>
                  <p className="text-right">{item.price * item.quantity}</p>
                  <button
                    className="cursor-pointer mx-8 tex"
                    onClick={() => deleteOnCart(item.id)}
                  >
                    ✕
                  </button>
                </div>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-3 gap-4 pb-3 h-20">
            <div className="">
              총합:
              <p className="text-4xl font-bold">
                {total} <span className="text-2xl font-light">₩</span>{" "}
              </p>
            </div>
            <button className="cursor-pointer bg-amber-300 rounded-xl">
              결제하기
            </button>
            <button
              className="cursor-pointer bg-black text-white rounded-xl"
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
