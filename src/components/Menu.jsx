import Card from "./Card";

function Menu({ addToCart }) {
  return (
    <div className="w-full max-w-screen-xl p-4">
      <div className="flex justify-center items-center flex-col py-8">
        <p className="text-2xl font-thin mb-1">메가MGC커피의 엄선된 메뉴</p>
        <h2 className="text-6xl font-black">MEGA MENU</h2>
      </div>
      <Card addToCart={addToCart} className="mb-20" />
    </div>
  );
}

export default Menu;
