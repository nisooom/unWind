"use client";
import React, { useState } from "react";
import { useCoins } from "../hooks/coins";
import { Button } from "@/components/ui/button";
import Image from "next/image";
const Page = () => {
  const { getCoins, addCoins, removeCoins } = useCoins();

  const [items, setItems] = useState([
    {
      id: 1,
      name: "Feed a child",
      price: 1000,
      img: "/imgs/feed.jpg",
      desc: "Your contribution can provide a child with nutritious meals for a month.",
    },
    {
      id: 2,
      name: "Quality Education",
      price: 2000,
      img: "/imgs/edu.jpg",
      desc: "Support a child's education for a month with your contribution.",
    },
    {
      id: 3,
      name: "Plant a Tree",
      price: 1500,
      img: "/imgs/tree.jpg",
      desc: "Contribute to the environment by planting a tree.",
    },
    // Add more items here
  ]);
  return (
    <div className="text-white w-full h-full flex items-center justify-center">
      <div className="w-3/4 h-3/4 bg-util bg-opacity-5 px-8 py-8 rounded-md border border-gray-700 flex flex-col">
        <h1 className="text-3xl font-semibold mb-4">Store</h1>
        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <Button
              className="w-full h-32 bg-util gap-4 bg-opacity-10 rounded-md hover:bg-opacity-15 flex justify-start py-3 px-3 hover:bg-util"
              onClick={() => {
                if (getCoins() >= item.price) {
                  removeCoins(item.price);
                } else {
                  alert("Not enough coins");
                }
              }}
            >
              <div className="aspect-square h-full rounded-md">
                {/* cover fit image */}
                <Image
                  src={item.img}
                  alt={item.name}
                  width={100}
                  height={100}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>
              <div className="w-full h-full flex flex-col overflow-x-hidden">
                <div className="h-1/3 w-full flex">
                  <span className="text-white text-lg font-semibold px-4">
                    {item.name}
                  </span>
                </div>
                <div className="h-1/3 w-full flex">
                  <span className="text-white text-md font-regular px-4">
                    {item.desc}
                  </span>
                </div>
                <div className="h-1/3  w-full flex items-center justify-end">
                  <span className="text-white text-md font-regular px-2 py-1 bg-green-400 bg-opacity-10 border-util border-[1px] border-opacity-25 rounded-md">
                    🍀 {item.price}
                  </span>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
