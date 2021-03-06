import React from 'react'
import Todo from './Todo'

function TodoList({todos, filteredTodos, setTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {   
                    filteredTodos.length ? 
                    filteredTodos.map(todo => <Todo setTodos={setTodos} 
                        todos={todos} 
                        todo={todo} 
                        key={todo.id} 
                        />) : null    
                }
            </ul>
        </div>
    )
}

export default TodoList

