import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import axios from "axios";

const Forms = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [newPost, setNewPost] = useState([]);
  const [error, setError] = useState("");
  const SetData = async () => {
    try {
      if (!title && !body) {
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
        setNewPost(response.data);
      } else {
        setError("Lütfen Title veya Content Alanını Boş Bırakmayınız!");
      }
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
            onChange={e => setTitle(e.target.value.trim())}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Content</Form.Label>
          <Form.Control
            type="text"
            placeholder="Content"
            value={body}
            onChange={e => setBody(e.target.value.trim())}
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
