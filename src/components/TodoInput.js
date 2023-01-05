import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todoSlice";

const TodoInput = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const {todo} = useSelector((state)=>state.todos)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        title: text,
      })
      )
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="todo-input"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button" onClick={}>
        Add
      </button>
    </form>
  );
};

export default TodoInput;
