interface takephoto{
    cameramode: string
    filter:string
    burst:number
}

class Instagram implements takephoto{
    constructor(
        public cameramode: string,
        public filter: string,
        public burst:number
    ){

    }
}

interface story{
    createstory():void
}

class youtube implements story{
    constructor(){
        
    }
    createstory():void{
            console.log("story was created");
        }
}