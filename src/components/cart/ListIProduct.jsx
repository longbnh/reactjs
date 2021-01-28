import React from "react";
import { useRecoilValue } from "recoil";
import { cartState } from "../../store/cart/CartState";

const ListIProduct = () => {
  const listItemInCart = useRecoilValue(cartState);
  return (
    <div className="w-3/5">
      {listItemInCart.map((item, key) => {
        return (
          <div key={key} className="px-8 pt-8 pb-3 ">
            {item}
          </div>
        );
      })}
    </div>
  );
};

export default ListIProduct;
