import { useDispatch, useSelector} from "react-redux";
import { clearList } from "../features/todoSlice";
import TodoItem from "./TodoItem";

const TodoList = () => {
const dispatch = useDispatch();
const {todo} = useSelector((state) => state.todos);

const handleClearList = () => {
  dispatch(clearList());
};


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
