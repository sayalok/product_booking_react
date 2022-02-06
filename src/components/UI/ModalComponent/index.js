import React from "react";
import { Modal } from "react-bootstrap";


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
            </Modal>
        </>
    );
};


export default ModalComponent;
