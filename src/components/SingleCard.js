import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
import Acordion from "./Acordion";
const CardItem = ({ title, body, comment }) => {
  const history = useHistory();
  const minId = comment.map(c => c.id);
  return (
    <>
      <Card className="text-center mt-5 mx-5">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="primary" onClick={() => history.push("/")}>
            Geri Dön
          </Button>
        </Card.Body>
      </Card>
      <div className="mt-5">
        {comment.map(comm => (
          <Acordion key={comm.id} {...comm} minimumId={minId[0]} />
        ))}
      </div>
    </>
  );
};

export default CardItem;
