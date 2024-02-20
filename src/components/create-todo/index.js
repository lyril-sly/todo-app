import { useLocalStorage } from "usehooks-ts";
import {useState} from "react"
import styles from "./index.module.css";

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", [])
    
    const [todo, setTodo] = useState("")


    // function saveTodo() {
    //     // // get existing list of todo from local storage
    //     // let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
    //     // // add new todo list to existing list of todo
    //     // todos.push(todo);
    //     // // set all todos in local storage
    //     // localStorage.setItem("TODO_KEY", JSON.stringify(todos))

    //     setTodos([...todos, todo])
    // }

    return (
        <section className={styles.createTodo}>
            <input
                onChange= {event => setTodo(event.target.value)}
                placeholder="type here"
                className={styles.createTodoInput}
            />
            <button onClick= {() => setTodos([...todos, todo])}
             className={styles.createTodoButton}
             >Create</button>
        </section>
    )
};

export default CreateTodo;