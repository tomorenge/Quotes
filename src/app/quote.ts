export class Quote {
public  showDescription: boolean;
  constructor(
    public id:number, public name:string, public author:string,
    public submittedBy:string,public upVote:number,public downVote:number,
    public date:Date ){
      this.showDescription=false
    }

}

// constructor(public id:number, public name:string, public author:string,
//   public submittedBy:string,public upVote:number, public downVote:number
//   ,public date:Date )
