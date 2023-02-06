import ITodo from '../types/todo';

type TodoProps = {
  todo: ITodo;
  onToggle: (todo: ITodo) => void;
  onCompleteTodo: (todo: ITodo) => void;
};

function Todo({ todo, onToggle, onCompleteTodo }: TodoProps) {
  return (
    <li className='flex flex-col justify-center gap-3 p-4 bg-gray-700 rounded shadow-md transition-all'>
      <div className='flex justify-between w-full'>
        <span className={`text-white ${todo.completed ? 'line-through' : null}`}>{todo.title}</span>
        <div className='flex flex-row gap-4'>
          {todo.isEditing ? (
            <button className='text-gray-600 hover:text-gray-500' onClick={() => onToggle(todo)}>
              Cancel
            </button>
          ) : (
            <button className='text-gray-600 hover:text-gray-500' onClick={() => onToggle(todo)}>
              Edit
            </button>
          )}
          <button className='text-gray-600 hover:text-gray-500' onClick={() => onCompleteTodo(todo)}>
            {todo.completed ? 'Uncomplete' : 'Complete'}
          </button>
        </div>
      </div>
      {todo.isEditing && (
        <div className='flex flex-row gap-2'>
          <button
            className='px-2 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700'
            onClick={() => onToggle(todo)}
          >
            Cancel
          </button>
          <button className='px-2 py-1 text-sm text-white bg-blue-600 rounded hover:bg-blue-700'>Update</button>
        </div>
      )}
    </li>
  );
}

export default Todo;
