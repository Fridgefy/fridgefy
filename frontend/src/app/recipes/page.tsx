import { RecipePage } from '@/components/pages/RecipePage';

import { RecipePageProps } from '../../../types/commonType';

export default function Recipe(props: RecipePageProps) {
  const { searchParams } = props;
  return (
    <div>
      <RecipePage searchParams={searchParams!} />
    </div>
  );
}
