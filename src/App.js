import './App.css';
import React, {useState, useEffect} from 'react'
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  const [inputText, setInputText] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState("all")
  const [filteredTodos, setFilteredTodos] =  useState([])

  useEffect(() => {
    filterHandler()
  }, [todos, status])

  const filterHandler = () => {
    switch (status) {
      case "completed":  
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  }

  return (
    <div>

      <header>
        <h1>Todo List</h1>
      </header>

      <Form todos={todos} 
            inputText={inputText} 
            setTodos={setTodos}
            setInputText={setInputText} 
            setStatus={setStatus} />

      <TodoList todos={todos} 
                filteredTodos={filteredTodos}
                setTodos={setTodos} />

    </div>
  )
}

export default App
