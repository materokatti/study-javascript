/* Run this code in the Browser */

const obj = {};
const parent = { x: 1 };

obj.__proto__; // getter

obj.__proto__ = parent; // setter

console.log(obj.x); // 1
