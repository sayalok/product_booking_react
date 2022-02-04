import React from "react";
import ModalComponent from "../UI/ModalComponent";

const BookProductModal = (props) => {
	return (
        <>
            <ModalComponent 
                isShow={props.bookMoladStatus}
                modalCloseHandler={() => props.onBookBtnClick()}
                modalTitle="Book a product">
                    <h2>Book</h2>
            </ModalComponent>
        </>
    );
};

export default BookProductModal;
