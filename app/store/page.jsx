"use client";
import React, { useState } from "react";

const Page = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Zero Hunger", price: 10, img: "/imgs/zero_hunger.png" },
    { id: 2, name: "Quality Education", price: 20, img: "/imgs/quality_education.png" },
    // Add more items here
  ]);

  return (
    <div className="text-white w-full h-full flex items-center justify-center">
      <div className="w-3/4 h-3/4 bg-gray-800 px-4 py-4 bg-opacity-90 rounded-md border border-gray-300 border-opacity-20 gap-2 flex flex-col">
        <h1 className="text-xl font-semibold">Store</h1>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="h-24 bg-gray-300 bg-opacity-10 rounded-md flex"
            >
              <div className="aspect-content h-full">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-md w-full h-full"
                />
              </div>
              <div className="px-2 py-4 flex flex-col gap-2">
                <div className="flex gap-2">
                  <span className="px-2 rounded-sm font-semibold">
                    {item.name}
                  </span>
                  <div className="px-2 rounded-sm bg-gray-300 bg-opacity-20 text-sm flex justify-center items-center">
                    🍀 {item.price}
                  </div>
                </div>
                <p className="text-sm opacity-50">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Libero pariatur tempore magni repellat sed ullam quaerat.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
