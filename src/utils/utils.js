export const formatValueToCurrency = value => {
	const truncvalue = new Intl.NumberFormat('es-CO', {
		style: 'currency',
		currency: 'COP',
	}).format(value);

	return truncvalue?.split(',')[0];
};
