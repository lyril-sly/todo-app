// import React from "react";
import styles from "./index.module.css";

function CreateTodo() {
    // const [todo, setTodo] =React.useState("")
    let todo;

    function collectInput(event) {todo = event.target.value}

    function saveTodo () {
        // get existing list of todo from local storage
        let todos =JSON.parse(localStorage.getItem("TODO_KEY")) || [];
        // add new todo list to existing list of todo
        todos.push(todo);
        // set all todos in local storage
    localStorage.setItem("TODO_KEY",JSON.stringify(todos))
    }

    return(
        <section className={styles.createTodo}>
            <input 
             onChange= {collectInput}
            placeholder="type here"
            className={styles.createTodoInput} 
            />
            <button onClick={saveTodo} className={styles.createTodoButton}>Create</button>
        </section>
    )
};

export default CreateTodo;