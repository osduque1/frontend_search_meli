import { mount } from 'enzyme';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './NotFound';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore();
const setup = (props = {}) => {
	const setupProps = { ...props };
	return mount(
		<Provider store={store}>
			<MemoryRouter>
				<NotFound {...setupProps} />
			</MemoryRouter>
		</Provider>,
	);
};

describe('Test for NotFound', () => {
	test('should render without error', () => {
		const wrapper = setup();
		expect(wrapper.exists()).toBe(true);
	});

	test('should execute go to Home button', () => {
		const wrapper = setup();
		const goToHome = wrapper.find('.NotFound__Home');
		goToHome.simulate('click');
		expect(wrapper.exists()).toBe(true);
	});
});
