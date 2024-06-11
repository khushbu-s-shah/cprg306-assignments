import { useState } from 'react';
import Item from '../week-5/item';
import itemsData from './items.json';

export default function ItemList() {
    const [sortBy, setSortBy] = useState('name');

    const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
            return a.category.localeCompare(b.category);
        }
    });

    return (
        <div className="p-4">
            <div className="mb-4">
                <button
                    className={`mr-2 px-4 py-2 ${sortBy === 'name' ? 'bg-blue-500' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('name')}
                >
                    Sort by Name
                </button>
                <button
                    className={`px-4 py-2 ${sortBy === 'category' ? 'bg-blue-500' : 'bg-gray-500'}`}
                    onClick={() => setSortBy('category')}
                >
                    Sort by Category
                </button>
            </div>
           
        </div>
    );
}
