import axios from "axios";
import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Modals = ({ show, handleClose, id }) => {
  const deletePost = async () => {
    try {
      const response = await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log(response);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Silmek İstediğinizden Emin misiniz?</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Kapat
        </Button>
        <Button variant="danger" onClick={deletePost}>
          Evet Sil
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Modals;
