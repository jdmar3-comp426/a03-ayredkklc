/**
 *
 * @param variable
 * @returns {{type: ("undefined"|"object"|"boolean"|"number"|"string"|"function"|"symbol"|"bigint"), value: *}}
 * example: identifyVariable(4);
 * returns: { type: 'number', value: 4 }
 */
export function identifyVariable(variable) {
   let counter = {};
   const arr =["undefined", "object", "boolean", "number", "string", "function", "symbol", "bigint"];
   const arrr = ["type", "value"];
   const s1 = [];
   //const s2 = [];
   if(typeof variable == "undefined"){
      counter[arrr[0]] = arr[0];
      s1[0] = arr[0];
   }else if(typeof variable == "object"){
      counter[arrr[0]] = arr[1];
      s1[0] = arr[1];
   }else if(typeof variable == "boolean"){
      counter[arrr[0]] = arr[2];
      s1[0] = arr[2];
   }else if(typeof variable == "number"){
      counter[arrr[0]] = arr[3];
      s1[0] = arr[3];
   }else if(typeof variable == "string"){
      counter[arrr[0]] = arr[4];
      s1[0] = arr[4];
   }else if(typeof variable == "function"){
      counter[arrr[0]] = arr[5];
      s1[0] = arr[5];
   }else if(typeof variable == "symbol"){
      counter[arrr[0]] = arr[6];
      s1[0] = arr[6];
   }else if(typeof variable == "bigint"){
      counter[arrr[0]] = arr[7];
      s1[0] = arr[7];
   }
   counter[arrr[1]] = variable;
   s1[1] = variable;
   return {
      type: s1[0],
      value: s1[1]

  }
   
}


/**
 *
 * @param array
 * @returns {[]}
 * example: identifyArray(['some', 3, [3, 4], false]);
 * returns: [
 { type: 'string', value: 'some' },
 { type: 'number', value: 3 },
 { type: 'object', value: [ 3, 4 ] },
 { type: 'boolean', value: false }
 ]

 */
 export function identifyArray(array) {
   const res = [];
   for (let i = 0; i < array.length; i++) {
      res.push(identifyVariable(array[i]));
   }
   return res;
}

/**
 * mutates the object that is passed in.
 * @param object
 * @param key
 * @returns {*} does not have to return anything
 *
 * example:
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 removeKey(obj, 'password');
 obj now does not contain the `password` field
 */
export function removeKey(object, key) {
   for(var k in object){
      if(k == key){
         delete object[k];
      }
   }
   return object;
   
}

/**
 * Does not mutate the object passed in
 * @param object
 * @param key
 * @returns {*} The object with its keys removed
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 * let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
};
 obj = removeKeyNonDestructive(obj, 'password');
 obj will not have the `password` field only because it was assigned the result of the function.
 If only `removeKeyNonDestructive` was called, nothing would have changed.
 */
 export function removeKeyNonDestructive(object, key) {
   var newObj = {};
   for (const [key1, value1] of Object.entries(object)){
      if (!(key1 === key)) {
         newObj[key1] = value1;
      }
   } 
   return newObj;
}
/**
 * Remove and return the listed keys. Without mutating the object passed in.
 * @param object
 * @param {string[]} keyList
 * see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
 *
 * example:


 let obj = {
    name: 'Mr. Boss',
    title: 'boss',
    age: 33,
    password: 'pass123'
 };
 obj = removeKeys(obj, ['password', 'age']);
 // object not looks like this
 { name: 'Mr. Boss', title: 'boss' }

 * @return {*} The object with its keys removed.
 */
 export function removeKeys(object, keyList) {
   var newObj = {};
   for (const [key1, value1] of Object.entries(object)){
      if (!(keyList.includes(key1))) {
         newObj[key1] = value1;
      }
   } 
   return newObj;
}
