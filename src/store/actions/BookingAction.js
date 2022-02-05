import * as actionTypes from "./actionTypes";
import BookingController from "../../api/Booking/BookingController";


export const bookingInit = () => {
	return {
		type: actionTypes.BOOKING_INIT,
	};
};

export const bookingSuccess = (bookingData) => {
	return {
		type: actionTypes.BOOKING_SUCCESS,
		bookingData: bookingData,
	};
};

export const bookingFail = (error) => {
	return {
		type: actionTypes.BOOKING_FAIL,
		error: error,
	};
};

export const getBookings = () => {
	return dispatch => {
		dispatch(bookingInit());
		BookingController.getBookings()
			.then((result) => {
				if (result.status === 200) {
					dispatch(bookingSuccess(result.data.data));
				} else {
					dispatch(bookingFail('Something went wrong!'));
				}
			})
			.catch((error) => {
				dispatch(bookingFail(error));
			});
	}
};

export const insertBooking = (data) => {
	return (dispatch) => {
		dispatch(bookingInit());

		BookingController.insertBookingData(data)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				console.log(error);
			});
	};
};



