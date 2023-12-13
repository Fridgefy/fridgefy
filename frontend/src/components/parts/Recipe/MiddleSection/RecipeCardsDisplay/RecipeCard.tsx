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
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';
import { createMyRecipe } from '@/api/myRecipe/data';

type Props = {
  recipe: Recipe;
};

export async function RecipeCard({ recipe }: Props) {
  const session = await getServerSession(authOptions);

  const addToMyRecipeAction =
    session && session.user && session.user.email
      ? createMyRecipe.bind(null, {
          userEmail: session.user.email,
          recipeId: recipe.id,
        })
      : undefined;
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
        <form action={addToMyRecipeAction}>
          <Button className="card-buttons bg-accent" type="submit">
            Add
          </Button>
        </form>
      </CardContent>
      <CardDescription></CardDescription>
    </Card>
  );
}
