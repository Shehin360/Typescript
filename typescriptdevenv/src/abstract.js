"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var takephoto = /** @class */ (function () {
    function takephoto(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    takephoto.prototype.getReelTime = function () {
        return 5;
    };
    return takephoto;
}());
var instagram = /** @class */ (function (_super) {
    __extends(instagram, _super);
    function instagram(cameramode, filter, burst) {
        var _this = _super.call(this, cameramode, filter) || this;
        _this.cameramode = cameramode;
        _this.filter = filter;
        _this.burst = burst;
        return _this;
    }
    instagram.prototype.getSepia = function () {
        console.log("Applying sepia filter"); // Implementing the abstract method
    };
    return instagram;
}(takephoto));
// let h = new instagram("test","test")
