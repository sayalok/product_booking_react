import React from "react";
import { Modal,Button } from "react-bootstrap";


const ModalComponent = (props) => {
	return (
        <>
           <Modal show={props.isShow} onHide={() => props.modalCloseHandler()}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={() => props.modalCloseHandler()}>No</Button>
                    <Button variant="primary">Yes</Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
};


export default ModalComponent;
