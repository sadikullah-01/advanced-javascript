// situations while you can get undefined

// if varriable is not decrealed . example:

/**
 * 
 * 
 let janu;

 console.log(janu);

 */
// if nothing is returned from a function. example:

/**
 * 
function add(num1 , num2) {
    console.log(num1 + num2);
    return // here nothing is decleared what will returned
}

const result = add(13, 32);
console.log(result);

 */

// if parameter is not decleared of a function. example:
/**
 * 
function add(num1 , num2) {
    console.log(num1 , num2);
}

const result = add(13);
console.log(result);

 */

// IF searching for a propertey that is not decleared in object then the output will be undefined . example: 

/**
 * 
const customer = {name:'chandu', phone:420420}
console.log('address: ',customer.address);

 */
