import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useHistory } from "react-router-dom";
const CardItem = ({ title, body }) => {
  const history = useHistory();

  return (
    <Card className="text-center mt-5 mx-5">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{body}</Card.Text>
        <Button variant="primary" onClick={() => history.push("/")}>
          Geri Dön
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
