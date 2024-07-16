import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div className="container mx-auto">
      <ul className="flex flex-col md:flex-row md:flex-wrap -mx-2 rounded">
        <li
          className="bg-white m-2 p-4 md:flex-1 md:w-64 rounded-lg shadow-md hover:bg-blue-50 transition duration-300 cursor-pointer"
          onClick={() => onSelect(name)}
        >
          <h2 className="font-bold text-lg text-gray-800 container mx-auto">{name}</h2>
          <p className="font-normal text-sm text-gray-600">Buy {quantity} in {category}</p>
        </li>
      </ul>
    </div>
  );
}

export default Item;
