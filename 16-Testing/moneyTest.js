import {formatCurrency} from './scripts/money.js';

console.log('Test suite: formatCurrency');

console.log('It converts cents into dollars')

if (formatCurrency(2095) === '20.95') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('It works with 0');

if (formatCurrency(0) === '0.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('It rounds up to the nearest cent')

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('It converts cents into dollars and rounds down')

if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('\n' + 'Test suite: calculateTax');