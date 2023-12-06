import React from "react";
import { Header } from "../parts/common/Header";
type Props = {
  children: React.ReactNode;
};

export const HeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-4/5">{children}</main>
    </div>
  );
};
