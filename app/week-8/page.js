"use client";

import { useState } from 'react';
import ItemList from '../week-8/item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from '../week-8/items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState(null);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    setSelectedItemName(item.name.trim());
  };

  return (
    <main className="bg-gray-50 min-h-screen p-4">
      <header className='text-center my-6'>
        <h1 className="text-4xl text-gray-800 font-bold">Shopping List</h1>
      </header>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-1/2 p-4">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="lg:w-1/2 p-4">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
