import { Button } from '@/components/ui/button';

import './recipeCardStyling.css';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import { Recipe } from '../../../../../../types/models';

type Props = {
  recipe: Recipe;
};

export function RecipeCard({ recipe }: Props) {
  return (
    <Card className="bg-secondary card-shadow">
      <Image
        src={recipe.image}
        alt={`Icon ${recipe.id}`}
        width={50}
        height={50}
        layout="responsive"
        className="w-12 h-12 image-radius"
      />

      <CardHeader>
        <CardTitle className="text-lg">{recipe.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex justify-between">
        <Button className="card-buttons bg-background">More</Button>
        <Button className="card-buttons bg-accent">Add</Button>
      </CardContent>
      <CardDescription></CardDescription>
    </Card>
  );
}
