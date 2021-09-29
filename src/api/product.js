import axios from "axios";
import { baseURL } from "../constants";

export const AllProducts = (page, size, type) => {
	let params = { PageNumber: page,  PageSize: size, productType: type};
	axios
		.get(`${baseURL}/product`, params)
		.then((res) => {
			console.log(res);
		})
		.catch((err) => {
			console.error(err);
		});
};
