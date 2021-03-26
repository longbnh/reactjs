import React from "react";
import { useState } from "react";
// import { useRecoilValue } from "recoil";
// import { listProductSearch } from "../../store/product/ProductState";
//Render
const Sidebar = () => {
  const country = ["USA", "Russia", "China", "Iraq"];
  // const newListProduct = useRecoilValue(listProductSearch);

  const [input, setinput] = useState({
    minPrice: 0,
    maxPrice: 0,
  });

  // const handleSearch = () => {
  //   if (input.minPrice <= input.maxPrice) {
  //     let tempList = [];
  //     tempList.push(
  //       newListProduct.map((item) => {
  //         if (item.price < input.maxPrice && item.price > input.minPrice) {
  //           return item;
  //         }
  //         return null;
  //       })
  //     );
  //     console.log(tempList);
  //   }
  // };

  const validInput = (e) => {
    const regex = /\b\d+\b/;
    if (e.target.value === "" || regex.test(e.target.value)) {
      let temp = { ...input, [e.target.name]: e.target.value }; // đè lên min/maxPrice cũ
      setinput(temp);
      // setinput({ [e.target.name]: e.target.value,  });
    }
  };

  return (
    <div className="w-1/6 ">
      <div className="border-b-2 py-3 border-r-2 pr-4">
        <h3 className="uppercase pt-5 pb-2 font-medium">Price</h3>
        <p className="text-sm">Choose price</p>
        <div className="flex py-2 items-center pb-5">
          <input
            type="text"
            className="border outline-none border-black w-1/2 h-7 px-2 appearance-none rounded-md"
            name="minPrice"
            value={input.minPrice}
            onChange={validInput}
          />
          <span className="bg-gray-400 h-0.5 w-3.5 mx-1.5 ">-</span>
          <input
            type="text"
            name="maxPrice"
            value={input.maxPrice}
            onChange={validInput}
            className="border outline-none border-black w-1/2 px-2 h-7 appearance-none rounded-md"
          />
        </div>
        <button
          type="submit"
          className=" border border-yellow-400 w-1/3 rounded-lg focus:outline-none"
          onClick
        >
          OK
        </button>
      </div>
      <div className="py-3 border-r-2 pr-4">
        <h3 className="uppercase pt-2 pb-3 font-medium">Country</h3>
        <div className="">
          {country.map((item, index) => {
            return (
              <a key={index} href="#" className="block pl-1">
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
