import BaseController from "../BaseController";
import { endpoint } from "../EndPoint";

export default class BookingController extends BaseController {
	constructor() {}

	static getBookings() {
		return BaseController.axiosGet(endpoint.ALL_Booking);
	}

	static insertBookingData(data) {
		let formData = {
            "from_date": data.product_book_from_date,
            "to_date": data.product_book_to_date,
            "total": data.estimatePrice,
            "product_id": data.product_name
        };

		let headers = {};
		return BaseController.axiosPost(endpoint.ALL_Booking, formData, headers);
	}
}
