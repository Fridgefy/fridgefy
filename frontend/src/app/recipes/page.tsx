import { RecipePage } from '@/components/pages/RecipePage';

import { Button } from '@/components/ui';
import { RecipePageProps } from '../../../types/commonType';

export default function Recipe({ searchParams }: RecipePageProps) {
  return (
    <div>
      <RecipePage searchParams={searchParams!} />
    </div>
  );
}
