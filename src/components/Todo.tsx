import ITodo from '../types/todo';

type TodoProps = {
  todo: ITodo;
  onCompleteTodo: (todo: ITodo) => void;
};

function Todo({ todo, onCompleteTodo }: TodoProps) {
  return (
    <li className='flex flex-row justify-between items-center p-4 bg-gray-700 rounded shadow-md'>
      <span className={`text-white ${todo.completed ? 'line-through' : null}`}>{todo.title}</span>
      <div className='flex flex-row gap-4'>
        <button className='text-gray-600 hover:text-gray-500'>Edit</button>
        <button className='text-gray-600 hover:text-gray-500' onClick={() => onCompleteTodo(todo)}>
          {todo.completed ? 'Uncomplete' : 'Complete'}
        </button>
      </div>
    </li>
  );
}

export default Todo;
