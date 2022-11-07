import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import axios from "axios";

const Forms = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const SetData = async () => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        {
          userId: new Date().getTime(),
          id: new Date().getTime(),
          title,
          body,
        }
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Form className="mt-5">
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Content"
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={SetData}>
          Ekle
        </Button>
      </Form>
    </Container>
  );
};

export default Forms;
