'use server';
import { Button } from '@/components/ui';
import React from 'react';

import './FridgeItem.css';
import { Icons } from '@/components/icons/Icons';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/auth';
import { removeIngredientFromFridge } from '@/api/fridge/data';

type Props = {
  ingredient: string;
};

export const FridgeItem = async ({ ingredient }: Props) => {
  const session = await getServerSession(authOptions);

  const deleteItemAction =
    session && session.user && session.user.email
      ? removeIngredientFromFridge.bind(null, session.user.email, ingredient)
      : undefined;

  return (
    <div className="border-b relative w-full mt-4 search-shadow">
      <li className="flex items-center justify-between py-2">
        <span className="pl-4">{ingredient}</span>
        <form action={deleteItemAction}>
          <Button
            type="submit"
            className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3"
          >
            <span>
              <Icons.cancel className="h-5 w-5 text-accent-foreground" />
            </span>
          </Button>
        </form>
      </li>
    </div>
  );
};
