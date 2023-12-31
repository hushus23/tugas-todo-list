import { Check } from "react-bootstrap-icons";
import { X } from "react-bootstrap-icons";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/reducers/todoSlice";

const TodoItem = ({ todo, onSave, onCancel }) => {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(editTodo({ id: todo.id, text }));
    onSave(text);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
      <from className="d-flex align-items-center w-100">
        <div className="row g-2 justify-content-between w-100">
          <div className="col-auto flex-start">
            <input
              className="form-control" 
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <div className="col-auto flex-end">
          <button className="btn btn-light mx-1" onClick={handleSave}><Check size={20} color="green" /></button>
          <button className="btn btn-light mx-1" onClick={handleCancel}><X size={20} color="red" /></button>
          </div>
        </div>
      </from>
  );
};

export default TodoItem;
