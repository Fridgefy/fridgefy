"use client";

import { ReactNode, useState } from "react";
import { Icons } from "@/components/icons/Icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function ShoppingCart() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full h-full flex">

      <div className="w-1/4 flex flex-col items-center border-r bg-backgroundSecondary p-4">

          <p className="text-center text-muted font-bold text-2xl mb-8">My Fridge</p>
          {/* <div className="mb-8">
            <input type="text" className="w-full border rounded-md p-1" />
          </div> */}
          <div className="relative mb-8 w-full">
            <input
              type="text"
              className="block w-full h-10 rounded-md bg-gray-100 pl-7 pr-12 border"
              placeholder="Search..."
              required
            />
            <div className="absolute inset-y-0 right-1 flex my-2">
              <div className="w-12 h-2">
                <button className="flex items-center justify-center w-full bg-accent border rounded-md p-1">
                  <Icons.plus className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center">

            <div className="w-full flex items-center justify-between p-2 border-b">
              <p className="text-2xl font-semibold text-muted">Item</p>

              <div className="w-12 h-6">
                <button className="flex items-center justify-center w-full h-full bg-accent border rounded-md p-1">
                  <Icons.cancel className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-between p-2 border-b">
              <p className="text-2xl font-semibold text-muted">Item</p>

              <div className="w-12 h-6">
                <button className="flex items-center justify-center w-full h-full bg-accent border rounded-md p-1">
                  <Icons.cancel className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-between p-2 border-b">
              <p className="text-2xl font-semibold text-muted">Item</p>

              <div className="w-12 h-6">
                <button className="flex items-center justify-center w-full h-full bg-accent border rounded-md p-1">
                  <Icons.cancel className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-between p-2 border-b">
              <p className="text-2xl font-semibold text-muted">Item</p>

              <div className="w-12 h-6">
                <button className="flex items-center justify-center w-full h-full bg-accent border rounded-md p-1">
                  <Icons.cancel className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-between p-2 border-b">
              <p className="text-2xl font-semibold text-muted">Item</p>

              <div className="w-12 h-6">
                <button className="flex items-center justify-center w-full h-full bg-accent border rounded-md p-1">
                  <Icons.cancel className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="w-full flex items-center justify-between p-2 border-b">
              <p className="text-2xl font-semibold text-muted">Item</p>

              <div className="w-12 h-6">
                <button className="flex items-center justify-center w-full h-full bg-accent border rounded-md p-1">
                  <Icons.cancel className="w-4 h-4" />
                </button>
              </div>
            </div>


          </div>


      </div>

      <div className="w-1/2 px-8 py-12">

      <Accordion type="single" collapsible className="bg-input rounded-lg border" onClick={toggleOpen}>
        <AccordionItem value="item-1" className="border-none">
          <AccordionTrigger className={`${isOpen ? "border-b" : ""}`}>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>


      </div>

      <div className="w-1/4 border-l bg-backgroundSecondary"></div>

    </div>
  );
}
