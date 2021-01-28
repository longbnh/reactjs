import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/img/logo192.png";

//Render
const ListProduct = ({ listProduct }) => {
  return (
    <>
      <div className="w-5/6 flex flex-wrap">
        {/* card */}
        {listProduct.map((product, index) => {
          return (
            <div key={index} className="w-1/4 px-2 py-2 ">
              <Link to={"/product/" + product.id}>
                <div className=" cursor-pointer p-3 hover:bg-gray-200">
                  <img src={img} alt="" className="w-28 h-28 mx-auto" />
                  <h4 className="text-center" id="content">
                    {product.name} <br />
                    {product.country}
                  </h4>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListProduct;
