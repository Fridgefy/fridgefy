import { Button } from '@/components/ui';
import React from 'react';

import './FridgeItem.css';

type Props = {
  ingredient: string;
};

export const FridgeItem = ({ ingredient }: Props) => {
  return (
    <div className="border-b relative w-full mt-4 search-shadow">
      <li className="flex items-center justify-between py-2">
        <span className="pl-4">{ingredient}</span>
        <Button className="card-buttons-2 bg-accent absolute top-0 bottom-0 w-6 h-6 my-auto right-3">
          <span className="text-xl font-black rotate-45">x</span>
        </Button>
      </li>
    </div>
  );
};
