import * as actionTypes from '../actions/actionTypes'

const initialState = {
    loading:    false,
    bookingData:   null,
    error:      null,
    success:    null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.BOOKING_INIT:
            return {
                ...state,
                loading: true
            };

        case actionTypes.BOOKING_SUCCESS:
            return {
                ...state,
                loading: false,
                bookingData: action.bookingData
            };

        case actionTypes.BOOKING_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error,
                bookingData:[]
            };

        default:
            return state;
    }
}

export default reducer