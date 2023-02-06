import Todo from './Todo';
import type ITodo from '../types/todo';

type TodosProps = {
  todos: ITodo[];
  onToggle: (todo: ITodo) => void;
  onConfirm: (todo: ITodo) => void;
  onCompleteTodo: (todo: ITodo) => void;
};

function Todos({ todos, onToggle, onConfirm, onCompleteTodo }: TodosProps) {
  return (
    <ul className='flex flex-col gap-4 divide-y divide-gray-700' role='list'>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} onToggle={onToggle} onConfirm={onConfirm} />
      ))}
    </ul>
  );
}

export default Todos;
