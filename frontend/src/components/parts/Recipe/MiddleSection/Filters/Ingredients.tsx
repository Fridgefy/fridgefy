import "./filterStyling.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Change this searchbar with form element create action for it
function SearchBar() {
  return (
    <div className="w-full">
      <label className="relative ">
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

        <input
          className="placeholder-italic placeholder-text-slate-400  bg-gray-100  w-full border border-slate-300 rounded-md py-2 pl-9 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Search Ingredients..."
          type="text"
          name="search"
        />
      </label>
    </div>
  );
}
export default function Ingredients() {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
