import { Trash } from "react-bootstrap-icons";
import { PencilSquare } from "react-bootstrap-icons";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, editTodo, completeTodo, setFilter } from "../redux/reducers/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [editing, setEditing] = useState(false);
  const todos = useSelector((state) => {
    switch (state.todo.filter) {
      case "completed":
        return state.todo.todos.filter((todo) => todo.completed);
      case "active":
        return state.todo.todos.filter((todo) => !todo.completed);
      default:
        return state.todo.todos;
    }
  });
  const dispatch = useDispatch();

  const handleEdit = (id, text) => {
    dispatch(editTodo({ id, text }));
    setEditing(false);
  };

  const handleFilter = (filter) => {
    dispatch(setFilter(filter));
  };

  return (
    <>
    <div className="mx-1 btn-group" role="group" aria-label="Basic radio toggle button group">
      <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off"/>
      <label className="btn btn-outline-primary" htmlFor="btnradio1" onClick={() => handleFilter("all")}>All</label>
      
      <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
      <label className="btn btn-outline-primary" htmlFor="btnradio2" onClick={() => handleFilter("completed")}>Completed</label>

      <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
      <label className="btn btn-outline-primary" htmlFor="btnradio3" onClick={() => handleFilter("active")}>Uncompleted</label>
    </div>
    <ul className="list-group mb-0">
      {todos.map((todo) => (
        <li className="list-group-item d-flex justify-content-between align-items-center border-start-0 border-top-0 border-end-0 border-bottom rounded-0 mb-2 bg-transparent"
            key={todo.id}>
            {editing ? (
            <TodoItem
              todo={todo}
              onSave={(text) => handleEdit(todo.id, text)}
              onCancel={() => setEditing(false)}
            />
          ) : (
            <>
            
              <div className="d-flex align-items-center">
                <input
                className="form-check-input me-2"
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(completeTodo(todo.id))}
                />
                <label className="form-check-label" style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
                  {todo.text}
                </label>
              </div>
              <div className="col-auto flex-end">
                <button className="btn btn-light mx-1" onClick={() => dispatch(removeTodo(todo.id))}><Trash size={20} color="blue"/></button>
                <button className="btn btn-light mx-1" onClick={() => dispatch(setEditing(todo.id,true))}><PencilSquare color="blue"/></button>
              </div>
        
            </>
          )}
        </li>
      ))}
    </ul>
    </>
    
  );
};

export default TodoList;
