import { Button } from "@/components/ui";
import { Icons } from "@/components/icons/Icons";
import { ReactNode } from "react";

type Props = {
  className?: string
  onClick?: () => void
  children?: ReactNode
};

const ActionButton = (props: Props) => {
  return (
    <Button
      className={`shadow-[1px_2px_0px_0px_#930] border bg-accent ${props.className}`}
      onClick={props.onClick}
      >
      <span>
        {props.children}
      </span>
    </Button>
  );
};

export default ActionButton;
