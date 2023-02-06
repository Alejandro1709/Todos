/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext, useState } from 'react';
import initialTodos from '../data';
import type ITodo from '../types/todo';

type TodoContextType = {
  todos: ITodo[];
  addTodo: (todo: ITodo) => void;
  toggleEditTodo: (todo: ITodo) => void;
  completeTodo: (todo: ITodo) => void;
  updateTodo: (todo: ITodo) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: initialTodos,
  addTodo: () => {},
  toggleEditTodo: () => {},
  completeTodo: () => {},
  updateTodo: () => {},
});

export function TodoProvider({ children }: { children: React.ReactNode }) {
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
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        toggleEditTodo,
        completeTodo,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
