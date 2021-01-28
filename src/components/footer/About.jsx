import React from "react";

const About = () => {
  const listFooter = [
    {
      title: "Help",
      child: ["Order Status", "Policy", "Shipping Information"],
    },
    {
      title: "resources",
      child: [
        "Outdoor Tips",
        "Business Sales",
        "Used Gun ",
        "Military Sales",
        "Intrucstion",
      ],
    },
    { title: "About us", child: ["Find a Store", "Careers", "Our Comunity"] },
  ];
  return (
    <div className="py-5 border-t-2">
      <div className="flex max-w-7xl my-5 mx-auto ">
        {listFooter.map((item, index) => (
          <div key={index} className="w-64">
            <h3 className="font-medium text-xl uppercase mb-4">{item.title}</h3>
            {item.child.map((childItem, index) => (
              <div key={index}>
                <a href="">{childItem}</a>
              </div>
            ))}
          </div>
        ))}
        <div className="w-5/12">
          <h3 className="font-medium text-xl uppercase mb-4">
            Sign up for exclusive deals & offers
          </h3>
          <div className="flex justify-between">
            <input
              type="email"
              id="mail"
              placeholder="Enter Your Email Address"
              size="25"
              className="border border-gray-800 outline-none py-1 px-2 w-4/5"
            />
            <button
              type="submit"
              className="uppercase border border-gray-900 p-2 hover:bg-gray-200 focus:outline-none"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
