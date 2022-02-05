import BaseController from "./../BaseController";
import { endpoint } from "./../EndPoint";

export default class ProductController extends BaseController {
	constructor() {}

	static getProducts() {
		return BaseController.axiosGet(endpoint.ALL_PRODUCT);
	}
}
