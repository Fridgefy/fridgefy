import React from 'react';
import { Button } from '@/components/ui/button';
import '../MiddleSection/Filters/filterStyling.css';

export default function RightSidebar() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h1 className="text-center text-muted text-4xl font-bold break-words sidebar-title">
          My Recipes
        </h1>
        <div className="w-full p-6"></div>
      </div>
    </div>
  );
}
