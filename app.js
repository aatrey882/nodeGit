const _= require('lodash');

const arr=[1,[2,[3]]];
const newAr=_.flattenDeep(arr);

console.log(newAr);