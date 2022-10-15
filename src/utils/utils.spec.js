import { formatValueToCurrency } from './utils';

describe('Test Utils methods', () => {
	test('should convert whith decimals', () => {
		const valueNum = 474049.06;
		expect(formatValueToCurrency(valueNum)).toBe('$\xa0474.049');
	});

	test('should convert whithout decimals', () => {
		const valueNum = 474049;
		expect(formatValueToCurrency(valueNum)).toBe('$\xa0474.049');
	});
});
