import React from "react";
import { Button, ButtonToolbar, ButtonGroup,InputGroup,FormControl } from "react-bootstrap";


const ProductActionButton = (props) => {
	return (
        <>
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-end">
                <ButtonGroup className="me-2">
                    <Button onClick={() => {alert('Return')}}>Book</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button onClick={() => {alert('Return')}}>Return</Button>
                </ButtonGroup>
            </ButtonToolbar>
        </>
    );
};


export default ProductActionButton;
