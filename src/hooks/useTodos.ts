import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';

export default function useTodos() {
  return useContext(TodoContext);
}
