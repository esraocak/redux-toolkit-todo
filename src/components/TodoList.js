import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
const handleClearList = () => {};
const {todo} = useSelector((state)=>state.todos)

  return (
    <div>
      <div>
        {todo.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default TodoList;
