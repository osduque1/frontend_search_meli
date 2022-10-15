import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import product from '../../mocks/products.json';
import Products from './Products';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const defaultProps = {
	storeApp: {
		products: {
			responseData: {},
			isLoading: false,
			isError: false,
			isSuccess: false,
		},
	},
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	const store = mockStore(setupProps);
	return mount(
		<Provider store={store}>
			<MemoryRouter>
				<Products {...setupProps} />
			</MemoryRouter>
		</Provider>,
	);
};

describe('Test for Products', () => {
	test('should render without error', () => {
		const wrapper = setup();
		expect(wrapper.exists()).toBe(true);
	});

	test('should render with products', () => {
		const props = {
			storeApp: {
				products: {
					responseData: product,
				},
			},
		};

		const wrapper = setup(props);
		expect(wrapper.exists()).toBe(true);
	});

	test('should render card Loader, loading true', () => {
		const props = {
			storeApp: {
				products: {
					isLoading: true,
				},
			},
		};

		const wrapper = setup(props);
		const cardLoader = wrapper.find('.Loader__Container').find('h5').contains('¡Cargando!');

		expect(cardLoader).toBe(true);
	});

	test('should render card Error, error true', () => {
		const props = {
			storeApp: {
				products: {
					isError: true,
				},
			},
		};

		const wrapper = setup(props);
		const cardError = wrapper
			.find('.CardInfo__Container')
			.find('h2')
			.contains('¡Se presentó un problema técnico!');

		expect(cardError).toBe(true);
	});

	test('should render card Empty search', () => {
		const props = {
			storeApp: {
				products: {
					responseData: {
						Code: '202',
					},
					isSuccess: true,
				},
			},
		};

		const wrapper = setup(props);
		const cardInfoEmpty = wrapper
			.find('.CardInfo__Container')
			.find('h2')
			.contains('¡No se encontraron coincidencias en su búsqueda!');

		expect(cardInfoEmpty).toBe(true);
	});

	test('should execute event click Card Product', () => {
		const props = {
			storeApp: {
				products: {
					responseData: product,
				},
			},
		};

		const wrapper = setup(props);
		const backBtn = wrapper.find('.Products__ListItems').last();
		backBtn.simulate('click');
		expect(wrapper.exists()).toBe(true);
	});
});
