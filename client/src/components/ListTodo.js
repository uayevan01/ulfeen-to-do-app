import React from 'react';
import TodoItem from './TodoItem';

const ListTodo = ({ todos, deleteTodo, editTodo }) => {
    return(
        <ul>
            {
            (todos && todos.length) ?
            todos.map((todo) => 
                <TodoItem 
                key = {todo._id}
                todo = {todo}
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}>
                </TodoItem>)
            :
            <li>No Todos yet</li>
        }
        </ul>
  )
}
export default ListTodo