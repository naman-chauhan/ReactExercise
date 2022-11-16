import React, { useState } from "react";
import "./styles.css";
import { Card } from "react-bootstrap";
import FormTodo from "./components/FormTodo";
import Todo from "./components/Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "This is a sampe todo",
      isDone: false,
    },
  ]);

  const [todoEdit, setTodoEdit] = useState("");

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
    console.log(newTodos);
  };

  const markTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
    console.log(newTodos);
  };

  const editTodo = (index) => {
    const newTodos = [...todos];
    const taskEdit = newTodos[index].text;
    setTodoEdit({ edit: taskEdit, id: index });
    // todos[index].text = taskEdit;
    setTodos((currVal) => {
      // [...currVal], currVal[index].text = taskEdit;
      const newState = currVal.map((obj, index) => {
        if (obj.id === index) {
          obj.text = taskEdit;
        }
        return obj;
      });
      return newState;
    });
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    console.log(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="text-center mb-4">Todo List</h1>
        <FormTodo addTodo={addTodo} todoEdit={todoEdit} editTodo={editTodo} />
        <div>
          {todos.map((todo, index) => (
            <Card>
              <Card.Body>
                <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  editTodo={editTodo}
                  todoEdit={todoEdit}
                />
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
