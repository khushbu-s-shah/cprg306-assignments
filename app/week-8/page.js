"use client";

import { useState } from 'react';
import ItemList from '../week-8/item-list';
import NewItem from './new-item';
import itemsData from '../week-8/items.json';
import MealIdeas from '../week-8/meal-ideas';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    if (typeof item === 'string') {
      // Clean up the item name
      const cleanedItemName = item
        .split(',')[0]
        .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\uD83C-\uDBFF\uDC00-\uDFFF]|[\u2600-\u26FF])/g, '')
        .trim();
      setSelectedItemName(cleanedItemName);
    }
  };

  return (
    <main className="bg-gray-50 min-h-screen p-4">
      <header className='text-center my-6'>
        <h1 className="text-4xl text-gray-800 font-bold">Shopping List</h1>
      </header>
      <div className="flex flex-col md:flex-row">
        <div className="flex-1">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="flex-1">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
