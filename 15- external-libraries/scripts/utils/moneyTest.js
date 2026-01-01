import {formatCurrency} from './money.js';

if (formatCurrency(13270) === '132.70') {
    console.log('passed');
} else {
    console.log('failed');
}