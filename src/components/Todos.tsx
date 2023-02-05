import Todo from './Todo';
import type ITodo from '../types/todo';

type TodosProps = {
  todos: ITodo[];
  onCompleteTodo: (todo: ITodo) => void;
};

function Todos({ todos, onCompleteTodo }: TodosProps) {
  return (
    <ul className='flex flex-col gap-4 divide-y divide-gray-700' role='list'>
      {todos.map((todo: ITodo) => (
        <Todo key={todo.id} todo={todo} onCompleteTodo={onCompleteTodo} />
      ))}
    </ul>
  );
}

export default Todos;
