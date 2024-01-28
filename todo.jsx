import { useState } from "react";
import "./styles.css";

export const Todo = () => {
  const [todoText, settodoText] = useState("");
  const [incompleteTodos, setincompleteTodos] = useState(["Test1", "Test2"]);
  const [completeTodos, setcompleteTodos] = useState(["Test3", "Test4"]);

  const onChangeTodoText = (event) => {
    settodoText(event.target.value);
  };

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setincompleteTodos(newTodos);
    settodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setincompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    setincompleteTodos(newIncompleteTodos);

    const newcompleteTodos = [...completeTodos, incompleteTodos[index]];
    setcompleteTodos(newcompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="Please enter a task"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>Enter</button>
      </div>

      <div className="incomplete-area">
        <p className="title">Incomplete tasks</p>
        <ul>
          {incompleteTodos.map((todo, index) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button onClick={() => onClickComplete(index)}>Complete</button>
                <button onClick={() => onClickDelete(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="complete-area">
        <p className="title">Completed tasks</p>
        <ul>
          {completeTodos.map((completeTodos, index) => (
            <li key={completeTodos}>
              <div className="list-row">
                <p className="todo-item">{completeTodos}</p>
                <button>Resotre</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
