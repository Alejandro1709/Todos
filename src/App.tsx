import { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import initialTodos from './data';
import type Todo from './types/todo';

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
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

  return (
    <main className='flex justify-center bg-gray-800 min-h-screen'>
      <section className='md:w-2/5 w-4/5'>
        <Header todos={todos} onSubmitTodo={addTodo} />
        <section className='mt-6'>
          <Todos todos={todos} onCompleteTodo={completeTodo} />
        </section>
      </section>
    </main>
  );
}

export default App;
