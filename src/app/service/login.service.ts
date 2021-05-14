import { JsonPipe } from "@angular/common";
import { Injectable } from "@angular/core";
import { of, Subject } from 'rxjs';
import { UserModel } from "../model/user.model";
@Injectable({
    providedIn: "root",
})

export class LoginService {
    private isloggedIn!: boolean;
    private fname!: string;
    private nname!: string;
    private email!: string;
    isUserRegistered = false;
    loggedInUserName = new Subject<UserModel>();
    userModel!: UserModel;

    constructor() {
     }

    login(UserModel: UserModel) {
        this.fname = UserModel.Fname;
        this.nname = UserModel.NName;
        this.email = UserModel.Email;
        this.userModel = UserModel;
        localStorage.setItem("userdata", JSON.stringify(this.userModel));
        this.isloggedIn = true;
        this.loggedInUserName.next(this.userModel);
        return of(this.isloggedIn);
    }

    isUserLoggedIn(): boolean {
        return this.userModel != undefined && this.userModel != null ? true : false;
    }

    getuserName(): string {
        return this.userModel.Fname;
    }
    getuserModel(): UserModel {
        return this.userModel;
    }

    logoutUser(): void {
        localStorage.removeItem("userdata");
        this.userModel = null;
        this.isloggedIn = false;
    }

    isAdmin(): boolean {
        if (this.fname != undefined && this.fname.toLowerCase() == 'admin') {
            return true;
        }
        return false;
    }

    UniqueString() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    
        for (var i = 0; i < 8; i++)
          text += possible.charAt(Math.floor(Math.random() * possible.length));
    
        return text;
      }
}