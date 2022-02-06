import BaseController from "./../BaseController";
import { endpoint } from "./../EndPoint";

export default class ReturnController extends BaseController {
	constructor() {}

	static getReturns() {
		return BaseController.axiosGet(endpoint.ALL_RETURN);
	}

	static insertReturnData(data) {
		let formData = {
            "from_date": data.product_book_from_date,
            "to_date": data.product_book_to_date,
            "total": data.estimatePrice,
            "product_id": data.product_name,
            "milage": data.milage,
        };

		let headers = {};
		return BaseController.axiosPost(endpoint.ALL_RETURN, formData, headers);
	}
}
