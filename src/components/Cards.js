import React, { useEffect, useState } from "react";
import axios from "axios";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import CardItem from "./CardItem";
const Cards = ({ routeName }) => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [error, setError] = useState("");
  const SetData = async e => {
    e.preventDefault();
    try {
      if (title && body) {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/todos",
          {
            userId: new Date().getTime(),
            id: new Date().getTime(),
            title,
            body,
          }
        );
        posts.unshift(response.data);
        setError({
          head: "Başarılı",
          msg: "Başarıyla Eklendi",
          type: "success",
        });
        setTimeout(() => {
          setError("");
        }, 2000);
        setTitle("");
        setBody("");
      } else {
        setError({
          head: "Hatalı Giriş",
          msg: "Lütfen Title veya Content Alanını Boş Bırakmayınız!",
          type: "danger",
        });
        setTimeout(() => {
          setError("");
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getPosts = async () => {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/${routeName}`
      );
      setPosts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  if (routeName === "posts") {
    return (
      <>
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
          {error && (
            <Alert variant={error.type} className="mt-2">
              <Alert.Heading>{error.head}</Alert.Heading>
              <p>{error.msg}</p>
            </Alert>
          )}
        </Container>
        <div className="d-flex justify-content-around align-items-around flex-wrap  mt-5 mb-5">
          {posts.map(post => (
            <CardItem key={post.id} {...post} />
          ))}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-around align-items-around flex-wrap  mt-5 mb-5">
        {posts.map(post => (
          <CardItem key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default Cards;
