import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import "../MiddleSection/Filters/filterStyling.css";
import { Icons } from "@/components/icons/Icons";
function SearchBar() {
  return (
    <div className="relative search-shadow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
      <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
        <span className="text-xl font-black">+</span>
      </Button>
      <Input type="text" placeholder="Search" className="pl-12 pr-4" />
    </div>
  );
}

export default function LeftSidebar() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h1 className="text-center text-muted text-4xl font-bold break-words">
          My Fridge
        </h1>
        <div className="mt-6">
          <SearchBar />
        </div>
        <div className="w-full p-6">
          <ul>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Item-1</span>
                <Button className="card-buttons-3 bg-accent h-min w-min">
                  <Icons.cancel strokeWidth={4} size={20} />
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Item-1</span>
                <Button className="card-buttons-3 bg-accent h-min w-min">
                  <Icons.cancel strokeWidth={4} size={20} />
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Item-1</span>
                <Button className="card-buttons-3 bg-accent h-min w-min">
                  <Icons.cancel strokeWidth={4} size={20} />
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Item-1</span>
                <Button className="card-buttons-3 bg-accent h-min w-min">
                  <Icons.cancel strokeWidth={4} size={20} />
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Item-1</span>
                <Button className="card-buttons-3 bg-accent h-min w-min">
                  <Icons.cancel strokeWidth={4} size={20} />
                </Button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
