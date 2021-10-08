/**
 *
 * @param {number} a
 * @param {number} b
 * @returns {string} 'a + b = (a + b)'
 *
 * example: sumToString(3, 4)
 * returns: '3 + 4 = 7'
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
 */
export function sumToString(a, b) {
    var sum = a + b;
    var string = a + " + " + b + " = " + sum;
    return string;

    //instructors way of doing it
    //return '${a} + ${b} = ${a + b}'
}
//sumToString(4, 5);


/**
 *
 * @param {number} startNumber
 * @param {number} endNumber
 * @returns {number[]}
 *
 * example: getIncreasingArray(3, 7)
 * returns: [ 3, 4, 5, 6, 7 ]
 *
 */
export function getIncreasingArray(startNumber, endNumber) {
    const number =[];
    for(let i = 0; i < endNumber - startNumber + 1; i++){
        number[i] = startNumber + i;
    }
    return number;
}

/**
 *
 * @param {number[]} numbers
 * @return {{min: number, max: number}}
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 * and https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
 */
export function maxAndMin(numbers) {
/*numbers.sort();
    var a = numbers[0];
    var b = numbers[numbers.length-1];
    var string = "min: " + a + ", max:" + b;
    return string;*/
    return {
        max: Math.max(...numbers),
        min: Math.min(...numbers)

    }
}

/**
 *
 * @param array - An array of any primitive type
 * @returns {object} Object where the keys are the values that were passed in
 * and the value was the number of times it occurred.
 *
 * example: countArray([3, 6, 3, 2, 2, 3, 'some', 'hello', 'some', [1, 2]])
 * returns: {'2': 2, '3': 3, '6': 1, some: 2, hello: 1, '1,2': 1}
 *
 */
export function countArray(array) {
    /*const count =[];
    const item =[];
    var ret = "";
    for(let i = 0; i < array.length; i++){
        
    }
   
    return 2;*/
    let counter = {};
    array.forEach(item => {
        if(counter[item]){
            counter[item]++;
        }else{
            counter[item] = 1;
        }
    });
    return counter;
    ///hi
}
//countArray([1, 2]);


/*console.log('App started')
export function countArray(array) {
    const count =[];
    const item =[];
    var ret = "";
    for(let i = 0; i < array.length; i++){
        var a = item[i];
        var b = count[i];
        var string = "'" + a + "':" + b + ",";
        ret += string;
    }
   
    return item[0];
}
const a =[1, 2, 3];
console.log(countArray(a));*/