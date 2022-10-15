import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { BreakpointProvider } from 'react-socks';
import App from '../../routes/App';
import Store from '../../Store';

const AppProvider = () => {
	return (
		<Provider store={Store}>
			<BreakpointProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</BreakpointProvider>
		</Provider>
	);
};

export default AppProvider;
