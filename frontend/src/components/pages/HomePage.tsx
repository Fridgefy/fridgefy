import { NavigationBanner } from "../parts/Home";
import HeroImage from "../parts/Home/HeroImage";

export const HomePage = () => {
  return (
    <div className="flex justify-center items-center  w-full">
      <div className="z-40">
        <NavigationBanner />
      </div>
      <div className="z-0">
        <HeroImage />
      </div>
    </div>
  );
};
