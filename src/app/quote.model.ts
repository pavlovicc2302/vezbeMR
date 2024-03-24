export class Quote{
    // prvi nacin: 
    // text:string;
    // author: string;

    // constructor(text:string, author:string){
    //     this.text = text;
    //     this.author = author;
    // }

    // drugi nacin:
    constructor(public id:string, public text:string, public author:string){
        
    }
}