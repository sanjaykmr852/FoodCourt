

export class receipe{

    imgPath:String;
    header:String;
    description:String;
    
    constructor(imgPath:String,header:String,description:String,
        public receipeAmount:String,amount:number){
        this.imgPath=imgPath;
        this.header=header;
        this.description=description;
    }
}