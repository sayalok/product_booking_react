import axios from "axios";

export default class BaseController {
	static baseUrl = process.env.REACT_APP_API_BASE_URL;

	constructor() {}

	static axiosGet(path) {
		return axios.get(this.baseUrl + path);
	}
}
