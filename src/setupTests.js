import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();
configure({ adapter: new Adapter() });
