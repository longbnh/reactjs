import React from "react";
import logo from "../../assets/img/logo.jpg";
import carticon from "../../assets/img/cart.png";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { cartState } from "../../store/cart/CartState";

const Content = () => {
  const cart = useRecoilValue(cartState);
  return (
    <div className="">
      {/* Nếu có cái nào mà chỉnh tailwind không có á người anh em. Như width 300px. Bình thường thì tui chỉnh như này.
             Cơ mà lỡ có cái phức tạp hơn mà để ở style nhiều quá thì thêm class vào r chỉnh ng anh em */}
      <div className="flex max-w-7xl my-0 mx-auto">
        <Link to="/">
          <img className="w-24 h-20 mr-16 my-auto" src={logo} alt="Logo" />
        </Link>
        <div className="flex w-full justify-between">
          <div className="flex items-center relative w-3/4">
            <input
              className="border bg-transparent border-gray-900 rounded-sm outline-none pl-5 w-full h-9"
              type="text"
              placeholder="Search"
              id="q"
            />
            <button className="absolute right-0 pr-3 focus:outline-none">
              <i className="fab fa-sistrix" />
            </button>
          </div>

          <div className="flex relative cursor-pointer">
            <Link to="/cart" className="flex">
              <img className="my-auto w-10" src={carticon} alt="" />
              <span className="absolute bg-yellow-500 text-white text-base rounded-3xl -right-2 px-2 top-2">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
