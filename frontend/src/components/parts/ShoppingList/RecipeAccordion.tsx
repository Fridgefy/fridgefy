import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Icons } from "@/components/icons/Icons";

type Props = {
  title: string
  description: string
  imageUrl?: string
  handleDelete?: () => void
};

const RecipeAccordion = ({ title, description, imageUrl, handleDelete }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setIsOpen(current => !current)
  };

  return (
    <Accordion type="single" collapsible className="w-full bg-input rounded-lg border p-4" onClick={toggleOpen}>
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className={`${isOpen ? "border-b" : ""} text-muted`}>
          <div className="w-full flex justify-between items-center">
            <p className="text-lg font-bold">{title}</p>
            <div onClick={handleDelete}>{/* couldn't use button because of a weird hydration error  */}
              <Icons.trash className="w-4 h-4 mr-4 text-black" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <div className="w-full flex justify-between gap-4">
            <div className="w-2/3">
              <p className="break-words">
                {description}
              </p>
            </div>
            <div className="relative w-1/3 h-32 rounded-md">
              <Image
                src={imageUrl || ''}
                fill
                style={{objectFit: "cover"}}
                alt={`${title} image`}
                className="rounded-md"
              />
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RecipeAccordion;
