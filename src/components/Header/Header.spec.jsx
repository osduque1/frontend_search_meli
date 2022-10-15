import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import Header from './Header';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const setup = (props = {}) => {
	const setupProps = { ...props };
	const store = mockStore(setupProps);
	return mount(
		<Provider store={store}>
			<MemoryRouter>
				<Header {...setupProps} />
			</MemoryRouter>
		</Provider>,
	);
};

describe('Test for Header', () => {
	test('should render without error', () => {
		const wrapper = setup();
		expect(wrapper.exists()).toBe(true);
	});

	test('should render Image', () => {
		window.open = jest.fn();
		const wrapper = setup();
		const imageMeli = wrapper.find('img');
		imageMeli.simulate('click');
		expect(window.open).toBeCalled();
	});

	test('should change words input', () => {
		const wrapper = setup();
		const inputText = wrapper.find('input');
		inputText.simulate('change', { target: { value: 'Test' } });
		inputText.prop('onKeyPress')({ e: { type: 'keypress' } });
		expect(inputText.exists()).toBe(true);
	});

	test('should change words input null', () => {
		const wrapper = setup();
		const inputText = wrapper.find('input');
		inputText.simulate('keypress', { key: 'Enter' });
		const loader = wrapper.find('.Loader__Container');
		expect(loader.exists()).toBe(false);
	});

	test('should execute click Button search', () => {
		const wrapper = setup();
		const inputText = wrapper.find('input');
		inputText.simulate('change', { target: { value: 'Test' } });
		const btnSearch = wrapper.find('.Header__Search').last();
		btnSearch.simulate('click');
		expect(btnSearch.exists()).toBe(true);
	});
});
