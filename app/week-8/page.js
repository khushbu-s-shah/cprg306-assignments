"use client";

import { useState } from 'react';
import ItemList from '../week-8/item-list';
import NewItem from './new-item';
import itemsData from '../week-8/items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState('');

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (itemName) => {
    // Clean up the item name by removing extra information like sizes and emojis
    const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|�[�-�]|�[�-�]|[\u2011-\u26FF]|�[�-�])/g, '');
    setSelectedItemName(cleanedItemName);
  };

  return (
    <main className="bg-gray-50 min-h-screen p-4" style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <header className='text-center my-6'>
          <h1 className="text-4xl text-gray-800 font-bold">Shopping List</h1>
        </header>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div style={{ flex: 1 }}>
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </main>
  );
}