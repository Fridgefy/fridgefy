//RecipePage.tsx
import { SearchParamsType } from "../../../types/commonType";
import { RecipeLayout } from "../layouts/RecipeLayout";
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
      <main className="flex-grow">
        <MiddleSection searchParams={searchParams} />
      </main>
      <div className="w-1/4 p-4 bg-popover border-l">
        <RightSidebar />
      </div>
    </div>
  );
};
