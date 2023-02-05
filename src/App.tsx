import { useState } from 'react';
import type Todo from './types/todo';

function App() {
  const [input, setInput] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 1,
      title: 'Buy some milk',
      completed: false,
    },
    {
      id: 2,
      title: 'Finish Physics Assignment',
      completed: true,
    },
    {
      id: 3,
      title: 'Read a book',
      completed: false,
    },
  ]);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const editTodo = (todo: Todo) => {
    setIsEditing(!isEditing);
    setInput(todo.title);
    console.log('todo edited');
  };

  const completeTodo = (todo: Todo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });

    setTodos(updatedTodos);
  };

  const handleSumit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const newTodo: Todo = {
      id: todos.length + 1,
      title: input,
      completed: false,
    };

    addTodo(newTodo);

    setInput('');
  };

  return (
    <main className='flex justify-center bg-gray-800 min-h-screen'>
      <section className='md:w-2/5 w-4/5'>
        <header className='pt-8'>
          <form className='flex flex-row gap-2 p-2 bg-gray-700 rounded shadow-md' onSubmit={handleSumit}>
            {isEditing ? (
              <>
                <input
                  className='bg-transparent flex-1 outline-none placeholder:text-gray-600 text-white'
                  type='text'
                  placeholder='Buy some milk'
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button className='px-2 py-1 text-sm text-white bg-gray-600 rounded hover:bg-gray-700' type='submit'>
                  Update
                </button>
              </>
            ) : (
              <>
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
              </>
            )}
          </form>
        </header>
        <section className='mt-6'>
          <ul className='flex flex-col gap-4 divide-y divide-gray-700' role='list'>
            {todos.map((todo: Todo) => (
              <li
                key={todo.id}
                className='flex flex-row justify-between items-center p-4 bg-gray-700 rounded shadow-md'
              >
                <span className={`text-white ${todo.completed ? 'line-through' : null}`}>{todo.title}</span>
                <div className='flex flex-row gap-4'>
                  <button className='text-gray-600 hover:text-gray-500' onClick={() => editTodo(todo)}>
                    Edit
                  </button>
                  <button className='text-gray-600 hover:text-gray-500' onClick={() => completeTodo(todo)}>
                    {todo.completed ? 'Uncomplete' : 'Complete'}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </section>
    </main>
  );
}

export default App;
