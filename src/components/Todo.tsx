import { useState } from 'react';
import useTodos from '../hooks/useTodos';
import ITodo from '../types/todo';

type TodoProps = {
  todo: ITodo;
};

function Todo({ todo }: TodoProps) {
  const [newInput, setNewInput] = useState<string>(todo.title);

  const { completeTodo, toggleEditTodo, updateTodo } = useTodos();

  const handleConfirm = (todo: ITodo) => {
    updateTodo({ ...todo, title: newInput });
  };

  return (
    <li className='flex flex-col justify-center gap-3 p-4 bg-gray-700 rounded shadow-md transition-all'>
      <div className='flex justify-between w-full'>
        {todo.isEditing ? (
          <div className='flex flex-row gap-4'>
            <input
              type='text'
              className='w-fit px-2 py-1 text-white bg-gray-600 rounded shadow-md'
              value={newInput}
              onChange={(e) => setNewInput(e.target.value)}
            />
            <button
              className='px-2 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700'
              onClick={() => handleConfirm(todo)}
            >
              Update
            </button>
          </div>
        ) : (
          <span className={`text-white ${todo.completed ? 'line-through' : null}`}>{todo.title}</span>
        )}
        <div className='flex flex-row gap-4'>
          {todo.isEditing ? (
            <button className='text-gray-600 hover:text-gray-500' onClick={() => toggleEditTodo(todo)}>
              Cancel
            </button>
          ) : (
            <button className='text-gray-600 hover:text-gray-500' onClick={() => toggleEditTodo(todo)}>
              Edit
            </button>
          )}
          <button className='text-gray-600 hover:text-gray-500' onClick={() => completeTodo(todo)}>
            {todo.completed ? 'Uncomplete' : 'Complete'}
          </button>
        </div>
      </div>
    </li>
  );
}

export default Todo;
