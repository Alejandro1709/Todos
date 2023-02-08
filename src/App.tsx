import { useEffect } from 'react';
import client from './client';
import Header from './components/Header';
import Todos from './components/Todos';

function App() {
  const execute = async () => {
    const res = await client.sayHi.query();
    console.log(res);
  };

  useEffect(() => {
    execute();
  }, []);

  return (
    <main className='flex justify-center bg-gray-800 min-h-screen'>
      <section className='md:w-2/5 w-4/5'>
        <Header />
        <section className='mt-6'>
          <Todos />
        </section>
      </section>
    </main>
  );
}

export default App;
