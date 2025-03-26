function PaymentPopap({ cart }) {
  console.log(cart);
  return (
    <div>
      <div className="bg-gray-400/20 fixed w-full top-0 left-0 bottom-0 flex justify-center items-center z-999 backdrop-blur-sm">
        <div className="block w-96 h-96 bg-white p-4">
          {cart.map((item, i) => {
            return (
              <div key={i} className="w-full mb-30 flex justify-between">
                <div className="flex gap-3">
                  <p className="">{i + 1}</p>
                  <p className="">{item.title}</p>
                </div>
                <p className="">{item.quantity}</p>
                <p className="">{item.price * item.quantity}</p>
              </div>
            );
          })}
          <button>Back</button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPopap;
