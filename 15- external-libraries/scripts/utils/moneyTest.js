import {formatCurrency} from './money.js';

console.log('test suite: formatCurrency');

console.log('It converts cents into dollars');

if (formatCurrency(13270) === '132.70') {
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

console.log('It rounds up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('It converts cents to dollars and rounds down');

if (formatCurrency(2000.4) === '20.00') {
  console.log('passed');
} else {
  console.log('failed');
}

console.log('\n' + 'test suite: calculateTax');