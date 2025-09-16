import { Link } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  return (
    <div className="flex justify-center items-center w-full bg-white shadow-sm py-4 sticky z-100 top-0">
      <div className="flex justify-between items-center w-full max-w-screen-xl p-4 max-lg:px-9">
        <div className="w-40">
          <Link to={"/"}>
            <img src={logo} alt="Mega Coffee" />
          </Link>
        </div>

        <div className="lg:text-lg font-bold">
          <p>고객센터 1588-8298</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
