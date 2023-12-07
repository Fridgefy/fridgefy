import { Button } from "@/components/ui/button";
import "./Filters/filterStyling.css";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
export default function RecipeCard() {
  return (
    <Card className="bg-secondary">
      <Image
        src={"/images/placeholder.png"}
        alt={`Placeholder`}
        width={50}
        height={50}
        layout="responsive"
        className="w-12 h-12 image-radius"
      />

      <CardHeader>
        <CardTitle className="text-lg">Recipe Name Here</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Button className="card-buttons bg-background">More</Button>
        <Button className="card-buttons bg-accent">Add</Button>
      </CardContent>
      <CardDescription></CardDescription>
    </Card>
  );
}
