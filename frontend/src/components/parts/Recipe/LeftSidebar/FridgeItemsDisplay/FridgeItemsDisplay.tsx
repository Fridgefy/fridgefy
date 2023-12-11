import React from 'react';
import { FridgeItem } from './FridgeItem/FridgeItem';
import { fetchFridgeData } from '@/api/fridge/data';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';

export const FridgeItemsDisplay = async () => {
  const session = await getServerSession(authOptions);

  const data =
    session &&
    session.user &&
    session.user.email &&
    (await fetchFridgeData(session.user.email));

  const ingredients = data && data.ingredients;

  return (
    <ul>
      {ingredients &&
        ingredients.map((ingredient, index) => (
          <FridgeItem ingredient={ingredient} key={index} />
        ))}
    </ul>
  );
};
