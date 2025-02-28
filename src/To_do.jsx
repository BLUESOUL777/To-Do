import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function To_do() {
    let [todos, setTodos] = useState([{task: "Sample Task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, {task: newTodo, id: uuidv4()}];
        });
        setNewTodo("");
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    }

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    }

    let upperCaseAll = () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo,
                task: todo.task.toUpperCase(),
            };
        }));
    }

    let upperOne = (id) => {
        setTodos(todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            } else {
                return todo;
            }
        }));
    }

    let doneAll = () => {
        setTodos(todos.map((todo) => {
            return {
                ...todo,
                style: { textDecoration: "line-through" }
            };
        }));
    }

    return (
        <div>
            <h3>TO DO LIST</h3>
            <hr />
            <ul>
                {
                    todos.map((todo) => (
                        <li key={todo.id} style={todo.style || {}}>
                            <span>
                                {todo.task} &nbsp;&nbsp;&nbsp;
                                <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                                <button onClick={() => upperOne(todo.id)}>Upper One</button>
                            </span>
                        </li>
                    ))
                }
            </ul>
            <br /><br /><br />
            <input type="text" placeholder="Enter Task" value={newTodo} onChange={updateTodoValue} />
            <br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            <br /><br />
            <button onClick={doneAll}>Mark as done all</button>
        </div>
    );
}
