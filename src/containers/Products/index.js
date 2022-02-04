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
        console.log('here');
        setReturnModalShow(!showReturnModal)
    }

    let productListBlock = <Loader/>;
    if (props.productData) {
        productListBlock = <ProductsList productListData={props.productData}/>
    }

	return (
        <>
            {productListBlock}
            
            <ProductActionButton
                onBookBtnClick={() => handleBookingClick()}
                onReturnBtnClick={() => handleReturnClick()}
            >
            </ProductActionButton>


            <BookProductModal
                bookMoladStatus={showBookModal}
                onBookBtnClick={() => handleBookingClick()}
            ></BookProductModal>

            <ReturnProductModal
                returnMoladStatus={showReturnModal}
                onReturnBtnClick={() => handleReturnClick()}
            ></ReturnProductModal>
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
    };
};


export default connect(mapStateToProps, mapDispatchToProp)(Products);
