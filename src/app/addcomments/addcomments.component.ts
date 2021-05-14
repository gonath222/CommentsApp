import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CommentsModel } from '../model/comments.model';
import { UserModel } from '../model/user.model';
import { LoginService } from '../service/login.service';
import * as CommentsAction from '../comments.store/comments.action';

@Component({
  selector: 'app-addcomments',
  templateUrl: './addcomments.component.html',
  styleUrls: ['./addcomments.component.css']
})
export class AddcommentsComponent implements OnInit {
  commentsForm!: FormGroup;
  submitted = false;
  UserModel!: UserModel;
  commentsModel: CommentsModel;
  isError = false;
  isPosted = false;
  isSubmitProgress = false;
  constructor(private fb: FormBuilder, private loginservice: LoginService, private CommentsStore: Store<{ commentsList: { commentsModel: CommentsModel[] } }>) {
    this.loginservice.loggedInUserName.subscribe(users => {
      this.UserModel = users[0];
    });
  }

  ngOnInit(): void {
    this.commentsForm = this.fb.group({
      commentstext: ['', Validators.required],
      commentimage: ['', Validators.nullValidator]
    },
    );
  }

  get registerFormControl() {
    return this.commentsForm.controls;
  }


  SetTimeOutForMessageForPosted() {
    this.isPosted = true;
    setTimeout(() => this.isPosted = !this.isPosted, 5000);
  }

  onSubmit() {
    this.submitted = true;
    this.isSubmitProgress = true;
    this.UserModel = this.loginservice.getuserModel();
    if (this.UserModel == undefined) {
      this.isError = true;
      this.isSubmitProgress = false;
      return;
    }
    if (this.commentsForm.valid && this.UserModel != undefined) {
      this.commentsModel = {
        Comments: this.commentsForm.controls["commentstext"].value,
        Email: this.UserModel.Email,
        httpurl: this.commentsForm.controls["commentimage"].value,
        Name: this.UserModel.Fname,
        NickName: this.UserModel.NName,
        CommentID: "BaseComment",
        Date: new Date().toDateString(),
        ID: this.loginservice.UniqueString()
      };
      this.CommentsStore.dispatch(new CommentsAction.AddComments(this.commentsModel));
      this.isSubmitProgress = false;
      this.SetTimeOutForMessageForPosted();
      this.commentsForm.reset();
    }
    else
    {
      this.isSubmitProgress = false;
    }
  }

 


}
