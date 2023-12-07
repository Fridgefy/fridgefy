import LeftSidebar from "../parts/Recipe/LeftSidebar/LeftSidebar";
import RightSidebar from "../parts/Recipe/RightSidebar/RightSidebar";
import MiddleSection from "../parts/Recipe/MiddleSection/MiddleSection";
// type Props = {
//   children: React.ReactNode;
// };

// export const RecipeLayout: React.FC<Props> = ({ children }) => {
export const RecipeLayout = () => {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-1/4 p-4 bg-popover border-r">
        <LeftSidebar />
      </div>
      <main className="flex-grow">
        <MiddleSection />
      </main>
      <div className="w-1/4 p-4 bg-popover border-l">
        <RightSidebar />
      </div>
    </div>
  );
};
