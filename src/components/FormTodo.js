import React, { useState, useEffect } from "react";
import "../styles.css";
import { Button, Form } from "react-bootstrap";

function FormTodo({ addTodo, todoEdit, editTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
    if (todoEdit && todoEdit.id !== "") {
      editTodo(todoEdit.id);
    }
  };

  useEffect(() => {
    setValue(todoEdit.edit);
  }, [todoEdit]);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>
          <b>Add Todo</b>
        </Form.Label>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={handleInputChange}
          placeholder="Add new todo"
        />
      </Form.Group>
      <Button variant="primary mb-3" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormTodo;
