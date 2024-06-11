
import ItemList from '../week-5/item-list';

export default function Page() {
  return (
    <main className="bg-gray-50 min-h-screen p-4">
      <header className='text-center my-6'>
      <h1 className="text-4xl text-gray-800 font-bold">Shopping List</h1>
      </header>
      
      <ItemList />
    </main>
  )
}