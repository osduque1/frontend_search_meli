import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import AppProvider from './AppProvider';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const store = mockStore();

const setup = () => {
	return mount(
		<Provider store={store}>
			<AppProvider />
		</Provider>,
	);
};

describe('Test for AppProvider', () => {
	test('should render without error', () => {
		const wrapper = setup();
		expect(wrapper.exists()).toBe(true);
	});
});
