"use strict";
var score = 33;
score = 44;
score = "55";
score = true;
function getDbId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id.toExponential();
    }
}
var res = getDbId(3);
// let res2 = getDbId("six")
console.log("number", res);
// console.log("string",res2)
// arrrayyy
// const data : number[] = [1,2,3,"4"] //error ocuured
var data = [1, 2, 3, "4"];
