import React from "react";
import { Form } from "react-bootstrap";
import ModalComponent from "../UI/ModalComponent";

const ReturnProductModal = (props) => {
    let productOptions
    if (props.productListData && props.productListData.length > 0) {
        productOptions = props.productListData.map((item,index) =>  <option key={index} value={item.id}>{item.name}</option>)
    }
	return (
        <>
            <ModalComponent 
                isShow={props.returnMoladStatus}
                modalCloseHandler={() => props.onReturnBtnClick()}
                modalTitle="Return a product">
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Select>
                                <option>Select Product</option>
                                {productOptions}
                            </Form.Select>
                        </Form.Group>
                    </Form>
            </ModalComponent>
        </>
    );
};

export default ReturnProductModal;
