const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div className="container mx-auto">
      <ul className="flex flex-col md:flex-row md:flex-wrap -mx-2 rounded">
        <li
          className="bg-slate-200 m-2 p-4 flex-wrap md:flex-none mx:w-full rounded-lg shadow-lg hover:bg-blue-50 transition duration-300"
          onClick={() => onSelect(name)}
        >
          <h2 className="font-bold text-xl text-gray-800">{name}</h2>
          <p className="font-normal text-sm text-gray-600">
            Buy {quantity} in {category}
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Item;
