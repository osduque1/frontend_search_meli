import storeAppReducer from './storeApp.reducer';
import {
	GET_PRODUCTS_STARTED,
	GET_PRODUCTS_SUCCESS,
	GET_PRODUCTS_FAILURE,
	GET_PRODUCTS_DETAIL_STARTED,
	GET_PRODUCTS_DETAIL_SUCCESS,
	GET_PRODUCTS_DETAIL_FAILURE,
} from '../../constants/storeApp/storeApp.constant.js';
import product from '../../mocks/products.json';
import detailProduct from '../../mocks/detailProduct.json';

const initialState = {
	products: {
		responseData: {},
		isLoading: false,
		isError: false,
		isSuccess: false,
	},
	productDetail: {
		responseData: {},
		isLoading: false,
		isError: false,
		isSuccess: false,
	},
};
describe('Test reducer storeAppReducer', () => {
	test('reducer state initial', () => {
		const expectedState = {
			...initialState,
		};
		expect(storeAppReducer(expectedState, undefined)).toEqual(expectedState);
	});

	test('reducer GET_PRODUCTS_STARTED get products', () => {
		const action = {
			type: GET_PRODUCTS_STARTED,
		};
		const expectedState = {
			products: {
				...initialState.products,
				isLoading: true,
			},
			productDetail: {
				isError: false,
			},
		};
		expect(storeAppReducer(undefined, action)).toEqual(expectedState);
	});

	test('reducer GET_PRODUCTS_SUCCESS get products', () => {
		const action = {
			type: GET_PRODUCTS_SUCCESS,
			payload: product,
		};
		const expectedState = {
			...initialState,
			products: {
				...initialState.products,
				responseData: product,
				isSuccess: true,
			},
		};
		expect(storeAppReducer(undefined, action)).toEqual(expectedState);
	});

	test('reducer GET_PRODUCTS_FAILURE get products', () => {
		const action = {
			type: GET_PRODUCTS_FAILURE,
			payload: {},
		};
		const expectedState = {
			...initialState,
			products: {
				...initialState.products,
				isError: true,
			},
		};
		expect(storeAppReducer(undefined, action)).toEqual(expectedState);
	});

	test('reducer GET_PRODUCTS_DETAIL_STARTED get detail products', () => {
		const action = {
			type: GET_PRODUCTS_DETAIL_STARTED,
		};
		const expectedState = {
			...initialState,
			productDetail: {
				...initialState.productDetail,
				isLoading: true,
			},
		};
		expect(storeAppReducer(undefined, action)).toEqual(expectedState);
	});

	test('reducer GET_PRODUCTS_DETAIL_SUCCESS get detail products', () => {
		const action = {
			type: GET_PRODUCTS_DETAIL_SUCCESS,
			payload: detailProduct,
		};
		const expectedState = {
			...initialState,
			productDetail: {
				...initialState.productDetail,
				responseData: detailProduct,
				isSuccess: true,
			},
		};
		expect(storeAppReducer(undefined, action)).toEqual(expectedState);
	});

	test('reducer GET_PRODUCTS_DETAIL_FAILURE get detail products', () => {
		const action = {
			type: GET_PRODUCTS_DETAIL_FAILURE,
			payload: {},
		};
		const expectedState = {
			...initialState,
			productDetail: {
				...initialState.productDetail,
				isError: true,
			},
		};
		expect(storeAppReducer(undefined, action)).toEqual(expectedState);
	});
});
