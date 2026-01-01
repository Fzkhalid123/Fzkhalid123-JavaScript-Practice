import {formatCurrency} from "./scripts/money.js";

console.log('test suite: formatCurrency');

console.log('It converts cents to dollars');

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

console.log('It round up to the nearest cent');

if (formatCurrency(2000.5) === '20.01') {
    console.log('passed');
} else {
    console.log('failed');
}

console.log('It converts cents to dollars and round down');

if (formatCurrency(2000.4) === '20.00') {
    console.log('passed');
} else {
    console.log('failed');
}


console.log('\n' + 'test suite: calculateTax');


