import { createContext } from 'react';

export const TodoContext = createContext({});

export function TodoProvider({ children }: { children: React.ReactNode }) {
  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
}
