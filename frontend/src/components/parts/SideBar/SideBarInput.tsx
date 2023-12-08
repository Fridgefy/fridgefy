import { Icons } from "@/components/icons/Icons";
import ActionButton from "../common/ActionButton";

const SideBarInput = () => {

  // TODO: Search ingredients and add them fridge

  return (
    <div className="w-full">
      <label className="relative ">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <Icons.search className="text-input" />
        </span>
        <ActionButton
          className="absolute top-0 bottom-0 right-3 w-6 h-6"
        >
          <Icons.plus className="w-4 h-4 font-bald text-black" strokeWidth={4} />
        </ActionButton>
        <input
          className="placeholder-italic placeholder-text-slate-400  bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 search-shadow  focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
          placeholder="Add to Fridge..."
          type="text"
          name="search"
        />
      </label>
    </div>
  );
};

export default SideBarInput;
