import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading:    false,
    productData:   null,
    error:      null,
    success:    null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PRODUCT_INIT:
            return {
                ...state,
                loading: true
            };

        case actionTypes.PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                productData: action.productData
            };

        case actionTypes.PRODUCT_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            };

        default:
            return state;
    }
}

export default reducer