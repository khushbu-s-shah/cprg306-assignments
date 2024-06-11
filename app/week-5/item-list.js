"use client";

import { useState } from 'react';
import Item from '../week-5/item';
import itemsData from '../week-5/items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...itemsData].sort((a, b) => {
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
            <div className="bg-blue-100 p-5 block sm:flex justify-center rounded-lg shadow-md mb-6">
              <label htmlFor='item' className='text-lg text-gray-800 mb-4 font-bold p-2 py-3'>Sort:</label>
                <button
                    className={`block sm:inline-block m-2 px-4 py-2 rounded-lg shadow  ${sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>

                <button
                    className={`block sm:inline-block m-2 px-4 py-2 rounded-lg shadow  ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>

                <button className={`block sm:inline-block m-2 px-4 py-2 rounded-lg shadow  ${sortBy === 'group' ? 'bg-blue-500' : 'bg-gray-500'}`}
                onClick={() => setSortBy('group')}>
                    Group by Category
                </button>
                
            </div>

         {sortBy === 'group' ? (
         <div className="flex flex-col md:flex-row md:flex-wrap">
          {Object.keys(groupedItems).map(category => (
            <div key={category} className="w-full md:w-1/2 lg:w-1/3 p-2">
              <h2 className="capitalize text-xl font-semibold mt-4 bg-gray-200 p-2 rounded">{category}</h2>
              <ul>
                {groupedItems[category].map(item => (
                  <Item
                    key={item.id}
                    name={item.name}
                    quantity={item.quantity}
                    category={item.category}
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
              />
            ))}
          </ul>
        )}
        </div>
    );
}
