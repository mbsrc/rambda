"use strict";
exports.__esModule = true;
var rambda_1 = require("rambda");
var rambdax_1 = require("rambdax");
var sortByPropsResult = rambdax_1.sortByProps(['a.b', 'a.c'], [
    { a: { b: 2, c: 4 } },
    { a: { b: 2, c: 3 } },
]);
var moveResult = rambda_1.move(1, 2, [1, 2, 3]);
var unionResult = rambda_1.union([1, 2, 4], [1, 2, 3]);
var applySpecResult = rambda_1.applySpec({
    a: rambda_1.add(1)
})(1);
var transposeResult = rambda_1.transpose([[1, 2], [], [1, 2, 3], [3]]);
console.log({ applySpecResult: applySpecResult, sortByPropsResult: sortByPropsResult[0], transposeResult: transposeResult, moveResult: moveResult, unionResult: unionResult });
var bs = rambda_1.and(1)(2);
var a = rambda_1.reject(function (a) { return a > 1; }, [1, 2, 3]);
function fn(input) {
    return input.c ? input.a : input.b;
}
var foo = {
    bar: ['1', '2', '3']
};
// const curried = partialCurry<Input, PartialInput, string|number>(fn, {a:1, b:'foo'});  
// curried // $ExpectType (input: Pick<Input, "c">) => string | number
// const result = curried({c:false}) 
// result// $ExpectType string | number
// const partialInput = {a:1}
// type B = Exclude<keyof Input, keyof PartialInput>
