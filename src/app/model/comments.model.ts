export class CommentsModel
{
    NickName: string;
    Name: string;
    Email: string;
    CommentID?: string;
    Comments: string;
    httpurl?: string;
    ID: string;
    Date: string;
    CommentCount?: number;

    constructor(nickname:string, name:string, email:string, comments:string, id:string, date:string){
        this.NickName = nickname;
        this.Name = name;
        this.Email = email;
        this.Comments = comments;
        this.ID = id;
        this.Date = date;
        this.CommentID = "BaseComment",
        this.CommentCount = 0;
    }
}

