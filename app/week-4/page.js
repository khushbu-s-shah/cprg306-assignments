
import NewItem from '../week-4/new-item';

export default function Page() {
  return (
    <main className="bg-black flex min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping LIst</h1>
      <NewItem />
    </main>
  );
}
