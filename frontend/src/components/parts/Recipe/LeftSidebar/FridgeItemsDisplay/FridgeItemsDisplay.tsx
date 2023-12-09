import React, { useEffect } from 'react';
import { FridgeItem } from './FridgeItem/FridgeItem';
import { fetchFridgeData } from '@/api/fridge/data';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';

export const FridgeItemsDisplay = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  // const ingredients = session  await fetchFridgeData(session.user.email);

  // const { data: session } = useSession();

  // const ingredients = useEffect(() => {
  //   const fetchData = async (email: string) => {
  //     const response = await fetchFridgeData(email);
  //     return response;
  //   };
  //   if (session && session.user && session.user.email) {
  //     fetchData(session.user.email);
  //   }
  // }, [session]);

  return (
    <ul>
      {/* {ingredients.map((ingredient, index) => (
        <FridgeItem ingredient={ingredient} key={index} />
      ))} */}
    </ul>
  );
};
