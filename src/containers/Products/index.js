import React, {useEffect, useState} from "react";

import { connect } from "react-redux";
import * as actions from "./../../store/actions/";

import Loader from './../../components/Loader'

import BookProductModal from "../../components/Products/BookProductModal";
import ProductActionButton from "../../components/Products/ProductActionButton";
import ProductsList from "../../components/Products/ProductsList";
import ReturnProductModal from "../../components/Products/ReturnProductModal";

const Products = (props) => {

    const [showBookModal, setBookModalShow] = useState(false);
    const [showReturnModal, setReturnModalShow] = useState(false);

    const [bookingPostStatus, setBookingPostStatus] = useState(null)
    const [returnPostStatus, setReturnPostStatus] = useState(null)

    useEffect(() => {
        props.getProducts();
    }, []);

    useEffect(() => {
        if (props.bookingSucess != null) {
            setBookingPostStatus(true)
        }

        if (props.bookingError != null) {
            setBookingPostStatus(false)
        }
        
    }, [props.bookingSucess,props.bookingError]);

    useEffect(() => {
        if (props.returnSucess != null) {
            setReturnPostStatus(true)
        }

        if (props.returnError != null) {
            setReturnPostStatus(false)
        }
        
    }, [props.returnSucess,props.returnError]);

    const handleBookingClick = () => {
        setBookModalShow(!showBookModal)
    }

    const handleReturnClick = () => {
        setReturnModalShow(!showReturnModal)
    }

    const handleSubmitBookingData = (data) => {
        props.insertBooking(data)
    }

    const handleSubmitRentalData = (data) => {
        console.log(data);
        props.insertReturn(data)
    }

    let productBlock = <Loader/>;
    let productActionBtnBlock;

    if (props.productData) {
        if (props.productData.length > 0 ) {
            productActionBtnBlock = (
                <ProductActionButton
                    onBookBtnClick={() => handleBookingClick()}
                    onReturnBtnClick={() => handleReturnClick()}
                >
                </ProductActionButton>
            )
        }
        productBlock = (
            <>
                <ProductsList productListData={props.productData}/>
                {productActionBtnBlock}
                <BookProductModal
                    productListData={props.productData}
                    bookMoladStatus={showBookModal}
                    onBookBtnClick={() => handleBookingClick()}
                    onBookDataSubmit={(data) => handleSubmitBookingData(data)}
                    postBookingStatus={bookingPostStatus}
                ></BookProductModal>

                <ReturnProductModal
                    productListData={props.productData}
                    returnMoladStatus={showReturnModal}
                    onReturnBtnClick={() => handleReturnClick()}
                    onRentalDataSubmit={(data) => handleSubmitRentalData(data)}
                    postReturnStatus={returnPostStatus}
                ></ReturnProductModal>    
        
            </>
        )
    }

	return (
        <>
            {productBlock}
        </>
    );
};



const mapStateToProps = (state) => {
    return {
        productData: state.productReducers.productData,
        bookingSucess: state.bookingReducers.success,
        bookingError: state.bookingReducers.error,
        returnSucess: state.returnReducers.success,
        returnError: state.returnReducers.error,
    };
};
  
const mapDispatchToProp = (dispatch) => {
    return {
        getProducts: () => dispatch(actions.getProducts()),
        insertBooking: (data) => dispatch(actions.insertBooking(data)),
        insertReturn: (data) => dispatch(actions.insertReturn(data))
    };
};


export default connect(mapStateToProps, mapDispatchToProp)(Products);
