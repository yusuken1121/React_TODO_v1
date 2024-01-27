import { useState } from "react";
import "./styles.css";

export const Todo = () => {
  const [incompleteTodos, setincompleteTodos] = useState([
    "Test1",
    "Test2",
    "Test3",
    "Test4",
  ]);

  return (
    <>
      <div className="input-area">
        <input placeholder="TODOを入力" />
        <button>Enter</button>
      </div>

      <div className="incomplete-area">
        <p className="title">Incomplete tasks</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>Complete</button>
                <button>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">Completed tasks</p>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">buy a new T-shirt</p>
              <button>Resotre</button>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <div className="list-row">
              <p className="todo-item">buy a new T-shirt</p>
              <button>Resotre</button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
