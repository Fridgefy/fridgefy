import { ReactNode } from "react";
import ActionButton from "../common/ActionButton";
import { Icons } from "@/components/icons/Icons";

type Props = {
  label: string
  buttonLabel: ReactNode
  buttonOnClick?: () => void
};

const SideBarListItem = ({ label, buttonLabel, buttonOnClick }: Props) => {
  return (
    <div className="relative w-full mt-4 shadow-[0px_1px_4.2px_2px_var(--foreground)] rounded-md">
      <li className="flex items-center justify-between p-2">
        <span className="pl-2">{label}</span>
        <ActionButton className="w-6 h-6" onClick={buttonOnClick}>
          {buttonLabel}
        </ActionButton>
      </li>
    </div>
  );
};

export default SideBarListItem;
