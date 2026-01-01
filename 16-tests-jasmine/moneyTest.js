import {formatCurrency} from '../15- external-libraries/scripts/utils/money.js';

describe('test suite: formatCurrency', () => {
    it('It converts a cent into dollars', () => {
        expect(formatCurrency(2095)).toEqual('20.95');
    });

    it('It works with 0', () => {
        expect(formatCurrency(0)).toEqual('0.00');
    });

    it('It rounds up to the nearest cent', () => {
        expect(formatCurrency(2000.5)).toEqual('20.01');
    });

    it('It converts cents into dollars and rounds down', () => {
        expect(formatCurrency(2000.4)).toEqual('20.00');
    });
});