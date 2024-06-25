"use client";

import { useState } from 'react';
import ItemList from '../week-7/item-list';
import NewItem from './new-item';
import itemsData from '../week-7/items.json';

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="bg-gray-50 min-h-screen p-4">
      <header className='text-center my-6'>
      <h1 className="text-4xl text-gray-800 font-bold">Shopping List</h1>
      </header>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  )
}