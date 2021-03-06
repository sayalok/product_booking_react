import * as actionTypes from "./actionTypes";
import ReturnController from "../../api/Return/ReturnController";


export const returnInit = () => {
	return {
		type: actionTypes.RETURN_INIT,
	};
};

export const returnSuccess = (returnData,msg) => {
	return {
		type: actionTypes.RETURN_SUCCESS,
		successMsg: msg,
		returnData: returnData,
	};
};

export const returnFail = (error) => {
	return {
		type: actionTypes.RETURN_FAIL,
		error: error,
	};
};

export const getReturns = () => {
	return dispatch => {
		dispatch(returnInit());
		ReturnController.getReturns()
			.then((result) => {
				if (result.status === 200) {
					dispatch(returnSuccess(result.data.data,'success'));
				} else {
					dispatch(returnFail('Something went wrong!'));
				}
			})
			.catch((error) => {
				dispatch(returnFail(error));
			});
	}
};

export const insertReturn = (data) => {
	return (dispatch) => {
		dispatch(returnInit());

		ReturnController.insertReturnData(data)
			.then((result) => {
				if (result.data.status == 'Success') {
					dispatch(returnSuccess([],'success'));
				}else{
					dispatch(returnFail('failed'));
				}
			})
			.catch((error) => {
				dispatch(returnFail(error));
			});
	};
};



