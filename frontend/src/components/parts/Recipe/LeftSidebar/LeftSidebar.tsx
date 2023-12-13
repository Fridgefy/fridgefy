import React, { Suspense } from 'react';
import './leftSidebarStyling.css';
import { FridgeSearchBar } from './FridgeSearhBar';

import { FridgeItemsDisplay } from './FridgeItemsDisplay/FridgeItemsDisplay';

export default function LeftSidebar() {
  return (
    <div>
      <div className="grid grid-cols-1 justify-items-center">
        <h1 className="text-center text-muted text-4xl font-bold break-words sidebar-title">
          My Fridge
        </h1>
        <div className="mt-6">
          <FridgeSearchBar />
        </div>
        <div className="w-full p-6">
          <Suspense fallback={<p>Loading...</p>}>
            <FridgeItemsDisplay />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
