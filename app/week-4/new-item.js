
"use client";
 
import { useState } from 'react';
 
export default function NewItem() {

  const [formData, setFormData] = useState({
    name: "",
    quantity: 1,
    category: "produce"
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'quantity' ? Number(value) : value
    }));

  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    alert(`Name: ${formData.name}\nQuantity: ${formData.quantity}\nCategory: ${formData.category}`);
    setFormData({
      name: "",
      quantity: 1,
      category: "produce"
    });

  };
 
  return (

    <div className="p-4 max-w-md mx-auto rounded-xl shadow-md space-y-4 bg-slate-900">

      <form onSubmit={handleSubmit}>

        <div className="container mb-4">
          <input

            type="text" 
            id="name" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder='Item name'
            className="shadow appearance-none border border-red-500 p-2 w-full rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
        </div>

        <div className="flex space-x-4 mb-4">
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            max="99"
            required
            className="shadow appearance-auto border border-red-500 p-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>

        <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="focus:shadow-outline appearance-none border-double border border-red-500 p-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"> V
             
              <option value="produce">Produce</option>
              <option value="dairy">Dairy</option>
              <option value="bakery">Bakery</option>
              <option value="meat">Meat</option>
              <option value="frozen-foods">Frozen Foods</option>
              <option value="canned-goods">Canned Goods</option>
              <option value="dry-goods">Dry Goods</option>
              <option value="beverages">Beverages</option>
              <option value="snacks">Snacks</option>
              <option value="household">Household</option>
              <option value="other">Other</option>
          </select>
        </div>
        

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline container"> +
          </button>
        
      </form>
    </div>

  );

}
