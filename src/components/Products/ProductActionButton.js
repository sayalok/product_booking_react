import React from "react";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";


const ProductActionButton = (props) => {
	return (
        <>
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-end">
                <ButtonGroup className="me-2">
                    <Button onClick={() => props.onBookBtnClick()}>Book</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={() => props.onReturnBtnClick()}>Return</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </>
    );
};


export default ProductActionButton;
