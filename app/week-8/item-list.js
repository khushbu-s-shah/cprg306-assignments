"use client";

import { useState } from 'react';
import Item from '../week-8/item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="bg-gray-800 rounded-lg p-4 mb-6 flex items-center justify-between">
        <label htmlFor='item' className='text-lg text-white font-bold'>Sort:</label>
        <div className="flex space-x-2">
          <button
            className={`px-4 py-2 rounded-full text-white shadow-md bg-gradient-to-tr from-indigo-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600 ${sortBy === 'name' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => setSortBy('name')}
          >
            Sort by Name
          </button>

          <button
            className={`px-4 py-2 rounded-full text-white shadow-md bg-gradient-to-tr from-indigo-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600 ${sortBy === 'category' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => setSortBy('category')}
          >
            Sort by Category
          </button>

          <button
            className={`px-4 py-2 rounded-full text-white shadow-md bg-gradient-to-tr from-indigo-500 to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600 ${sortBy === 'group' ? 'ring-2 ring-blue-400' : ''}`}
            onClick={() => setSortBy('group')}
          >
            Group by Category
          </button>
        </div>
      </div>

      {sortBy === 'group' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.keys(groupedItems).map(category => (
            <div key={category} className="bg-white rounded-lg shadow-md overflow-hidden">
              <h2 className="capitalize text-lg font-semibold bg-gray-200 py-2 px-4">{category}</h2>
              <ul className="divide-y divide-gray-200">
                {groupedItems[category].map(item => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={onItemSelect}
                    className="truncate text-sm p-2" // Add classes for styling
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
              className="truncate text-sm p-2" // Add classes for styling
            />
          ))}
        </ul>
      )}
    </div>
  );
}
