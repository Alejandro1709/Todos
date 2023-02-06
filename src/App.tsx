import { useState } from 'react';
import Header from './components/Header';
import Todos from './components/Todos';
import initialTodos from './data';
import type ITodo from './types/todo';

function App() {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);

  const addTodo = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const toggleEditTodo = (todo: ITodo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isEditing = !t.isEditing;
      }
      return t;
    });

    setTodos(updatedTodos);
  };

  const completeTodo = (todo: ITodo) => {
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.completed = !t.completed;
      }
      return t;
    });

    setTodos(updatedTodos);
  };

  const updateTodo = (todo: ITodo) => {
    const updatedTodos = todos.map((t: ITodo) => {
      if (t.id === todo.id) {
        t.title = todo.title;
        t.isEditing = false;
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
          <Todos todos={todos} onCompleteTodo={completeTodo} onToggle={toggleEditTodo} onConfirm={updateTodo} />
        </section>
      </section>
    </main>
  );
}

export default App;
