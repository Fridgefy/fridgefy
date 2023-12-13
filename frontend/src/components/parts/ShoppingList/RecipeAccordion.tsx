import { useState } from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Icons } from "@/components/icons/Icons";

type Ingredient = {
  id: number;
  name: string;
  localizedName: string;
  image: string;
};

type InstructionStep = {
  number: number;
  step: string;
  ingredients: Ingredient[];
};

type Props = {
  title: string;
  summary: string;
  imageUrl?: string;
  diets: string | string[];
  intolerance?: string | string[];
  steps?: InstructionStep[];
  handleDelete?: () => void;
};

// Helper function to render lists
const renderList = (items: string | string[]) => {
  if (Array.isArray(items)) {
    return items.map((item, index) => <li key={index}>{item}</li>);
  } else {
    return <li>{items}</li>;
  }
};
// FLATMAP used because the ingredients are second level. flatmap is a function over a collection and flatten the result by one-level -SKY
const getUniqueIngredients = (steps: InstructionStep[] = []) => {
  const allIngredients = steps.flatMap((step) => step.ingredients || []);
  const uniqueIngredientNames = new Set(allIngredients.map((ing) => ing.name));

  const uniqueIngredients = Array.from(uniqueIngredientNames)
    .map((name) => allIngredients.find((ing) => ing.name === name))
    .filter((ingredient): ingredient is Ingredient => ingredient !== undefined);

  return uniqueIngredients;
};

const RecipeAccordion = ({
  title,
  summary,
  imageUrl,
  diets,
  intolerance,
  steps,
  handleDelete,
}: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleOpen = () => {
    setIsOpen((current) => !current);
  };
  const uniqueIngredients = getUniqueIngredients(steps);

  return (
    <Accordion
      type="single"
      collapsible
      className="w-full bg-input rounded-lg border p-4"
      onClick={toggleOpen}
    >
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className={`${isOpen ? "border-b" : ""} text-muted`}>
          <div className="w-full flex justify-between items-center">
            <p className="text-lg font-bold">{title}</p>
            <div onClick={handleDelete}>
              <Icons.trash className="w-4 h-4 mr-4 text-black hover:stroke-primary" />
            </div>
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-2">
          <div className="w-full flex justify-between gap-4">
            <div className="w-2/3">
              <div
                className="break-words"
                dangerouslySetInnerHTML={{ __html: summary }}
              />
              <div>
                <h1 className="font-bold mt-4 text-primary text-xl">
                  Instructions
                </h1>
                {steps?.map((step, index) => (
                  <div key={index} className="mt-4">
                    <h2 className="font-bold mt-4  text-md">
                      Step {step.number}
                    </h2>
                    <p>{step.step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-1/3 flex flex-col border-l pl-3">
              <div className="h-32 border-b pb-3 mb-4">
                <Image
                  src={imageUrl || ""}
                  width={200}
                  height={250}
                  style={{ objectFit: "cover" }}
                  alt={`${title} image`}
                  className="rounded-md"
                />
              </div>
              <div>
                <p className="text-sm font-semibold mb-2">Diets:</p>
                <ul className="list-disc list-inside">{renderList(diets)}</ul>
                <p className="text-sm font-semibold mt-4 mb-2">Intolerances:</p>
                <ul className="list-disc list-inside">
                  {intolerance && renderList(intolerance)}
                </ul>
                <p className="text-sm font-semibold mb-2">Ingredients</p>
                {uniqueIngredients.length > 0 ? (
                  <ul className="list-disc list-inside">
                    {uniqueIngredients?.map((ingredient, i) => (
                      <li key={i}>{ingredient.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No ingredients listed for this step.</p>
                )}
              </div>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default RecipeAccordion;
