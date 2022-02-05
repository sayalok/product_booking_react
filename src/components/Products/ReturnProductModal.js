import React, {useState} from "react";
import { Form, Button,ButtonToolbar, Row, Col } from "react-bootstrap";
import ModalComponent from "../UI/ModalComponent";
import moment from "moment";


const ReturnProductModal = (props) => {
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true)
    const [showmilageInput, setShowmilageInput] = useState(false)
    const [alertState, setAlertState] = useState({
        isShow: false,
        variantType: '',
        message: ''
    });

    let [getFieldValue, setFieldValue] = useState({
		product_name: "",
		product_book_from_date: "",
		product_book_to_date: "",
        product_used_milage: 0,
        estimatePrice: 0
	});


    let productOptions
    if (props.productListData && props.productListData.length > 0) {
        productOptions = props.productListData.map((item,index) =>  <option key={index} value={item.id}>{item.name}</option>)
    }

    const handleChange = (e) => {
        let name = e.target.name;
		let value = e.target.value;

        getFieldValue[name] = value;
		setFieldValue(getFieldValue);

        if (getFieldValue.product_name !== '' && getFieldValue.product_book_from_date !== '' && getFieldValue.product_book_to_date !== '') {
            let product = props.productListData.filter(item => {
                if (item.id == getFieldValue.product_name) {
                    if (item.mileage != null) {
                        setShowmilageInput(true)
            			setSubmitBtnDisabled(true)
                        if (getFieldValue.product_used_milage !== '' ) {

                        }
                    }else{
            			setSubmitBtnDisabled(false)

                    }
                }
            })
		}else{
			setSubmitBtnDisabled(true)
		}
    }

    let milageInput;
    if (showmilageInput) {
        milageInput = (
            <Form.Group className="mb-3">
                <Form.Label>Used Milage</Form.Label>
                <Form.Control 
                    type="text" 
                    placeholder="Used Milage"
                    name="product_used_milage"
                    id="product_used_milage"
                    onChange={(e) => handleChange(e)}/>
            </Form.Group>
        )
    }

    let returnModalBody = (
        <Form>
            <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Select
                    name="product_name"
                    id="product_name"
                    onChange={(e) => handleChange(e)}
                >
                    <option>Select Product</option>
                    {productOptions}
                </Form.Select>
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col}>
                    <Form.Label>From</Form.Label>
                    <Form.Control 
                        type="date"
                        name="product_book_from_date"
                        id="product_book_from_date"
                        onChange={(e) => handleChange(e)}/>
                </Form.Group>

                <Form.Group as={Col}>
                    <Form.Label>To</Form.Label>
                    <Form.Control 
                        type="date"
                        name="product_book_to_date"
                        id="product_book_to_date"
                        onChange={(e) => handleChange(e)}/>
                </Form.Group>
            </Row>
            {milageInput}
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-end">
                <Button size="md" type="submit" disabled={submitBtnDisabled}>Submit</Button>
            </ButtonToolbar>
        </Form>
    )

    // if (showConfirmDialog) {
    //     returnModalBody = (
    //         <Form onSubmit={onConfirmFormSubmit}>
    //             <p className="text-center">Your total price is </p>
    //             <p className="text-center">Do you want to complete?</p>
    //             <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-end">
    //                 <Button size="md" type="submit" disabled={submitBtnDisabled}>Confirm</Button>
    //             </ButtonToolbar>
    //         </Form>
    //     )
    // }

	return (
        <>
            <ModalComponent 
                isShow={props.returnMoladStatus}
                modalCloseHandler={() => props.onReturnBtnClick()}
                modalTitle="Return a product">
                {returnModalBody}
            </ModalComponent>
        </>
    );
};

export default ReturnProductModal;
