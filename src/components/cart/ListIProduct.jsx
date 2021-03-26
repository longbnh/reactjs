import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../store/cart/CartState";
import img from "../../assets/img/logo192.png";

const ListIProduct = () => {
  const listItemInCart = useRecoilValue(cartState);
  let total = 0;
  listItemInCart.map((item) => {
    total += item.price * item.amount;
  });

  return (
    <div className="w-3/5 mx-auto">
      <div className="pr-4 px-8 flex justify-between">
        <div className="w-1/12"></div>

        <div className="ml-2 flex items-center justify-center font-bold">
          Name
        </div>

        <div className="ml-12 flex items-center justify-center font-bold">
          Price
        </div>

        <div className="ml-2 flex items-center justify-center font-bold">
          Amount
        </div>
      </div>
      {listItemInCart.map((item, key) => {
        return (
          <div key={key} className="px-8 pb-3 ">
            <div className="border-2 pr-4 flex justify-between">
              <div className="w-1/12">
                <img className="mx-auto" src={img} alt="" />
              </div>

              <div className="ml-2 flex items-center justify-center">
                {item.name}
              </div>

              <div className="ml-2 flex items-center justify-center">
                {item.price}
              </div>
              <div className="ml-2 flex items-center justify-center">
                {item.amount}
              </div>
            </div>
          </div>
        );
      })}
      <div className="pr-4 px-8 flex justify-between">
        <div className="w-1/12"></div>

        <div className="ml-2 flex items-center justify-center font-bold"></div>

        <div className="ml-40 flex items-center justify-center font-bold">
          Total
        </div>

        <div className="ml-2 flex items-center justify-center font-bold">
          {total}
        </div>
      </div>
    </div>
  );
};

export default ListIProduct;
