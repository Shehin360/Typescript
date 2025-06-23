"use strict";
class takephoto {
    constructor(cameramode, filter) {
        this.cameramode = cameramode;
        this.filter = filter;
    }
    getReelTime() {
        return 5;
    }
}
class instagram extends takephoto {
    constructor(cameramode, filter, burst) {
        super(cameramode, filter);
        this.cameramode = cameramode;
        this.filter = filter;
        this.burst = burst;
    }
    getSepia() {
        console.log("Applying sepia filter"); // Implementing the abstract method
    }
}
// let h = new instagram("test","test")
