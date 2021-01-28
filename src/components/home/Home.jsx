import React from "react";
import Sidebar from "./Sidebar";
import ListProduct from "./ListProduct";
import { useRecoilValue } from "recoil";
import { productState } from "../../store/product/ProductState";
//Logic

const Home = () => {
  const listProduct = useRecoilValue(productState);

  return (
    <div className="border-t-2">
      <div className="flex max-w-7xl my-0 mx-auto ">
        <Sidebar />
        <ListProduct listProduct={listProduct} />
      </div>
    </div>
  );
};

export default Home;
