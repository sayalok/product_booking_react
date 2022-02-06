import BaseController from "./../BaseController";
import { endpoint } from "./../EndPoint";

export default class ReturnController extends BaseController {
	constructor() {}

	static getReturns() {
		return BaseController.axiosGet(endpoint.ALL_RETURN);
	}
}
