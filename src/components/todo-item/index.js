// this is props and it is a child component that will be rendered in the parent component and it takes two parameters or you can just use the props in the parameters and apply it to
function TodoItem({index, todo}) {

    return (
        <li className="list-group-item" key={index}>
            <input
                className="form-check-input me-1"
                type="checkbox"
                value=""
                id={index}
            />
            <label className="form-check-label" for={index}>
                {todo}
            </label>
            <button className="btn btn-danger">Delete</button>
        </li>
    );
}

// you always have to export your function name and the first letter must be in capital letters
export default TodoItem;
