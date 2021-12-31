/*
Your objective is to add formatting to a plain number to display it as price.

The function should return a string like this:

var price = numberToPrice(13253.5123);
console.log(price); // 13,253.51
Numbers should use the standard comma for every 3 numbers and dot to separate the cents, cents need to be truncated to 2 decimals, in the case that the decimal part of the number is 1 character long or none you should add 0's so that the result will always have 2 decimal characters, the function will also evaluate negative numbers.

function should return a string 'NaN' if the input is not a valid number
*/

// my solution
var numberToPrice = function(number) {
  if(typeof(number)!='number'){ return 'NaN'}
  number=number.toFixed(3)
  let dollars = Array.from(number.toString())
  dollars.splice(dollars.indexOf('.')) 
  let cents = Array.from(number.toString())
  cents=cents.slice(cents.indexOf('.'),cents.indexOf('.')+3).join('')
  dollars = dollars.join('')
  let money = Number(dollars+cents).toFixed(2)
  return Number(money).toLocaleString('en-US',{minimumFractionDigits: 2} )
 }


 // nice solution that is clean
const numberToPrice = (n) => {
  if (Number.isNaN(n) || typeof n !== 'number') return 'NaN'

  return n.toFixed(3)
    .split('.')
    .reduce((acc, n, i) => i === 0 ? Number(n).toLocaleString() : acc + '.' + n.slice(0, 2), '')
}


//what i tried to do
function numberToPrice(number) {
  if (isNaN(number) || number === '') {
    return NaN.toString();
  }
  let sign = (number < 0 ? '-' : '');
  number = Math.abs(number).toFixed(3).slice(0, -1);
  let chars = number.toString().split('');
  for (let i = chars.length - 6; i > 0; i -= 3) {
    chars.splice(i, 0, ',');
  }
  return sign + chars.join('');
}

console.log(numberToPrice(-200000.10),   '=> -200,000.10')
console.log(numberToPrice(1500.129),   '=> 1,500.12')
console.log(numberToPrice(-5),         '=> -5.00')
console.log(numberToPrice(1000000.5),  '=> 1,000,000.50')
console.log(numberToPrice('@'),        'NaN')
