import React from "react";
import { Header } from "../parts/common/Header";
import HeroImage from "../parts/Home/HeroImage";
type Props = {
  children: React.ReactNode;
};

export const HeaderLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-5/6">
        <HeroImage />
        {children}
      </main>
    </div>
  );
};
