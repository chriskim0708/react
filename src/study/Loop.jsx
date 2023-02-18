import React, { useState } from "react";
import "./Loop.css";

const initialTodoList = [
  { id: 1, checked: false, text: "Buy milk", completed: true },
  { id: 2, checked: false, text: "Walk the dog", completed: false },
  { id: 3, checked: false, text: "Do laundry", completed: false },
];

export default function Loop() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState(initialTodoList);
  const handleChangeInput = (event) => {
    setInputText(event.target.value);
  };
  const handleAddTodo = () => {
    if (inputText.trim() === "") return;
    const newTodo = {
      id: todoList.length + 1,
      text: inputText,
      completed: false,
      checked: false,
    };
    setTodoList((list) => [...list, newTodo]);
    setInputText("");
  };
  const handleDeleteTodo = (id) => {
    setTodoList((list) =>
      list
        .filter((todo) => todo.id !== id)
        .map((todo, index) => ({ ...todo, id: index + 1 }))
    );
  };
  const handleCheckTodo = (event) => {
    const id = Number(event.target.name);
    const checked = event.target.checked;
    setTodoList((list) =>
      list.map((todo) => {
        return { ...todo, checked: todo.id === id ? checked : todo.checked };
      })
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        width: "500px",
        padding: "20px 30px",
        borderRadius: "20px",
        boxShadow: "0 0 15px #000",
      }}
    >
      <h1
        style={{
          fontSize: "28px",
          lineHeight: "1em",
          margin: 0,
          padding: "10px 0 20px 0",
          color: "#056a6b",
        }}
      >
        Todo App
      </h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <input
          type="text"
          value={inputText}
          onChange={handleChangeInput}
          style={{
            height: "32px",
            border: "1px solid #ddd",
            borderRadius: "5px",
            boxSizing: "border-box",
          }}
        />
        <button
          style={{
            height: "32px",
            border: 0,
            color: "#fff",
            background: "linear-gradient(-45deg, #00d2ff, #928dab)",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleAddTodo}
        >
          Add
        </button>
      </div>
      <ul
        style={{
          margin: 0,
          padding: 0,
          marginTop: "20px",
        }}
      >
        {todoList.map((todo, index) => (
          <li
            key={index}
            className="todo-item"
            style={{
              display: "flex",
              justifyContent: "space-between",
              listStyle: "none",
              padding: "10px 0",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <div>
              <input
                type="checkbox"
                name={todo.id}
                checked={todo.checked}
                onChange={handleCheckTodo}
              />
            </div>
            <div
              style={{
                flexGrow: 1,
              }}
            >
              {todo.id}. {todo.text}
            </div>
            <div>
              <span
                style={{
                  display: "flex",
                  width: 20,
                  height: 20,
                  borderRadius: "50%",
                  backgroundColor: todo.completed ? "green" : "red",
                }}
              ></span>
            </div>
            <div>
              <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
