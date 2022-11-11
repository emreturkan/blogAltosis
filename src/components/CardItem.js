import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Modals from "./Modals";

const CardItem = ({ title, body, id, url }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  if (url) {
    return (
      <Card style={{ width: "18rem" }} className="mt-5">
        <Card.Img variant="top" src={url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
        </Card.Body>
      </Card>
    );
  }

  if (show) {
    return <Modals show={show} handleClose={handleClose} id={id} />;
  }

  return (
    <Card style={{ width: "18rem" }} className="mt-5">
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title} </Card.Title>
        <Card.Text>{body}</Card.Text>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <Button variant="primary">
            <Link
              className="text-white text-decoration-none"
              to={`/posts/${id}`}
            >
              Devamını Oku...
            </Link>
          </Button>
          <Button variant="danger" onClick={handleShow}>
            Sil
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
