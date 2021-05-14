import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../model/user.model';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string = "GUEST";
  userModel!: UserModel;
  isUserLoggin = false;
  constructor(private loginservice: LoginService, private router: Router) {
    this.loginservice.loggedInUserName.subscribe(users => {
      this.username = users.NName.toUpperCase();
      this.isUserLoggin = this.loginservice.isUserLoggedIn();
    });
    this.isUserLoggin = this.loginservice.isUserLoggedIn();
    this.username  = this.loginservice.getuserModel() != null ? this.loginservice.getuserModel().NName.toUpperCase() : "GUEST";
  }

  ngOnInit(): void {
  }

  Logout(){
    this.loginservice.logoutUser();
    this.isUserLoggin = this.loginservice.isUserLoggedIn();
    this.username="GUEST";
    this.router.navigate(["viewcomments"]);
  }
}
