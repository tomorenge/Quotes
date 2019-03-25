export class Quote {
  constructor(
    public id:number, public name:string, public author:string,
    public submittedBy:string,public upVote:number,public downVote:number,
    public date:Date ){}

}

// constructor(public id:number, public name:string, public author:string,
//   public submittedBy:string,public upVote:number, public downVote:number
//   ,public date:Date )
