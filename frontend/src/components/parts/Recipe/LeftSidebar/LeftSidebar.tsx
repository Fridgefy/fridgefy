import { Button } from "@/components/ui/button";
import "../MiddleSection/Filters/filterStyling.css";
import YourPage from "../../../pages/trialPage";

function SearchBar() {
  return (
    <div className="w-full">
      <label className="relative">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
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
        </span>
        <button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
          <span className=" font-black">+</span>
        </button>
        <input
          className="placeholder-italic placeholder-text-slate-400 bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 search-shadow focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Add to Fridge..."
          type="text"
          name="search"
        />
      </label>
    </div>
  );
}

export default function LeftSidebar() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h1 className="text-center text-muted text-4xl font-bold break-words sidebar-title">
          My Fridge
        </h1>
        <div className="mt-6">
          <YourPage />
        </div>
        <div className="w-full p-6">
          <ul>
            <div className="border-b relative w-full mt-4 search-shadow">
              <li className="flex items-center justify-between py-2">
                <span className="pl-4">Item-1</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4  search-shadow">
              <li className="flex items-center justify-between py-2">
                <span className="pl-4">Item-1</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4 search-shadow">
              <li className="flex items-center justify-between py-2">
                <span className="pl-4">Item-1</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4 search-shadow">
              <li className="flex items-center justify-between py-2">
                <span className="pl-4">Item-1</span>
                <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
                  <span className="text-xl font-black rotate-45">+</span>
                </Button>
              </li>
            </div>
            <div className="border-b relative w-full mt-4 search-shadow">
              <li className="flex items-center justify-between py-2">
                <span className="pl-4">Item-1</span>
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
