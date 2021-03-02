import React from 'react'

function Form({inputText, setInputText, todos, setTodos, setStatus}) {

    const inputTextHandler = (event) => {
        setInputText(event.target.value)
    } 

    const submitTodoHandler = event => {
        event.preventDefault()
        if (inputText.trim()) {
            setTodos([...todos, {text: inputText, completed: false, id: Math.random() * 1000}])    
        }
        setInputText("")
    }

    const statusHandler = event => {
        setStatus(event.target.value)
    }

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form
