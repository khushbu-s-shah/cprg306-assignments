
const Item = ({name, quantity, category}) => {
    return (
       <div className="container mx-auto">
        <ul className="flex flex-col md:flex-row md:flex-wrap -mx-2">
        <li className="bg-slate-900 m-2 p-2 flex-1 sm:flex-none sm:w-1/2 lg:w-1/4 ">
            <h2 className="font-bold text-xl text-white">{name}</h2>
            <p className="font-normal text-sm text-white">Buy {quantity} in {category}</p>
            
        </li>
        </ul>
        </div>  
    );
}

export default Item;  