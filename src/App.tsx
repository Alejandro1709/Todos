function App() {
  return (
    <main className='flex justify-center bg-gray-800 min-h-screen'>
      <section className='md:w-2/5 w-4/5'>
        <header className='pt-8'>
          <form className='flex flex-row gap-2 p-2 bg-gray-700 rounded shadow-md'>
            <input
              className='bg-transparent flex-1 outline-none placeholder:text-gray-600 text-white'
              type='text'
              placeholder='Buy some milk'
            />
            <button className='px-2 py-1 text-sm text-white bg-gray-600 rounded hover:bg-gray-700' type='submit'>
              Add
            </button>
          </form>
        </header>
      </section>
    </main>
  );
}

export default App;
