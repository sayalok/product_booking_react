import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading:    false,
    returnData:   null,
    error:      null,
    success:    null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.RETURN_INIT:
            return {
                ...state,
                loading: true
            };

        case actionTypes.RETURN_SUCCESS:
            return {
                ...state,
                loading: false,
                returnData: action.returnData,
                success: action.successMsg
            };

        case actionTypes.RETURN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                returnData:[]
            };

        default:
            return state;
    }
}

export default reducer