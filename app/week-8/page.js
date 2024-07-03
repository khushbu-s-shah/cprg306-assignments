"use client";

import { useState } from 'react';
import ItemList from '../week-8/item-list';
import NewItem from './new-item';
import MealIdeas from './meal-ideas';
import itemsData from '../week-8/items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(',')[0]
      .trim()
      .replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="bg-gray-50 min-h-screen p-4">
      <header className='text-center my-6'>
        <h1 className="text-4xl text-gray-800 font-bold">Shopping List</h1>
      </header>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <NewItem onAddItem={handleAddItem} />
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 md:ml-4">
          {selectedItemName && <MealIdeas ingredient={selectedItemName} />}
        </div>
      </div>
    </main>
  );
}
