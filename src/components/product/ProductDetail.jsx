import React from "react";
import img from "../../assets/img/logo192.png";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { productState } from "../../store/product/ProductState";
import { addToCart, cartState } from "../../store/cart/CartState";

const ProductDetail = () => {
  let param = useParams();
  const product = useRecoilValue(productState).find(
    (item) => item.id === parseInt(param.id)
  );

  const [cart, setCart] = useRecoilState(cartState); //use STATE

  const handleCart = () => {
    let currentCart = cart;
    let amount = parseInt(document.getElementById("amount").value);
    let newCart = addToCart(product, currentCart, amount);
    setCart(newCart);
  };
  const [amount, setAmount] = useState(1);

  const validAmount = (e) => {
    let regex = /\b\d+\b/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      setAmount(parseInt(e.target.value));
    }
  };

  const addAmount = () => {
    let temp = amount;
    setAmount(temp + 1);
  };
  const minusAmount = () => {
    let temp = amount;
    if (temp > 1) {
      setAmount(temp - 1);
    }
  };
  return (
    <div className="max-w-7xl mx-auto flex py-7">
      <div className="w-1/2">
        <img className="w-56 mx-auto" src={img} alt="" />
      </div>
      <div className="w-1/2">
        <p className="text-4xl my-7">{product.name}</p>
        <p className="flex-wrap">{product.country}</p>
        <p className="flex-wrap">{product.price}</p>
        <div className="flex-wrap py-5">
          <p className="pb-2">Amount</p>
          <div className="flex">
            <button
              className="border border-r-0 w-7 rounded-sm border-black focus:outline-none hover:bg-gray-300"
              onClick={minusAmount}
            >
              <i className="fa fa-minus"></i>
            </button>
            <input
              type="text"
              name="amount"
              id="amount"
              value={Number(amount)}
              onChange={validAmount}
              className="border w-8 text-center rounded-sm border-black focus:outline-none"
            />
            <button
              className="border border-l-0 w-7 rounded-sm border-black focus:outline-none hover:bg-gray-300"
              onClick={addAmount}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
        </div>
        <button
          className="flex-wrap bg-red-500 text-white focus:outline-none w-40 h-10 hover:bg-red-400"
          onClick={handleCart}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
