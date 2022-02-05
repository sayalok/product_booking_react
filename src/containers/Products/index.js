import React, {useEffect, useState} from "react";

import { connect } from "react-redux";
import * as actions from "./../../store/actions/";

import Loader from './../../components/Loader'

import BookProductModal from "../../components/Products/BookProductModal";
import ProductActionButton from "../../components/Products/ProductActionButton";
import ProductsList from "../../components/Products/ProductsList";
import ReturnProductModal from "../../components/Products/ReturnProductModal";

const Products = (props) => {

    useEffect(() => {
        props.getProducts();
      }, []);

    const [showBookModal, setBookModalShow] = useState(false);
    const [showReturnModal, setReturnModalShow] = useState(false);

    const handleBookingClick = () => {
        setBookModalShow(!showBookModal)
    }

    const handleReturnClick = () => {
        setReturnModalShow(!showReturnModal)
    }

    const handleSubmitBookingData = (data) => {
        console.log(data);
        props.insertBooking(data)
    }

    const handleSubmitRentalData = (data) => {
        console.log(data);
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
                ></BookProductModal>

                <ReturnProductModal
                    productListData={props.productData}
                    returnMoladStatus={showReturnModal}
                    onReturnBtnClick={() => handleReturnClick()}
                    onRentalDataSubmit={(data) => handleSubmitRentalData(data)}
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
    };
};
  
const mapDispatchToProp = (dispatch) => {
    return {
        getProducts: () => dispatch(actions.getProducts()),
        insertBooking: (data) => dispatch(actions.insertBooking(data))
    };
};


export default connect(mapStateToProps, mapDispatchToProp)(Products);
