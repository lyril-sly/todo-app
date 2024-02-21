// import {useState, useEffect} from "react";
import {useLocalStorage} from "usehooks-ts"
import TodoItem from "../todo-item";

function TodoList() {
    // let todos = []
    const[todos, setTodos] = useLocalStorage("TODO_KEY", [])
    

    return(

        <section>

            <button 
            className="btn btn-danger"
            // this is use to clear list of items
            onClick={() => setTodos([])} 
            >Clear</button>
        <ul className="list-group">
            {todos.map(function(todo, index){
            //  this is how you set props, you pick it from the child component and render it in the parent component so this is the parent component
                return <TodoItem todo={todo} index={index}/>
            })}
        </ul>
        </section>
    );
}
export default TodoList