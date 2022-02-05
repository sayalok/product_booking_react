import BaseController from "../BaseController";
import { endpoint } from "../EndPoint";

export default class BookingController extends BaseController {
	constructor() {}

	static getBookings() {
		return BaseController.axiosGet(endpoint.ALL_Booking);
	}
}
