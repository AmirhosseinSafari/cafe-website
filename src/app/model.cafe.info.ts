export class CafeInfo {
    public name: string;
    public location: string;
    public imgOfCafe: string;
    public extraInformation: string;

    constructor(name:string , location:string , imgOfCafe: string , extraInformation: string){
        this.name = name;
        this.location = location;
        this.imgOfCafe = imgOfCafe;
        this.extraInformation = extraInformation;
    }
}