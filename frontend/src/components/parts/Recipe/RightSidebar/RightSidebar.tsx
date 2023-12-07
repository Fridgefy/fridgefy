import React from "react";
import { Button } from "@/components/ui/button";
import "../MiddleSection/Filters/filterStyling.css";

export default function RightSidebar() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h1 className="text-center text-muted text-4xl font-bold break-words">
          My Recipes
        </h1>
        <div className="w-full p-6">
          <ul>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Recipe</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Recipe</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Recipe</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Recipe</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4">
              <li className="flex items-center justify-between py-2">
                <span className="">Recipe</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
}
