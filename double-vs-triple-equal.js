// The difference between double equal vs triple equal 
// example:
/**
 * 
const num1 = 45
const num2 = '45'
// double equal checks is values are equal 
if (num1 == num2) {
    console.log('both are equal');
}
// triple equal checks is values and types are equal 
if (num1 === num2) {
    console.log('both are equal');
}

else(
    console.log('both are not equal')
)

 */
//another example:
const num1 = 1
const num2 = true
if (num1 == num2) {
    console.log('both are equal');
}
if (num1 === num2) {
    console.log('both are equal');
}
else(
    console.log('both are not equal')
)