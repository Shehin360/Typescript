"use strict";
var Cube = /** @class */ (function () {
    function Cube() {
    }
    return Cube;
}());
var cube1 = new Cube();
var cube2 = new Cube();
cube1.height = 1;
cube1.length = 2;
cube1.width = 1;
cube2 = cube1;
console.log(cube2.height);
