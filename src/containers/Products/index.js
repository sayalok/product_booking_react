import React from "react";
import ProductActionButton from "../../components/Products/ProductActionButton";
import ProductsList from "../../components/Products/ProductsList";

const Products = (props) => {
	return (
        <>
            <ProductsList></ProductsList>
            <ProductActionButton></ProductActionButton>
        </>
    );
};


export default Products;
