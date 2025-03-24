import logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="flex justify-center items-center shadow-sm py-4 w-full sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center w-full max-w-screen-xl p-4">
        <div className="w-40">
          <img src={logo} alt="Mega Coffee" />
        </div>

        <div className="text-lg font-bold">
          <p>고객센터 1588-8298</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
