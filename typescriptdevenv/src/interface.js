"use strict";
var Instagram = /** @class */ (function () {
    function Instagram(cameramode, filter, burst) {
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    return Instagram;
}());
var youtube = /** @class */ (function () {
    function youtube() {
    }
    youtube.prototype.createstory = function () {
        console.log("story was created");
    };
    return youtube;
}());
