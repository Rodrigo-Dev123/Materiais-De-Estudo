"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareOf = exports.createPerson = void 0;
let x;
if (typeof x === 'undefined')
    x = 20;
console.log(x * 2);
function createPerson(firtsName, LastName) {
    return {
        firtsName,
        LastName,
    };
}
exports.createPerson = createPerson;
function squareOf(x) {
    if (typeof x === 'number')
        return x * x;
    return null;
}
exports.squareOf = squareOf;
const squareOfTwoNumber = squareOf(2);
const squareOfTwoString = squareOf('2');
if (typeof squareOfTwoNumber === 'number')
    console.log('');
if (typeof squareOfTwoString === 'string')
    console.log('');
//# sourceMappingURL=index.js.map