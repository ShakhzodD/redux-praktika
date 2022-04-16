import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Input from "./Input";
function Modall({ handleShow, setShow, show, handleClose }) {
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input show={show} setShow={setShow} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Modall;
