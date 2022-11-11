import React from "react";
import Accordion from "react-bootstrap/Accordion";
const Acordion = ({ name, body, id, minimumId }) => {
  return (
    <Accordion className="container" defaultActiveKey={minimumId} alwaysOpen>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>{name}</Accordion.Header>
        <Accordion.Body>{body}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default Acordion;
