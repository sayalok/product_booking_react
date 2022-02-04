import * as actionTypes from "./actionTypes";
import ProductController from "../../api/Product/ProductController";


export const productInit = () => {
	return {
		type: actionTypes.PRODUCT_INIT,
	};
};

export const productSuccess = (productData) => {
	return {
		type: actionTypes.PRODUCT_SUCCESS,
		productData: productData,
	};
};

export const productFail = (error) => {
	return {
		type: actionTypes.PRODUCT_FAIL,
		error: error,
	};
};

export const getProducts = () => {
	return dispatch => {
		ProductController.getProducts()
			.then((result) => {
				if (result.status === 200) {
					dispatch(productSuccess(result.data.data));
				} else {
					dispatch(productFail('Something went wrong!'));
				}
			})
			.catch((error) => {
				dispatch(productFail(error));
			});
	}
};



