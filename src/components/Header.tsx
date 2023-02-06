import { useContext, useState } from 'react';
import { TodoContext } from '../context/todoContext';
import type Todo from '../types/todo';

function Header() {
  const [input, setInput] = useState<string>('');

  const { todos, addTodo } = useContext(TodoContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const newTodo: Todo = {
      id: todos.length + 1,
      title: input,
    };

    addTodo(newTodo);

    setInput('');
  };

  return (
    <header className='pt-8'>
      <form className='flex flex-row gap-2 p-2 bg-gray-700 rounded shadow-md' onSubmit={handleSubmit}>
        <input
          className='bg-transparent flex-1 outline-none placeholder:text-gray-600 text-white'
          type='text'
          placeholder='Buy some milk'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='px-2 py-1 text-sm text-white bg-gray-600 rounded hover:bg-gray-700' type='submit'>
          Add
        </button>
      </form>
    </header>
  );
}

export default Header;
