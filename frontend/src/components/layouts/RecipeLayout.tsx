import { Header } from "../parts/common/Header";
type Props = {
  children: React.ReactNode;
};

export const RecipeLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex h-screen flex-col">
      <main className="h-screen">{children}</main>
    </div>
  );
};
