import React from "react";

const Follow = () => {
  const icon = ["facebook", "twitter", "youtube", "pinterest-p", "instagram"];
  return (
    <div className="border-t-2">
      <div className="flex max-w-7xl my-5 mx-auto leading-9 text-2xl">
        <h3 className="uppercase font-semibold ">Follow us</h3>
        {icon.map((item, index) => {
          return (
            <a key={index} href="#" className="ml-7">
              <i className={"fab fa-" + item}></i>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Follow;
