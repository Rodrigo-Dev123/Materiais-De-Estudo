"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStrings = void 0;
function mapStrings(array, callbackfn) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        newArray.push(callbackfn(item));
    }
    return newArray;
}
exports.mapStrings = mapStrings;
const abc = ['a', 'b', 'c'];
const abcMapped = mapStrings(abc, (item) => item.toUpperCase());
console.log(abcMapped);
//# sourceMappingURL=index.js.map