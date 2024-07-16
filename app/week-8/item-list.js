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
    <div className="p-4">
      <div className="bg-black flex justify-center mb-6 mx-auto p-1">
        <label htmlFor='item' className='text-lg text-white mb-4 font-bold p-2 py-2 px-4'>Sort:</label>
        <button
          className={`block sm:inline-block md:text-xl m-2 px-4 py-2 rounded-full text-white shadow ${sortBy === 'name' ? 'bg-gradient-to-tr from-violet-400 to-green-400' : 'bg-green-400'}`}
          onClick={() => setSortBy('name')}
        >
          Sort by Name
        </button>
        <button
          className={`block sm:inline-block md:text-xl m-2 px-4 py-2 rounded-full text-white shadow ${sortBy === 'category' ? 'bg-gradient-to-tr from-violet-400 to-green-400' : 'bg-green-500'}`}
          onClick={() => setSortBy('category')}
        >
          Sort by Category
        </button>
        <button
          className={`block sm:inline-block md:text-xl m-2 px-4 py-2 rounded-full text-white shadow ${sortBy === 'group' ? 'bg-gradient-to-tr from-violet-400 to-green-400' : 'bg-green-500'}`}
          onClick={() => setSortBy('group')}
        >
          Group by Category
        </button>
      </div>

      {sortBy === 'group' ? (
        <div className="flex flex-col md:flex-row md:flex-wrap">
          {Object.keys(groupedItems).map(category => (
            <div key={category} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <h2 className="capitalize text-xl font-semibold mt-4 bg-gray-400 p-2 rounded">{category}</h2>
              <ul>
                {groupedItems[category].map(item => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
                    onSelect={() => onItemSelect(item)}
                  />
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={() => onItemSelect(item)}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
