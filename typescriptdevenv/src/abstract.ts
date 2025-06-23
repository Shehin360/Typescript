abstract class takephoto{
    constructor(
        public cameramode:string,
        public filter:string
    ){

    }
    abstract getSepia():void
    getReelTime():number{
    return 5
    }
}



class instagram extends takephoto{
    constructor(
        public cameramode:string,
        public filter:string,
        public burst:number

    ){
        super(cameramode,filter)
    }

    getSepia(): void {
        console.log("Applying sepia filter"); // Implementing the abstract method
    }
}
// let h = new instagram("test","test")

