export class Posts {
    public name: string;
    public location: string;
    public textOfPost: string;
    public cafeUsed: string;

    constructor(name:string , location:string , textOfPost: string , cafeUsed: string){
        this.name = name;
        this.location = location;
        this.textOfPost = textOfPost;
        this.cafeUsed = cafeUsed;
    }
}