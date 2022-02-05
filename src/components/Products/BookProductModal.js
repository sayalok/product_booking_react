import React, {useState} from "react";
import { Form, Row, Col, Button,ButtonToolbar } from "react-bootstrap";
import ModalComponent from "../UI/ModalComponent";
import moment from "moment";
import AlertMessage from "../UI/Alert/AlertMessage";

const BookProductModal = (props) => {

    const [submitBtnDisabled, setSubmitBtnDisabled] = useState(true)
    const [showConfirmDialog, setShowConfirmDialog] = useState(false)
    const [alertState, setAlertState] = useState({
        isShow: false,
        variantType: '',
        message: ''
    });
    let [getFieldValue, setFieldValue] = useState({
		product_name: "",
		product_book_from_date: "",
		product_book_to_date: "",
        estimatePrice: 0
	});

    let productOptions
    if (props.productListData && props.productListData.length > 0) {
        productOptions = props.productListData.map((item,index) =>  {
            if (item.availability == 1) {
                return <option key={index} value={item.id}>{item.name}</option>
            }
        })
    }

    const onsubmit = e => {
        e.preventDefault()
        setShowConfirmDialog(true)
    }

    const onConfirmFormSubmit = e => {
        e.preventDefault()
        const data = {
			"product_name": getFieldValue.product_name,
			"product_book_from_date": getFieldValue.product_book_from_date,
			"product_book_to_date": getFieldValue.product_book_to_date,
			"estimatePrice": getFieldValue.estimatePrice
		}

        props.onBookDataSubmit(data)
    }

    const handleChange = (e) => {
        let name = e.target.name;
		let value = e.target.value;

        getFieldValue[name] = value;
		setFieldValue(getFieldValue);

        if (getFieldValue.product_name !== '' && getFieldValue.product_book_from_date !== '' && getFieldValue.product_book_to_date !== '') {
            let totalDays = moment(getFieldValue.product_book_to_date).diff(moment(getFieldValue.product_book_from_date), 'days')+1;
            let product = props.productListData.filter(item => {
                if (item.id == getFieldValue.product_name) {
                    if (item.minimum_rent_period <= totalDays) {
                        getFieldValue['estimatePrice'] = totalDays * item.price
                        setSubmitBtnDisabled(false)
                    }else{
                        setAlertState({
                            isShow: true,
                            variantType: 'danger',
                            message: `The minimum rent period is ${item.minimum_rent_period} Days`
                        })
                        setTimeout(() => setAlertState({isShow: false}), 1500);
                    }
                    return item
                }
            })
		}else{
			setSubmitBtnDisabled(true)
		}
    }

    let bookModalBody = (
        <Form onSubmit={onsubmit}>
            <Form.Group className="mb-3">
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
            <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-end">
                <Button size="md" type="submit" disabled={submitBtnDisabled}>Submit</Button>
            </ButtonToolbar>
        </Form>
    )

    if (showConfirmDialog) {
        bookModalBody = (
            <Form onSubmit={onConfirmFormSubmit}>
                <p className="text-center">Your total price is {getFieldValue.estimatePrice}</p>
                <p className="text-center">Do you want to complete?</p>
                <ButtonToolbar aria-label="Toolbar with button groups" className="justify-content-end">
                    <Button size="md" type="submit" disabled={submitBtnDisabled}>Confirm</Button>
                </ButtonToolbar>
            </Form>
        )
    }

	return (
        <>
            <ModalComponent 
                isShow={props.bookMoladStatus}
                modalCloseHandler={() => props.onBookBtnClick()}
                modalTitle="Book a product">
                    <AlertMessage variantType={alertState.variantType} alertShowStatus={alertState.isShow}>{alertState.message}</AlertMessage>
                    {bookModalBody}
            </ModalComponent>
        </>
    );
};

export default BookProductModal;
