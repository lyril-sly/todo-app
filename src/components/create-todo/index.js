import { useLocalStorage } from "usehooks-ts";
import {useState} from "react"
import styles from "./index.module.css";

function CreateTodo() {
    const [todos, setTodos] = useLocalStorage("TODO_KEY", [])
    // the useState is use to make the input filed reactive so that you can type in them
    const [todo, setTodo] = useState("")


    const SaveTodos = () => {
        // to save all todos
        setTodos([...todos, todo]);
        // wipe the input box
        setTodo("")
    }

    return (
        <section className={styles.createTodo}>
            <input
            // the value is use to set the todo list
            value={todo}
            // the onKeyDown is use to set the enter key
            onKeyDown={event => event.key == "Enter" && setTodos([...todos, todo])}
            // the onChange event is use to update the state of the input filed so that when you type a new value it will update 
                onChange= {event => setTodo(event.target.value)}
                placeholder="type here"
                className={styles.createTodoInput}
            />
            <button
             className={styles.createTodoButton}
             onClick={() => SaveTodos([...todos, todo])}
             >Create</button>
        </section>
    )
};

export default CreateTodo;