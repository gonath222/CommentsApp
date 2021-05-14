import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommentsModel } from '../model/comments.model';
import { LoginService } from '../service/login.service';
import * as CommentsAction from '../comments.store/comments.action';

@Component({
  selector: 'app-viewcomments',
  templateUrl: './viewcomments.component.html',
  styleUrls: ['./viewcomments.component.css']
})
export class ViewcommentsComponent implements OnInit {


  isShowComments: boolean[] = [];
  isReply: boolean[] = [];
  comments: CommentsModel[]=[];
  submitted = false;
  UserModel: any;
  commentsModel: CommentsModel;
  isPosted = false;
  replycomments = "";
  isError = false;
  replies: CommentsModel[] = [];
  isSubmitProgress: boolean[] = [];
  isReplyinProgress: boolean[] = [];
  constructor(private login: LoginService, private CommentsStore: Store<{ commentsList: { commentsModel: CommentsModel[] } }>) { }

  ngOnInit(): void {
    debugger;
    this.CommentsStore.select('commentsList').subscribe((data) => {
      this.comments=[];
      data.commentsModel.filter(com => {
        if (com.CommentID == "BaseComment") {
          this.comments.push(com);
        }
      })
    });
  }

  ReplyClicked(commentsModel: CommentsModel, index: number) {
    this.UserModel = this.login.getuserModel();
    if (this.UserModel != undefined) {
      this.ClearAllReply(index);
      this.ClearAllShowComments(null);
      this.isReply[index] = !this.isReply[index];
      this.isShowComments[index] = this.isShowComments[index] ? !this.isShowComments[index] : false;
    }
    else {
      this.isError = true;
    }

  }

  SubmitClicked(commentsModel: CommentsModel, index: number) {
    this.isSubmitProgress[index] = true;
    this.submitted = true;
    if (this.replycomments.length > 0) {
      //this.commentsModel = [];
      this.submitted = false;
      this.commentsModel = {
        Comments: this.replycomments,
        Email: this.UserModel.Email,
        httpurl: "",
        Name: this.UserModel.Fname,
        NickName: this.UserModel.NName,
        CommentID: commentsModel.ID,
        Date: new Date().toDateString(),
        ID: this.login.UniqueString()
      };
      this.ClearAllShowComments(null);
      this.ClearAllReply(null);
      this.CommentsStore.dispatch(new CommentsAction.AddComments(this.commentsModel));
      this.SetTimeOutForMessageForPosted();
      //this.isReply[index] = !this.isReply[index];
      this.replycomments = "";
      this.isSubmitProgress[index] = false;
    }
    else {
      this.isError = true;
      this.isSubmitProgress[index] = false;
    }
  }

  SetTimeOutForMessageForPosted() {
    this.isPosted = true;
    setTimeout(() => this.isPosted = !this.isPosted, 5000);
  }

  DeleteClicked(commentsModel: CommentsModel, index: number){
    this.CommentsStore.dispatch(new CommentsAction.DeleteComments(index));
  }

  ShowComments(commentsModel: CommentsModel, index: number) {
    this.isReplyinProgress[index] = true;
    let id = commentsModel.ID != undefined ? commentsModel.ID : "";
    this.CommentsStore.select('commentsList').subscribe((data) => {
      this.replies=[];
      data.commentsModel.filter(com => {
        if (com.CommentID == id) {
          this.replies.push(com);
        }
      });
      this.ClearAllShowComments(index);
      this.ClearAllReply(null);
      this.isShowComments[index] = !this.isShowComments[index];
      this.isReply[index] = this.isReply[index] ? !this.isReply[index] : false;
      this.isReplyinProgress[index] = false;
    });
  }

  GetCommentsCount(commentsModel: CommentsModel)
  {
    let count =0;
    this.CommentsStore.select('commentsList').subscribe((data) => {
      data.commentsModel.filter(com => {
        if (com.CommentID == commentsModel.ID) {
          count++;
        }
      })
    });
    return count;
  }

  ClearAllShowComments(index?:number)
  {
    for (let i = 0; i < this.isShowComments.length; ++i) {
      if (index == null || i != index ) {
        this.isShowComments[i] = false;
      }
    }
  }

  ClearAllReply(index?:number)
  {
    for (let i = 0; i < this.isReply.length; ++i) {
      if (index == null || i != index) {
        this.isReply[i] = false;
      }
    }
  }
}
