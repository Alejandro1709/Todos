import Todo from './Todo';
import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';
import type ITodo from '../types/todo';

function Todos() {
  const { todos } = useContext(TodoContext);

  return (
    <ul className='flex flex-col gap-4 divide-y divide-gray-700' role='list'>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default Todos;
