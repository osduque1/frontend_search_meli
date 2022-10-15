const { REACT_APP_ENVIROMENT_URL_MELI, REACT_APP_ENVIROMENT_API_ENDPOINT } = process.env;

const environmentConfig = () => {
	return {
		urlMeli: REACT_APP_ENVIROMENT_URL_MELI,
		apiEndPoint: REACT_APP_ENVIROMENT_API_ENDPOINT,
	};
};

const config = environmentConfig();

export default config;
