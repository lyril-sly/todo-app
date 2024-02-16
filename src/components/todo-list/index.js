import React from "react";

function TodoList() {
    // let todos = []
    const[todos, setTodos] =React.useState([])

    function getTodos(){
        // get all todos from local starage and store it
        let todos = JSON.parse(localStorage.getItem("TODO_KEY")) || [];
        // update react state
        setTodos(todos);
    }

    React.useEffect(getTodos, []);

    return(
        <ul>
            {todos.map(function(todo, index){
                return <li key={index}>{todo}</li>
            })}
        </ul>
    );
}