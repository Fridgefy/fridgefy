import { SearchParamsType } from "../../../types/commonType";
import LeftSidebar from "../parts/Recipe/LeftSidebar/LeftSidebar";
import { MiddleSection } from "../parts/Recipe/MiddleSection/MiddleSection";
import RightSidebar from "../parts/Recipe/RightSidebar/RightSidebar";

type Props = {
  searchParams: SearchParamsType;
};
export const RecipePage = ({ searchParams }: Props) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/4 p-4 bg-popover border-r">
        <LeftSidebar />
      </div>
      <div className="w-full">
        <MiddleSection />
      </div>
      <div className="w-1/4 p-4 bg-popover border-l">
        <RightSidebar />
      </div>
    </div>
  );
};
