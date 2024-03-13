const numbers = [3,4,5,6,7,8,9]
// const square = []
// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     square.push(element)
// }
// console.log(square);


// const result = numbers.map(function square(element,index) {
//     return element*element 
// })
// console.log();

const result = numbers.map( x => x*x)

const result1 = numbers.filter(x => x>4)

const result2 = numbers.find(x => x>4)

console.log(result);
console.log(result1);
console.log(result2);