import Todo from './Todo';
import type ITodo from '../types/todo';

type TodosProps = {
  todos: ITodo[];
  onToggle: (todo: ITodo) => void;
  onCompleteTodo: (todo: ITodo) => void;
};

function Todos({ todos, onToggle, onCompleteTodo }: TodosProps) {
  return (
    <ul className='flex flex-col gap-4 divide-y divide-gray-700' role='list'>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} onToggle={onToggle} />
      ))}
    </ul>
  );
}

export default Todos;
