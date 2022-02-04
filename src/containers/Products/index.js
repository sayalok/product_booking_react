import React, {useState} from "react";
import BookProductModal from "../../components/Products/BookProductModal";
import ProductActionButton from "../../components/Products/ProductActionButton";
import ProductsList from "../../components/Products/ProductsList";
import ReturnProductModal from "../../components/Products/ReturnProductModal";

const Products = (props) => {

    const [showBookModal, setBookModalShow] = useState(false);
    const [showReturnModal, setReturnModalShow] = useState(false);

    const handleBookingClick = () => {
        setBookModalShow(!showBookModal)
    }

    const handleReturnClick = () => {
        console.log('here');
        setReturnModalShow(!showReturnModal)
    }

	return (
        <>
            <ProductsList></ProductsList>
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


export default Products;
