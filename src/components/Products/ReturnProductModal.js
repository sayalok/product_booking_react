import React from "react";
import ModalComponent from "../UI/ModalComponent";

const ReturnProductModal = (props) => {
	return (
        <>
            <ModalComponent 
                isShow={props.returnMoladStatus}
                modalCloseHandler={() => props.onReturnBtnClick()}
                modalTitle="Return a product">
                    <h2>Return</h2>
            </ModalComponent>
        </>
    );
};

export default ReturnProductModal;
