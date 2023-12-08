import { Icons } from '@/components/icons/Icons';
import './filterStyling.css';

export function IngredientsFilter() {
  return (
    <div>
      <h1 className="intolerance-title">Ingredients</h1>
      <div className="mt-4">
        <div className="w-full">
          <label className="relative ">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <Icons.search className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-500 left-3" />
            </span>
            <input
              className="placeholder-italic placeholder-text-slate-400  bg-gray-100  w-full border border-slate-300 rounded-md py-2 pl-9 pr-3  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              placeholder="Search Ingredients..."
              type="text"
              name="search"
            />
          </label>
        </div>
      </div>
      <div>
        <ul className="grid grid-cols-3 justify-items-center mt-4">
          <li>Chicken</li>
          <li>Butter</li>
          <li>Apple</li>
        </ul>
      </div>
    </div>
  );
}
